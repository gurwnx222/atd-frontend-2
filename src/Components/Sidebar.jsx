import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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
        { id: 'endpoints-fetch-img', label: 'Fetch Images' },
        { id: 'endpoints-fetch-vid', label: 'Fetch Videos' },
        { id: 'endpoints-fetch-crsel', label: 'Fetch Carousel Posts' }
      ]
    },
    { id: 'conclusion', label: 'Conclusion', icon: 'M5 13l4 4L19 7' }
  ];

  return (
    <>
      {/* SideBar for Medium to Large Breakpoints */}
      <div className="hidden md:block fixed top-0 left-0 h-screen z-10">
        <div className="w-64 bg-gray-50 text-gray-800 h-screen overflow-y-auto shadow-lg custom-scrollbar">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-lg font-bold">ThreadSnatch API Docs</h1>
            <p className="text-gray-500 text-sm">v1.0.0</p>
          </div>
          <div className="p-3">
            <div className="bg-blue-600 text-white rounded-md p-2 mb-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">7.5x Faster</span>
              </div>
            </div>

            <nav>
              <ul className="space-y-1">
                {sections.map(section => (
                  <li key={section.id}>
                    {section.children ? (
                      <div>
                        <button 
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 text-left"
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
                                <HashLink
                                  smooth
                                  to={`#${child.id}`}
                                  onClick={() => setActiveSection(child.id)}
                                  className={`block px-3 py-1 rounded-md text-sm ${activeSection === child.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                >
                                  {child.label}
                                </HashLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <HashLink
                        smooth
                        to={`#${section.id}`}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center px-3 py-2 rounded-md ${activeSection === section.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                        </svg>
                        <span>{section.label}</span>
                      </HashLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 pt-4 border-t border-gray-200">
              <HashLink 
                smooth
                to="#api-key" 
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span>Get API Key</span>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
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
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-200 text-left"
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
                                  <HashLink
                                    smooth
                                    to={`#${child.id}`}
                                    onClick={() => {
                                      setActiveSection(child.id);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`block px-3 py-1 rounded-md text-sm ${activeSection === child.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                                  >
                                    {child.label}
                                  </HashLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <HashLink
                          smooth
                          to={`#${section.id}`}
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
                        </HashLink>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col space-y-2">
                  <HashLink 
                    smooth
                    to="#api-key" 
                    className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    <span>Get API Key</span>
                  </HashLink>
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