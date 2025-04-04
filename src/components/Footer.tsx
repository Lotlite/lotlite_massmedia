import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white inline-block relative group">
              MarketPro
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
              {['Home', 'About Us', 'Blogs', 'Contact'].map((link) => (
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
                { label: '📍 123 Business Street, City, Country' },
                { label: '✉️ contact@marketpro.com' },
                { label: '📞 +1 (555) 123-4567' }
              ].map((item) => (
                <li key={item.label} className="relative group inline-block">
                  {item.label}
                  <span className="block h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MarketPro. All rights reserved.
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
