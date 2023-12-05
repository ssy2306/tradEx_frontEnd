from utils import urls
from langchain.chains import RetrievalQAWithSourcesChain
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import UnstructuredURLLoader
from langchain.vectorstores import Pinecone
import pinecone
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain
import os 
import warnings 
warnings.filterwarnings('ignore') 
from langchain.llms import HuggingFaceHub
from llm import load_llm
PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY', '30db9946-1cc7-4556-b242-76e530a1d2a3')
PINECONE_API_ENV = os.environ.get('PINECONE_API_ENV', 'gcp-starter')
os.environ["HUGGINGFACEHUB_API_TOKEN"] = "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"
def ingestion(prompt):
    url=urls(prompt)
    loader=UnstructuredURLLoader(urls=url)
    data=loader.load()
    text_splitter = RecursiveCharacterTextSplitter(
    separators=['\n\n', '\n', '.', ','],
    chunk_size=500,
    chunk_overlap=0
    )
    docs=text_splitter.split_documents(data)
    print(len(docs))

    embedding=HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2',model_kwargs={'device':'cpu'})
    pinecone.init(
    api_key=PINECONE_API_KEY,  # find at app.pinecone.io
    environment=PINECONE_API_ENV  # next to api key in console
    )
    
    index_name = "lanchainpinecone"
    docsearch=Pinecone.from_texts([t.page_content for t in docs], embedding, index_name=index_name)
    return docsearch
def process(prompt):
    docsearch=ingestion(prompt)
    docs=docsearch.similarity_search(prompt)
    print(len(docs))
    
    llm=HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature":0.5, "max_length":512})
    chain=load_qa_chain(llm,chain_type='stuff')
    return(chain.run(input_documents=docs, question=prompt))
