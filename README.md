<h1 align="center">🛡️ Deepfake Detector AI</h1>
<p align="center">
  <b>Detect AI-generated / manipulated images using Google Gemini API in a modern React + Vite app.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/stack-React%20%7C%20TypeScript%20%7C%20Vite-blue" />
  <img src="https://img.shields.io/badge/api-Google%20Gemini-orange" />
  <img src="https://img.shields.io/badge/status-Active-success" />
</p>

<hr />

<h2>🔍 Overview</h2>
<p>
Deepfake Detector AI is a web app that lets you upload an image and quickly check whether it is likely to be
<b>REAL</b> or <b>AI-generated / manipulated</b>. The app sends the image to a
<b>Google Gemini multimodal model</b> via the Gemini API and returns a human-readable verdict with reasoning.
</p>

<h2>✨ Features</h2>
<ul>
  <li>🧠 Powered by <b>Google Gemini vision</b> (via Google AI Studio)</li>
  <li>📸 Upload common image formats (JPG, PNG, JPEG, WEBP)</li>
  <li>✅ Clear verdict: <code>REAL</code> or <code>FAKE</code> + optional explanation text</li>
  <li>⚛️ Built with <b>React + TypeScript + Vite</b> for a fast dev experience</li>
  <li>📦 Clean structure with separated <code>components/</code> and <code>services/</code> folders</li>
</ul>

<h2>🧱 Tech Stack</h2>
<table>
  <tr>
    <td><b>Frontend</b></td>
    <td>React, TypeScript, Vite</td>
  </tr>
  <tr>
    <td><b>Styling</b></td>
    <td>CSS / utility classes (configurable)</td>
  </tr>
  <tr>
    <td><b>AI</b></td>
    <td>Google Gemini API (Google AI Studio)</td>
  </tr>
  <tr>
    <td><b>Build Tool</b></td>
    <td>Vite</td>
  </tr>
</table>

<h2>🚀 Getting Started</h2>

<h3>1️⃣ Clone the repo</h3>
<pre>
git clone https://github.com/digvijay-byte/Deepfake-Image-Detection.git
cd Deepfake-Image-Detection
</pre>

<h3>2️⃣ Install dependencies</h3>
<pre>
npm install
</pre>

<h3>3️⃣ Configure your Gemini API key</h3>
<p>
Create an environment file (for example: <code>.env</code>) in the project root and add your Gemini key:
</p>
<pre>
VITE_GEMINI_API_KEY=your_gemini_api_key_here
</pre>
<p>
Make sure the key name matches what is used inside the <code>services/</code> that call the Gemini API.
You can generate an API key from <b>Google AI Studio</b>.
</p>

<h3>4️⃣ Run the dev server</h3>
<pre>
npm run dev
</pre>
<p>Open the URL shown in your terminal (usually <code>http://localhost:5173</code>).</p>

<h3>5️⃣ Build for production (optional)</h3>
<pre>
npm run build
</pre>

<h2>🖥️ Usage</h2>
<ol>
  <li>Open the web app in your browser.</li>
  <li>Click on the upload area / button to select an image.</li>
  <li>Submit the image for analysis.</li>
  <li>Wait for the Gemini API response — the app will display:
    <ul>
      <li>A verdict: <code>REAL</code> or <code>FAKE</code></li>
      <li>Optional reasoning or explanation text.</li>
    </ul>
  </li>
</ol>

<h2>📂 Project Structure</h2>
<pre>
Deepfake-Image-Detection/
├─ components/
│  └─ ... UI components (upload area, result card, loader, etc.)
├─ services/
│  └─ ... Gemini API helpers & request logic
├─ App.tsx
├─ index.tsx
├─ index.html
├─ metadata.json
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
</pre>

<h2>🧭 Possible Improvements</h2>
<ul>
  <li>Heatmap / overlay to highlight suspicious regions in the image</li>
  <li>History of past checks stored locally</li>
  <li>Confidence score visualization (progress bar / gauge)</li>
  <li>Drag-and-drop support and multiple image comparison</li>
</ul>

<h2>🛡️ Disclaimer</h2>
<p>
This project is intended for <b>educational and research purposes only</b>.
It should not be used for surveillance, harassment, discrimination, or any form of rights violation.
Model outputs may be inaccurate; always combine automated checks with human judgement.
</p>

<h2>⭐ Support</h2>
<p>
If you find this project useful, consider giving it a ⭐ on GitHub.
It helps others discover the repo and motivates future improvements.
</p>

<p align="center">
  Made with ❤️ using React, Vite & Google Gemini.
</p>
