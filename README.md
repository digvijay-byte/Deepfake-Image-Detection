<h1 align="center">🛡️ Deepfake Image Detection</h1>
<p align="center"><b>Detect AI-generated / manipulated images using Google Gemini API + Google AI Studio</b></p>
<hr/>

<h2>🔍 Overview</h2>
<p>
This project provides a fast and efficient way to identify whether an image is <b>real</b> or <b>AI-generated/manipulated</b> using
<b>Google Gemini multimodal vision models</b>. Upload an image and the model analyzes visual artifacts and inconsistencies to return a
<b>detection verdict + confidence score</b>.
</p>

<h2>✨ Features</h2>
<ul>
  <li>Powered by <b>Gemini API</b> for deepfake inference</li>
  <li>Supports <b>PNG, JPG, JPEG, WEBP</b></li>
  <li>Shows <b>Real vs Fake result with confidence percentage</b></li>
  <li><b>Streamlit UI</b> for smooth image testing</li>
  <li>Beginner-friendly implementation</li>
</ul>

<h2>🧠 How It Works</h2>
<ol>
  <li>User uploads an image</li>
  <li>The image is processed by <b>Google Gemini Vision model</b></li>
  <li>The model checks for:
    <ul>
      <li>Skin / texture irregularities</li>
      <li>Lighting & shading mismatches</li>
      <li>Facial asymmetry and artifact patterns</li>
      <li>Metadata anomalies common in AI images</li>
    </ul>
  </li>
  <li>App returns:
    <pre>
Prediction: REAL / FAKE
Confidence: XX%
    </pre>
  </li>
</ol>

<h2>🚀 Getting Started</h2>

<h3>1️⃣ Clone the repository</h3>
<pre>
git clone https://github.com/digvijay-byte/Deepfake-Image-Detection.git
cd Deepfake-Image-Detection
</pre>

<h3>2️⃣ Install dependencies</h3>
<pre>
pip install -r requirements.txt
</pre>

<h3>3️⃣ Add your Gemini API key</h3>
<p>Create a <code>.env</code> file:</p>
<pre>
GEMINI_API_KEY=your_api_key_here
</pre>

<h3>4️⃣ Run the Streamlit app</h3>
<pre>
streamlit run app.py
</pre>

<h2>📌 Example Output</h2>
<pre>
Prediction: FAKE
Confidence: 91%

Reasoning:
• Unrealistic skin patterns detected
• Lighting inconsistencies across facial regions
• Metadata does not match natural camera signatures
</pre>

<h2>📂 Project Structure</h2>
<pre>
Deepfake-Image-Detection/
│ app.py
│ README.md
│ requirements.txt
│ .env.example
└── assets/
    └── sample_images
</pre>

<h2>📌 Requirements</h2>
<ul>
  <li>Python 3.8+</li>
  <li>Streamlit</li>
  <li>google-generativeai</li>
  <li>dotenv</li>
</ul>

<pre>
pip install -r requirements.txt
</pre>

<h2>🛡 Disclaimer</h2>
<p>
This tool is built for <b>research and educational purposes only</b>.
Do not use it for harassment, discrimination, privacy invasion, surveillance or misinformation.
</p>

<h2>⭐ Support</h2>
<p>If you find this project helpful, please give it a <b>Star ⭐ on GitHub</b> — it really helps!</p>
<hr/>
<p align="center">Made with ❤️ for security, awareness & responsible AI.</p>
