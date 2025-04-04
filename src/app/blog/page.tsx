'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Digital Marketing',
    'Advertising Trends',
    'Brand Strategy',
    'Social Media Insights',
    'Content Creation'
  ];

  const featuredPost = {
    title: "The Future of Digital Marketing: AI and Personalization",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing and creating more personalized customer experiences.",
    image: "/images/digital_head_image.webp",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Digital Marketing"
  };

  const blogPosts = [
    {
      title: "Social Media Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with our analysis of emerging social media trends and their impact on brand strategy.",
      image: "/images/socialmedia3.jpg",
      author: "Michael Chen",
      date: "March 10, 2024",
      category: "Social Media Insights",
      slug: "social-media-trends-2024"
    },
    {
      title: "Building a Strong Brand Identity",
      excerpt: "Learn the essential elements of creating a memorable and impactful brand identity that resonates with your audience.",
      image: "/images/contentmarketing2.png",
      author: "Emma Davis",
      date: "March 8, 2024",
      category: "Brand Strategy",
      slug: "building-strong-brand-identity"
    },
    {
      title: "The Power of Storytelling in Advertising",
      excerpt: "Explore how compelling narratives can transform your advertising campaigns and connect with your audience on a deeper level.",
      image: "/images/socialmedia.png",
      author: "David Wilson",
      date: "March 5, 2024",
      category: "Advertising Trends",
      slug: "power-of-storytelling-advertising"
    },
    {
      title: "Content Marketing Strategies for 2024",
      excerpt: "Discover the latest content marketing trends and strategies that will help you engage your audience and drive results.",
      image: "/images/Contentmarketing.webp",
      author: "Lisa Anderson",
      date: "March 3, 2024",
      category: "Content Creation",
      slug: "content-marketing-strategies-2024"
    },
    {
      title: "Digital Marketing ROI: Measuring Success",
      excerpt: "Learn how to effectively measure and optimize your digital marketing campaigns for maximum return on investment.",
      image: "/images/digital_head_image.webp",
      author: "James Wilson",
      date: "March 1, 2024",
      category: "Digital Marketing",
      slug: "digital-marketing-roi-measuring-success"
    },
    {
      title: "Social Media Engagement Strategies",
      excerpt: "Master the art of social media engagement with proven strategies to build meaningful connections with your audience.",
      image: "/images/Socialmedia2.jpeg",
      author: "Rachel Chen",
      date: "February 28, 2024",
      category: "Social Media Insights",
      slug: "social-media-engagement-strategies"
    },
    {
      title: "SEO Best Practices for 2024",
      excerpt: "Stay updated with the latest SEO techniques and best practices to improve your website's search engine rankings.",
      image: "/images/digital_head_image.webp",
      author: "Alex Thompson",
      date: "February 25, 2024",
      category: "Digital Marketing",
      slug: "seo-best-practices-2024"
    },
    {
      title: "Video Marketing: The Future of Content",
      excerpt: "Discover why video content is becoming increasingly important and how to leverage it for your marketing strategy.",
      image: "/images/Contentmarketing.webp",
      author: "Sarah Martinez",
      date: "February 22, 2024",
      category: "Content Creation",
      slug: "video-marketing-future-content"
    },
    {
      title: "Email Marketing Campaigns That Convert",
      excerpt: "Learn how to create effective email marketing campaigns that drive engagement and conversions.",
      image: "/images/socialmedia3.jpg",
      author: "Chris Johnson",
      date: "February 20, 2024",
      category: "Digital Marketing",
      slug: "email-marketing-campaigns-convert"
    },
    {
      title: "Brand Voice: Finding Your Unique Tone",
      excerpt: "Master the art of developing a consistent and authentic brand voice that resonates with your target audience.",
      image: "/images/contentmarketing2.png",
      author: "Maria Garcia",
      date: "February 18, 2024",
      category: "Brand Strategy",
      slug: "brand-voice-finding-tone"
    },
    {
      title: "Mobile Marketing Trends",
      excerpt: "Explore the latest trends in mobile marketing and how to optimize your strategy for mobile users.",
      image: "/images/socialmedia.png",
      author: "Tom Wilson",
      date: "February 15, 2024",
      category: "Digital Marketing",
      slug: "mobile-marketing-trends"
    },
    {
      title: "Influencer Marketing Guide",
      excerpt: "A comprehensive guide to creating successful influencer marketing campaigns that drive results.",
      image: "/images/Socialmedia2.jpeg",
      author: "Sophie Chen",
      date: "February 12, 2024",
      category: "Social Media Insights",
      slug: "influencer-marketing-guide"
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === 'All' || post.category === selectedCategory) &&
    (searchQuery === '' || 
     post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/blogs.jpeg")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Blog – Insights & Trends in Mass Media
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover the latest trends, strategies, and insights in digital marketing, advertising, and brand development.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-[400px] md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <Link href="/blog/future-of-digital-marketing">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 relative">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/blog3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Search and Categories Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-6 mb-12 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
          >
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                />
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#3B82F6",
                      color: "white",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      y: -2
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      y: 0
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${selectedCategory === category 
                        ? 'bg-blue-600 text-white shadow-lg ring-2 ring-blue-400 ring-offset-2' 
                        : 'bg-white/20 text-white hover:bg-white/30'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {category}
                    </motion.span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -5
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                  >
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300"
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-white/80 mb-4 group-hover:text-white transition-colors duration-300"
                  >
                    {post.excerpt}
                  </motion.p>
                  <div className="flex items-center justify-between">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="flex items-center"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full mr-3 group-hover:bg-blue-100 transition-colors duration-300"></div>
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{post.author}</p>
                        <p className="text-xs text-white/60">{post.date}</p>
                      </div>
                    </motion.div>
                    <Link href={`/blog/${post.slug}`}>
                      <motion.button 
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-blue-400 font-medium flex items-center gap-1"
                      >
                        Read More
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 relative"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/blogs2.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Stay Updated with Latest Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/90 mb-8"
          >
            Subscribe to our newsletter for weekly updates on digital marketing trends and strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage; 