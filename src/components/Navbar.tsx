'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-200">
              MarketPro
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-200'
                } px-4 py-2 rounded-md hover:bg-white/10`}
              >
                Home
              </Link>
              
              {/* Customers Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button 
                  className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                    pathname.startsWith('/customers') ? 'text-blue-400' : 'text-white hover:text-blue-200'
                  } px-4 py-2 rounded-md hover:bg-white/10 flex items-center`}
                >
                  Customers
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Customers Dropdown Menu */}
                {isDropdownOpen && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[600px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg py-4 z-50 transition-all duration-200 ease-in-out border border-white/20"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {/* First pair - horizontal */}
                      <Link href="/customers/small-brands" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Small Brands</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Work with micro-influencers on budget-friendly campaigns</p>
                      </Link>

                      <Link href="/customers/growing-brands" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Growing Brands</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Raise brand awareness, get licensed UGC, and boost sales</p>
                      </Link>

                      {/* Second pair - horizontal */}
                      <Link href="/customers/agencies" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Agencies</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Scale your client campaigns on Instagram and TikTok</p>
                      </Link>

                      <Link href="/customers/app-digital" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Apps & Digital</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Differentiate your app with vetted influencers</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                    pathname.startsWith('/services') ? 'text-blue-400' : 'text-white hover:text-blue-200'
                  } px-4 py-2 rounded-md hover:bg-white/10 flex items-center`}
                >
                  Services
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown Menu */}
                {isServicesOpen && (
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[600px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg py-4 z-50 transition-all duration-200 ease-in-out border border-white/20"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-4 px-6">
                      {/* First pair - horizontal */}
                      <Link href="/services/seo" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Search Engine Optimization</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Improve your website's visibility and rankings</p>
                      </Link>

                      <Link href="/services/social-media-marketing" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Social Media Marketing</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Engage your audience across social platforms</p>
                      </Link>

                      {/* Second pair - horizontal */}
                      <Link href="/services/paid-ads" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Paid Advertising</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">PPC & Google Ads management for better ROI</p>
                      </Link>

                      <Link href="/services/content-marketing" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Content Marketing</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Engaging content and copywriting services</p>
                      </Link>

                      {/* Third pair - horizontal */}
                      <Link href="/services/branding" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Branding & Design</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Create a strong brand identity and visuals</p>
                      </Link>

                      <Link href="/services/web-design" className="group transition-all duration-300 p-3 rounded-xl hover:bg-white/20 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-white/30">
                        <div className="flex items-center space-x-3 mb-1">
                          <div className="p-1.5 bg-white/20 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                            <svg className="w-4 h-4 text-white transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <span className="text-sm font-bold text-white group-hover:text-blue-200 transition-all duration-300">Web Design & Development</span>
                        </div>
                        <p className="text-xs text-white/80 group-hover:text-white transition-all duration-300 pl-8">Modern, responsive websites that convert</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-200'
                } px-4 py-2 rounded-md hover:bg-white/10`}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  pathname === '/blog' ? 'text-blue-400' : 'text-white hover:text-blue-200'
                } px-4 py-2 rounded-md hover:bg-white/10`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm font-bold transition-all duration-300 hover:scale-105 ${
                  pathname === '/contact' ? 'text-blue-400' : 'text-white hover:text-blue-200'
                } px-4 py-2 rounded-md hover:bg-white/10`}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 border border-white/20 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Get Started
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/' ? 'text-blue-400' : 'text-white hover:text-blue-200'
              } hover:bg-white/10`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/about' ? 'text-blue-400' : 'text-white hover:text-blue-200'
              } hover:bg-white/10`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/blog' ? 'text-blue-400' : 'text-white hover:text-blue-200'
              } hover:bg-white/10`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === '/contact' ? 'text-blue-400' : 'text-white hover:text-blue-200'
              } hover:bg-white/10`}
            >
              Contact Us
            </Link>
            <Link
              href="/contact#quote"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200 hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 