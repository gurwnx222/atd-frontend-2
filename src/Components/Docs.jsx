import React from 'react';
import Sidebar from './Sidebar';
import { Overview, QuickStart, Conclusion, Endpoints } from "../sections/index.js";

const Docs = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex items-center my-20 md:flex-1 md:ml-64 md:p-6"> {/* Add left margin to account for sidebar width */}
        <div className=" md:max-w-4xl md:mx-auto">
          {/* Each section needs an ID that matches the HashLink targets */}
          <section id="overview" className="mb-12">
            <Overview />
          </section>
          
          <section id="quickstart" className="mb-12">
            <QuickStart />
          </section>
          
          <section id="endpoints" className="mb-12">
            <Endpoints />
            {/* Add nested section IDs for endpoint children */}
            <div id="endpoints-fetch-img" className="mt-8"></div>
            <div id="endpoints-fetch-vid" className="mt-8"></div>
            <div id="endpoints-fetch-crsel" className="mt-8"></div>
          </section>
          <section id="conclusion" className="mb-12">
            <Conclusion />
          </section>
          
          <section id="api-key" className="mb-12">
            {/* Add your API key section content */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Docs;