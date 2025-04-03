import React, { useState } from 'react'

function Endpoints() {
  const [copySuccessImg, setCopySuccessImg] = useState(false);
  const [copySuccessVid, setCopySuccessVid] = useState(false);
  const [copySuccessCrsel, setCopySuccessCrsel] = useState(false);
  
  const imgRequestCode = `import requests

url = "https://threadsnatch-api.p.rapidapi.com/api/fetch-img"
querystring = {"q":"https://www.threads.net/@example/post/123456789"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "threadsnatch-api.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
print(response.json())`;

  const vidRequestCode = `import requests

url = "https://threadsnatch-api.p.rapidapi.com/api/fetch-vid"
querystring = {"q":"https://www.threads.net/@example/post/123456789"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "threadsnatch-api.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
print(response.json())`;

  const crselRequestCode = `import requests

url = "https://threadsnatch-api.p.rapidapi.com/api/fetch-crsel-media"
querystring = {"q":"https://www.threads.net/@example/post/123456789"}
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "threadsnatch-api.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
print(response.json())`;

  const copyToClipboard = (code, setCopySuccess) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h1 id="endpoints" className="text-5xl font-bold mb-12 text-center">Endpoints</h1>
      
      {/* Fetch Image Data */}
      <section id="endpoints-fetch-img" className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">1. Fetch Image Data</h2>
        <div className="ml-4 space-y-4">
          <div>
            <p className="text-xl font-medium mb-2">Endpoint URL:</p>
            <p className="text-lg font-mono bg-gray-100 p-2 rounded">
              https://threadsnatch-api.p.rapidapi.com/api/fetch-img?q={'{post_url}'}
            </p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">HTTP Method:</p>
            <p className="text-lg">GET</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Query Parameter:</p>
            <ul className="ml-8 text-lg list-disc">
              <li>
                <code className="font-mono bg-gray-100 p-1 rounded">q</code> (required): 
                The URL of the Thread post from which you want to extract image data.
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Response:</p>
            <p className="text-lg">JSON data that includes image URLs, dimensions, and other metadata.</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Example Request:</p>
            <div className="bg-gray-800 rounded-md p-4 text-white font-mono text-sm relative">
              <button 
                onClick={() => copyToClipboard(imgRequestCode, setCopySuccessImg)}
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                {copySuccessImg ? 'Copied!' : 'Copy'}
              </button>
              <pre className="whitespace-pre-wrap">{imgRequestCode}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Fetch Video Data */}
      <section id="endpoints-fetch-vid" className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">2. Fetch Video Data</h2>
        <div className="ml-4 space-y-4">
          <div>
            <p className="text-xl font-medium mb-2">Endpoint URL:</p>
            <p className="text-lg font-mono bg-gray-100 p-2 rounded">
              https://threadsnatch-api.p.rapidapi.com/api/fetch-vid?q={'{post_url}'}
            </p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">HTTP Method:</p>
            <p className="text-lg">GET</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Query Parameter:</p>
            <ul className="ml-8 text-lg list-disc">
              <li>
                <code className="font-mono bg-gray-100 p-1 rounded">q</code> (required): 
                The URL of the Thread post from which you want to extract video data.
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Response:</p>
            <p className="text-lg">JSON data that includes video URLs, resolution details, and other relevant metadata.</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Example Request:</p>
            <div className="bg-gray-800 rounded-md p-4 text-white font-mono text-sm relative">
              <button 
                onClick={() => copyToClipboard(vidRequestCode, setCopySuccessVid)}
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                {copySuccessVid ? 'Copied!' : 'Copy'}
              </button>
              <pre className="whitespace-pre-wrap">{vidRequestCode}</pre>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fetch Carousel Posts */}
      <section id="endpoints-fetch-crsel" className="mb-16">
        <h2 className="text-4xl font-semibold mb-6">3. Fetch Carousel Posts</h2>
        <div className="ml-4 space-y-4">
          <div>
            <p className="text-xl font-medium mb-2">Endpoint URL:</p>
            <p className="text-lg font-mono bg-gray-100 p-2 rounded">
              https://threadsnatch-api.p.rapidapi.com/api/fetch-crsel-media?q={'{post_url}'}
            </p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">HTTP Method:</p>
            <p className="text-lg">GET</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Query Parameter:</p>
            <ul className="ml-8 text-lg list-disc">
              <li>
                <code className="font-mono bg-gray-100 p-1 rounded">q</code> (required): 
                The URL of the Thread post that contains carousel media.
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Response:</p>
            <p className="text-lg">JSON data detailing each media item within the carousel, such as image or video URLs and associated metadata.</p>
          </div>
          
          <div>
            <p className="text-xl font-medium mb-2">Example Request:</p>
            <div className="bg-gray-800 rounded-md p-4 text-white font-mono text-sm relative">
              <button 
                onClick={() => copyToClipboard(crselRequestCode, setCopySuccessCrsel)}
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-xs"
              >
                {copySuccessCrsel ? 'Copied!' : 'Copy'}
              </button>
              <pre className="whitespace-pre-wrap">{crselRequestCode}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Endpoints