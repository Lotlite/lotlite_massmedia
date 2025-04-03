'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BlogPost = ({ params }: { params: { slug: string } }) => {
  // This would typically come from your CMS or database
  const post = {
    title: "The Future of Digital Marketing: AI and Personalization",
    content: `
      <p>Digital marketing is undergoing a significant transformation, driven by artificial intelligence and advanced personalization techniques. As we move forward, these technologies are becoming increasingly central to how businesses connect with their customers.</p>
      
      <h2>The Role of AI in Digital Marketing</h2>
      <p>Artificial intelligence is revolutionizing how marketers understand and interact with their audience. From predictive analytics to automated content generation, AI is making marketing more efficient and effective.</p>
      
      <h2>Personalization at Scale</h2>
      <p>Modern consumers expect personalized experiences, and AI makes it possible to deliver these at scale. By analyzing user behavior and preferences, marketers can create highly targeted campaigns that resonate with individual customers.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Improved customer engagement</li>
        <li>Higher conversion rates</li>
        <li>Better ROI on marketing campaigns</li>
        <li>More efficient resource allocation</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated marketing solutions. The key to success will be staying informed about these developments and implementing them strategically.</p>
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Digital Marketing",
    image: "/images/digital_head_image.webp"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/80">{post.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-[400px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </motion.div>

            {/* Back to Blog Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Link href="/blog">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Blog
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost; 