from flask import Flask, request, jsonify
from flask_cors import CORS
from llm_process import process
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/send-message', methods=['POST'])
def receive_message():
    data = request.json
    message = data.get('message')

    # Process the received message (You can add your logic here)

    # For demonstration purposes, let's echo the received message
    print(f'{message}')
    prompt=process(message)
    print(prompt)
    response_data = {'message': prompt}
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True,port=5000)  
