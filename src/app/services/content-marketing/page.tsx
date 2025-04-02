'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ContentMarketingPage = () => {
  const benefits = [
    {
      title: "Increases Brand Awareness",
      description: "Expand your reach and visibility through strategic content distribution.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Boosts SEO & Website Traffic",
      description: "Improve your search rankings and drive organic traffic to your website.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Builds Trust & Credibility",
      description: "Establish your authority and build lasting relationships with your audience.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Drives Conversions & Leads",
      description: "Convert visitors into customers through compelling content strategies.",
      icon: (
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const services = [
    {
      title: "Blog Writing & Articles",
      description: "Engaging, SEO-optimized content that resonates with your target audience.",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      details: [
        "SEO-optimized content structure",
        "Engaging storytelling techniques",
        "Research-backed information",
        "Regular content updates",
        "Custom writing style"
      ],
      frontColor: "from-[#00F0FF] to-[#00CDDB]",
      backColor: "from-blue-600 to-blue-800"
    },
    {
      title: "Video Content Creation",
      description: "Professional video content that tells your brand story effectively.",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        "Professional video production",
        "Motion graphics and animations",
        "Script writing and storyboarding",
        "Multi-platform optimization",
        "Engaging visual effects"
      ],
      frontColor: "from-[#00CDDB] to-[#00A7B3]",
      backColor: "from-purple-600 to-purple-800"
    },
    {
      title: "Infographics & Visual Content",
      description: "Eye-catching visual content that simplifies complex information.",
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      details: [
        "Custom infographic design",
        "Data visualization",
        "Brand-consistent styling",
        "Interactive elements",
        "Social media optimization"
      ],
      frontColor: "from-[#00A7B3] to-[#00CEC8]",
      backColor: "from-green-600 to-green-800"
    },
    {
      title: "E-books & Whitepapers",
      description: "In-depth content that positions you as an industry expert.",
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      details: [
        "Comprehensive research",
        "Professional formatting",
        "Lead generation focus",
        "Industry insights",
        "Distribution strategy"
      ],
      frontColor: "from-[#00CEC8] to-[#00A5A0]",
      backColor: "from-orange-600 to-orange-800"
    },
    {
      title: "Content Strategy & Distribution",
      description: "Comprehensive content planning and multi-channel distribution.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      details: [
        "Content calendar planning",
        "Channel strategy",
        "Performance tracking",
        "Audience targeting",
        "ROI optimization"
      ],
      frontColor: "from-[#00A5A0] to-[#00F0FF]",
      backColor: "from-indigo-600 to-indigo-800"
    },
    {
      title: "Social Media Content",
      description: "Engaging social media content that builds community and drives engagement.",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      details: [
        "Platform-specific content",
        "Community engagement",
        "Trend monitoring",
        "Hashtag strategy",
        "Social listening"
      ],
      frontColor: "from-[#00F0FF] to-[#00CDDB]",
      backColor: "from-pink-600 to-pink-800"
    }
  ];

  const faqs = [
    // Basics Category
    {
      question: "What is Content Marketing and how can it benefit my business?",
      answer: "Content marketing is a strategic approach focused on creating and sharing valuable, relevant content to attract and engage your target audience. It helps build brand awareness, drive organic traffic, generate leads, and establish your business as an industry authority. Our services can increase your online visibility, improve customer engagement, and drive sustainable growth.",
      category: "Basics",
      related: ["How do you measure success?", "What types of content do you create?"]
    },
    {
      question: "Why is content marketing important for my business?",
      answer: "Content marketing is crucial because it builds trust, establishes authority, and creates lasting relationships with your audience. It's cost-effective compared to traditional advertising, provides long-term value, and helps you reach and engage your target audience where they are.",
      category: "Basics",
      related: ["What is Content Marketing?", "How do you measure success?"]
    },
    {
      question: "How does content marketing differ from traditional marketing?",
      answer: "Content marketing focuses on providing value to your audience through educational, entertaining, or informative content, rather than directly promoting products or services. It builds relationships over time and creates lasting brand awareness, unlike traditional marketing which often focuses on immediate sales.",
      category: "Basics",
      related: ["What is Content Marketing?", "Why is content marketing important?"]
    },

    // Timeline Category
    {
      question: "How long does it take to see results from content marketing?",
      answer: "While some initial improvements can be seen within 3-6 months, content marketing is a long-term strategy that delivers compounding returns. You'll typically see significant improvements in traffic, engagement, and conversions within 6-12 months. We focus on building a sustainable foundation that continues to grow over time.",
      category: "Timeline",
      related: ["How do you measure success?", "What is your content strategy process?"]
    },
    {
      question: "What milestones should I expect in the first year?",
      answer: "In the first year, you can expect to see: 1) Initial traffic growth within 3-4 months, 2) Improved search rankings by 6 months, 3) Increased engagement and leads by 8-10 months, and 4) Significant ROI by the end of the year. We provide regular progress reports to track these milestones.",
      category: "Timeline",
      related: ["How long does it take to see results?", "How do you measure success?"]
    },
    {
      question: "How often should we create new content?",
      answer: "The frequency depends on your industry, resources, and goals. We typically recommend: 2-3 blog posts per week, 1-2 videos per month, and daily social media updates. We'll create a content calendar tailored to your specific needs and capacity.",
      category: "Timeline",
      related: ["What is your content strategy process?", "What types of content do you create?"]
    },

    // Services Category
    {
      question: "What types of content do you create and how do you ensure quality?",
      answer: "We create a comprehensive range of content including blog posts, articles, videos, infographics, e-books, and social media content. Our quality assurance process includes expert writers, editors, and fact-checkers to ensure all content meets high standards, is SEO-optimized, and resonates with your target audience.",
      category: "Services",
      related: ["What is Content Marketing?", "How do you ensure content quality?"]
    },
    {
      question: "Do you offer content creation in multiple languages?",
      answer: "Yes, we offer content creation in multiple languages to help you reach a global audience. Our team includes native speakers and professional translators to ensure your content maintains its quality and cultural relevance across different languages.",
      category: "Services",
      related: ["What types of content do you create?", "How do you ensure content quality?"]
    },
    {
      question: "How do you handle content updates and maintenance?",
      answer: "We provide regular content audits and updates to keep your content fresh and relevant. This includes updating statistics, refreshing outdated information, and optimizing content for current SEO best practices. We also monitor performance metrics to identify content that needs improvement.",
      category: "Services",
      related: ["What types of content do you create?", "How do you measure success?"]
    },

    // Analytics Category
    {
      question: "How do you measure and report content marketing success?",
      answer: "We track key performance indicators including website traffic, engagement rates, conversion rates, search rankings, and ROI. Our monthly reports provide detailed analytics, performance metrics, and actionable recommendations to continuously improve your content strategy.",
      category: "Analytics",
      related: ["How long does it take to see results?", "What is your reporting process?"]
    },
    {
      question: "What metrics do you track and why?",
      answer: "We track comprehensive metrics including: organic traffic, time on page, bounce rates, social shares, conversion rates, and ROI. These metrics help us understand your content's performance, identify areas for improvement, and demonstrate the value of your content marketing investment.",
      category: "Analytics",
      related: ["How do you measure success?", "What is your reporting process?"]
    },
    {
      question: "How do you use analytics to improve content strategy?",
      answer: "We analyze performance data to identify top-performing content, understand audience behavior, and optimize future content. This includes analyzing user engagement patterns, identifying successful topics, and adjusting content formats based on audience preferences.",
      category: "Analytics",
      related: ["What metrics do you track?", "How do you measure success?"]
    },

    // Process Category
    {
      question: "What is your content strategy process and how do you ensure it aligns with our goals?",
      answer: "Our process begins with thorough research and audience analysis to understand your business goals and target market. We then develop a customized content strategy, create high-quality content, and distribute it across multiple channels. We continuously monitor performance and adjust our approach to ensure optimal results aligned with your objectives.",
      category: "Process",
      related: ["How do you measure success?", "What types of content do you create?"]
    },
    {
      question: "How do you ensure content aligns with our brand voice?",
      answer: "We start with a detailed brand voice analysis, including your tone, style, and key messaging. We create content guidelines and maintain consistent brand voice across all content. Regular reviews and feedback ensure your brand's personality shines through in every piece of content.",
      category: "Process",
      related: ["What is your content strategy process?", "How do you ensure content quality?"]
    },
    {
      question: "What's your approach to content ideation and planning?",
      answer: "Our content ideation process includes: 1) Audience research and persona development, 2) Competitor analysis, 3) Keyword research, 4) Content gap analysis, and 5) Editorial calendar planning. We use data-driven insights and creative brainstorming to develop content ideas that resonate with your audience.",
      category: "Process",
      related: ["What is your content strategy process?", "How do you ensure content quality?"]
    }
  ];

  const categories = ["Basics", "Timeline", "Services", "Analytics", "Process"];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ [key: string]: boolean | null }>({});

  const filteredFaqs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : [];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleFeedback = (question: string, isHelpful: boolean) => {
    setFeedback(prev => ({ ...prev, [question]: isHelpful }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Error loading video:', e);
              // Fallback to background color if video fails to load
              e.currentTarget.style.backgroundColor = '#1a365d';
            }}
          >
            <source src="/images/Contentmarketing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Boost Your Brand with Expert Content Marketing
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Create compelling content that engages your audience and drives results
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get a Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px]"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/images/72ff74d4e3da8c71d8329a5ddae5a524-removebg-preview.png"
                  alt="Content Marketing Strategy"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Transform Your Digital Presence</h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-black leading-relaxed mb-12 font-semibold"
              >
                Content marketing is more than just creating content – it's about delivering value to your audience and building lasting relationships. Our expert team helps you create compelling content that resonates with your target audience and drives meaningful results.
              </motion.p>
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Strategic Content Planning</h3>
                    <p className="text-black font-semibold">Comprehensive planning and execution of content strategies aligned with your business goals.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">SEO-Optimized Creation</h3>
                    <p className="text-black font-semibold">Content that ranks higher in search results and drives organic traffic.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Multi-Channel Distribution</h3>
                    <p className="text-black font-semibold">Strategic content distribution across multiple platforms for maximum reach.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
          >
            Our Content Marketing Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <div className="relative h-[200px] [perspective:1000px]">
                  <div className="absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of Card */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] p-6 rounded-lg shadow-lg bg-gradient-to-br ${service.frontColor} transition-all duration-500`}>
                      <motion.div 
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.div 
                          className="text-white transition-all duration-500 group-hover:scale-110"
                          whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                        >
                          {service.icon}
                        </motion.div>
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-white transition-all duration-500">{service.title}</h3>
                      <p className="text-sm text-white/90 font-medium leading-relaxed transition-all duration-500">{service.description}</p>
                    </div>

                    {/* Back of Card */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-lg shadow-lg bg-gradient-to-br ${service.backColor}`}>
                      <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-white text-sm">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
          >
            Benefits of Content Marketing
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500"
                  initial={false}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className="relative w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    {benefit.icon}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {benefit.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {benefit.description}
                  </motion.p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-500/20 transition-all duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {selectedCategory ? (
              filteredFaqs
                .filter(faq => 
                  searchQuery === "" || 
                  faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                    >
                      <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {expandedIndex === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 mb-4">{faq.answer}</p>
                        
                        {/* Related Questions */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Questions:</h4>
                          <div className="flex flex-wrap gap-2">
                            {faq.related.map((related, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  const relatedIndex = faqs.findIndex(f => f.question === related);
                                  if (relatedIndex !== -1) {
                                    setSelectedCategory(faqs[relatedIndex].category);
                                    setExpandedIndex(relatedIndex);
                                  }
                                }}
                                className="text-sm text-blue-600 hover:text-blue-800"
                              >
                                {related}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Feedback */}
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-medium text-gray-700">Was this helpful?</span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleFeedback(faq.question, true)}
                              className={`p-1 rounded-full ${
                                feedback[faq.question] === true
                                  ? "text-green-600"
                                  : "text-gray-400 hover:text-green-600"
                              }`}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleFeedback(faq.question, false)}
                              className={`p-1 rounded-full ${
                                feedback[faq.question] === false
                                  ? "text-red-600"
                                  : "text-gray-400 hover:text-red-600"
                              }`}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600">Select a category to view FAQs</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/contentmarketing2.png"
            alt="Content Marketing CTA"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
          {/* Animated Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {/* Animated Heading */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to Transform Your Content Strategy?
            </motion.h2>

            {/* Animated Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Let's create compelling content that drives results for your business
            </motion.p>

            {/* Animated Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                  {/* Button Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Let's Get Started</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketingPage; 