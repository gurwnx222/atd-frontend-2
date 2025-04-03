import React, { useState } from 'react'

function QuickStart() {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const pythonCode = `import requests

# Replace <POST_URL> with the URL of the post you want to extract data from.
# Replace YOUR_API_KEY with your actual Rapid API key.
url = "https://api.threadsnatch.com/post?url=<POST_URL>"
headers = {"X-RapidAPI-Key": "YOUR_API_KEY"}
response = requests.get(url, headers=headers)
data = response.json()
print(data)`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center">Quick Start Guide</h1>
      
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-6">Prerequisites</h2>
        <p className="text-xl mb-4">Before you begin, make sure you have:</p>
        <ul className="ml-6 text-xl list-disc space-y-2">
          <li>A Rapid API account. Sign up if you haven't already.</li>
          <li>Your API keys from Rapid API. Test the API via Rapid API to ensure it works as expected.</li>
          <li>No special hardware is required.</li>
        </ul>
      </div>
      
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-6">Getting Started</h2>
        <ol className="ml-6 text-xl list-decimal space-y-6">
          <li>
            <strong>Sign Up & Obtain API Keys:</strong>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Create your Rapid API account.</li>
              <li>Retrieve your API keys from your account dashboard.</li>
            </ul>
          </li>
          
          <li>
            <strong>Test the API:</strong>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Use a sample post URL on Rapid API's testing interface to verify the API functionality.</li>
            </ul>
          </li>
          
          <li>
            <strong>Integrate into Your Application:</strong>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Follow the code examples below for a quick integration in your preferred programming language.</li>
            </ul>
          </li>
        </ol>
      </div>
      
      <div>
        <h3 className="text-3xl font-semibold mb-6">Python Example</h3>
        <div className="bg-gray-800 rounded-md p-4 text-white font-mono text-sm relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
          >
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
          <pre className="whitespace-pre-wrap">{pythonCode}</pre>
        </div>
      </div>
    </div>
  )
}

export default QuickStart