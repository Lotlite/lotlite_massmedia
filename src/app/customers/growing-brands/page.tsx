export default function GrowingBrandsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Growing Brands
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Partner with us to raise brand awareness, get licensed UGC, and boost your sales through strategic influencer partnerships.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/50 transition-colors duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                            <div className="text-blue-400 mb-4 text-2xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Brand?</h2>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out hover:scale-105">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
}

const features = [
    {
        icon: '🎯',
        title: 'Strategic Partnerships',
        description: 'Connect with influencers who align perfectly with your brand values and target audience.'
    },
    {
        icon: '📈',
        title: 'Growth Analytics',
        description: 'Track your campaign performance with detailed analytics and actionable insights.'
    },
    {
        icon: '🎨',
        title: 'Creative Content',
        description: 'Get high-quality UGC content that resonates with your audience and drives engagement.'
    },
    {
        icon: '🚀',
        title: 'Brand Scaling',
        description: 'Accelerate your brand growth through targeted influencer marketing campaigns.'
    },
    {
        icon: '💡',
        title: 'Innovation',
        description: 'Stay ahead of trends with innovative marketing strategies and creative approaches.'
    },
    {
        icon: '🤝',
        title: 'Dedicated Support',
        description: 'Get personalized support from our team of marketing experts throughout your journey.'
    }
]; 