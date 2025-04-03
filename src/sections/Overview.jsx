import React from 'react'

function Overview() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center">Overview</h1>
      
      <div className="mb-10">
        <p className="text-xl mb-8">
          The ThreadSnatch API retrieves <span className='italic'>JSON data</span> for various media posts 
          on Threads by Meta. By simply providing the post URL, you can access all related data quickly 
          and accurately. This API is designed for organizations, businesses, and developers who need 
          fast and reliable data extraction.
        </p>
      </div>
      
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-6">Key Features</h2>
        <ul className="ml-6 text-xl space-y-3 list-disc">
          <li><strong>Speed:</strong> Up to 7.5x faster data fetching to capture more information in less time.</li>
          <li><strong>Versatile Integration:</strong> Works seamlessly with popular programming languages such as Python, Node.js, Java, Kotlin, Ruby, etc.</li>
          <li><strong>Simplicity:</strong> Extract data using only the post URL.</li>
          <li><strong>High Accuracy:</strong> Minimizes errors with precise data extraction.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-4xl font-semibold mb-6">Use Cases</h2>
        <ul className="ml-6 text-xl space-y-3 list-disc">
          <li><strong>Data Analytics:</strong> Ideal for social media and business analytics.</li>
          <li><strong>Backend Integration:</strong> Integrate with your applications to power post downloading and data processing tools.</li>
          <li><strong>Targeted Extraction:</strong> Efficiently extract and analyze posts for market research or trend analysis.</li>
          <li><strong>Enterprise Data Collection:</strong> Supports large-scale data extraction for business intelligence.</li>
        </ul>
      </div>
    </div>
  )
}

export default Overview