import React, { useState } from 'react';

const DocsSidebar = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedSections, setExpandedSections] = useState({
    endpoints: true,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'quickstart', label: 'Quick Start Guide', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { 
      id: 'endpoints', 
      label: 'Endpoints', 
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      children: [
        { id: 'endpoints-fetch', label: 'Fetch Thread' },
        { id: 'endpoints-batch', label: 'Batch Fetch' },
        { id: 'endpoints-analytics', label: 'Usage Analytics' }
      ]
    },
    { id: 'error-handling', label: 'Error Handling', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
    { id: 'rate-limits', label: 'Rate Limits', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { id: 'conclusion', label: 'Conclusion', icon: 'M5 13l4 4L19 7' }
  ];

  return (
    <>
      {/* SideBar for Medium to Large Breakpoints */} 
      <div className="hidden md:block">
        <div className="w-64 bg-gray-50 text-gray-800 h-screen overflow-y-auto shadow-lg custom-scrollbar">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cdcdcd;
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #ababab;
            }
          `}</style>

          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-bold">Threads API Docs</h1>
            <p className="text-gray-500 text-sm">v1.0.0</p>
          </div>
          <div className="p-3">
            <div className="bg-blue-600 text-white rounded-md p-2 mb-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">12.2x Faster</span>
              </div>
              <p className="text-xs mt-1">Than competitors</p>
            </div>

            <nav>
              <ul className="space-y-1">
                {sections.map(section => (
                  <li key={section.id}>
                    {section.children ? (
                      <div>
                        <button 
                          onClick={() => toggleSection(section.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 text-left`}
                        >
                          <div className="flex items-center">
                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                            </svg>
                            <span>{section.label}</span>
                          </div>
                          <svg 
                            className={`h-4 w-4 transition-transform ${expandedSections[section.id] ? 'rotate-90' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        {expandedSections[section.id] && (
                          <ul className="pl-6 mt-1 space-y-1">
                            {section.children.map(child => (
                              <li key={child.id}>
                                <a
                                  href={`#${child.id}`}
                                  onClick={() => setActiveSection(child.id)}
                                  className={`block px-3 py-1 rounded-md text-sm ${activeSection === child.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={`#${section.id}`}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center px-3 py-2 rounded-md ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                        </svg>
                        <span>{section.label}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 pt-4 border-t border-gray-200">
              <a 
                href="#api-key" 
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span>Get API Key</span>
              </a>
              <a 
                href="https://rapidapi.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 mt-2 border border-gray-300 hover:bg-gray-200 rounded-md text-center justify-center"
              >
                <span>RapidAPI Marketplace</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <div className="bg-white border-b border-gray-200">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <h1 className="text-lg font-bold">Threads API Docs</h1>
              <span className="ml-2 text-xs text-gray-500">v1.0.0</span>
            </div>
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="bg-gray-50 shadow-lg">
              {/* Performance Badge */}
              <div className="px-4 py-3">
                <div className="bg-blue-600 text-white rounded-md p-2">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">12.2x Faster</span>
                  </div>
                  <p className="text-xs mt-1">Than competitors</p>
                </div>
              </div>

              {/* Mobile Navigation Menu */}
              <nav className="p-3">
                <ul className="space-y-1">
                  {sections.map(section => (
                    <li key={section.id}>
                      {section.children ? (
                        <div>
                          <button 
                            onClick={() => toggleSection(section.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 text-left`}
                          >
                            <div className="flex items-center">
                              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                              </svg>
                              <span>{section.label}</span>
                            </div>
                            <svg 
                              className={`h-4 w-4 transition-transform ${expandedSections[section.id] ? 'rotate-90' : ''}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          {expandedSections[section.id] && (
                            <ul className="pl-6 mt-1 space-y-1">
                              {section.children.map(child => (
                                <li key={child.id}>
                                  <a
                                    href={`#${child.id}`}
                                    onClick={() => {
                                      setActiveSection(child.id);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`block px-3 py-1 rounded-md text-sm ${activeSection === child.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                  >
                                    {child.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <a
                          href={`#${section.id}`}
                          onClick={() => {
                            setActiveSection(section.id);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center px-3 py-2 rounded-md ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                        >
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                          </svg>
                          <span>{section.label}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col space-y-2">
                  <a 
                    href="#api-key" 
                    className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <span>Get API Key</span>
                  </a>
                  <a 
                    href="https://rapidapi.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-200 rounded-md text-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>RapidAPI Marketplace</span>
                  </a>
                </div>
              </nav>
            </div>
          )}

          {/* When menu is closed, show current section indicator */}
          {!mobileMenuOpen && (
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span>
                  {sections.find(s => s.id === activeSection)?.label || 
                   sections.find(s => s.children?.some(c => c.id === activeSection))?.children?.find(c => c.id === activeSection)?.label}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DocsSidebar;