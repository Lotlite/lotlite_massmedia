import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white inline-block relative group">
              Lotlite Fintech
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-400 text-sm">
              Transform your digital presence with our comprehensive marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Blog', 'Contact'].map((link) => (
                <li key={link} className="relative group">
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors inline-block">
                    {link}
                    <span className="block h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'SEO', path: '/services/seo' },
                { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
                { name: 'Google Ads Management', path: '/services/google-ads' },
                { name: 'Content Marketing', path: '/services/content-marketing' },
                { name: 'Web Design & Development', path: '/services/web-design' },
                { name: 'Local SEO', path: '/services/local-seo' }
              ].map((service) => (
                <li key={service.name} className="relative group">
                  <Link href={service.path} className="text-gray-400 hover:text-white transition-colors inline-block">
                    {service.name}
                    <span className="block h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { label: '📍 Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057' },
                { label: '📞 +91 8805843309' },
                { label: '📞 +91 9766499364' },
                { label: '✉️ contact@lotlitefintech.com' }
              ].map((item) => (
                <li key={item.label} className="relative group inline-block">
                  {item.label}
                  <span className="block h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-500 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:text-blue-500 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://wa.me/91123456789" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-white hover:text-green-500 hover:bg-gray-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lotlite Fintech Pvt Ltd. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="relative group text-gray-400 hover:text-white text-sm transition-colors inline-block">
                  {item}
                  <span className="block h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
