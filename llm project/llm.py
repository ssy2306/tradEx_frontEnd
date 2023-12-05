from langchain.prompts import PromptTemplate
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.llms import CTransformers

def load_llm():
    llm=CTransformers(
        model='llama-2-7b-chat.ggmlv3.q8_0.bin',
        model_type='llama',
        max_new_tokens=512,
        temperature=0.1
    )
    return llm
def return_prompt(prompt):
    llm=load_llm()
    return(llm(prompt))
