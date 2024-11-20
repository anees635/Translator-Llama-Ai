# embedding llama ai mode
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch
# token access
from huggingface_hub import login
login(token="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")

# adding model
model_name = "meta-llama/Llama-3.2-1B"
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.2-1B")
model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-3.2-1B")


app = Flask(__name__)
CORS(app)
# creation of function for translation
@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json()
    source_text = data.get("source_text", "")
    source_language = data.get("source_language", "")
    target_language = data.get("source_language", "")
    prompt = f"Translated given text from {source_language} to {target_language}: {source_text} "
    
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens = 200)

    translated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({"translated_text": translated_text})
    



if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5000)

