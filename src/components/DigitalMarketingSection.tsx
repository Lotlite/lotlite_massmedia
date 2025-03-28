import { motion } from 'framer-motion';

export default function DigitalMarketingSection() {
  return (
    <section className="py-8 lg:py-12 2xl:py-14 flex flex-col lg:flex-row justify-between gap-4 items-center bg-white px-4 md:px-8 xl:px-14 2xl:px-32 3xl:px-32">
      <div className="w-full sm:w-1/2 lg:w-[40%] h-[700px] flex items-center">
        <motion.img
          alt="digital marketing head"
          loading="eager"
          width="800"
          height="1000"
          decoding="async"
          className="w-full mx-auto h-[700px] object-contain"
          src="/images/digital_head_image.webp"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut",
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
      <div className="flex flex-col justify-start w-full lg:w-[55%] space-y-4 3xl:space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Makes Us The Perfect
          <span className="text-blue-600"> Digital Marketing</span> Agency For Your Brand?
        </h2>
        <p className="text-lg leading-tight font-medium text-gray-700">
          GBIM is one of the renowned digital marketing agencies, with many years of experience in this industry, 800+ clientele and seasoned marketing strategists. Look at what makes us your go-to digital agency!
        </p>
        <div className="grid grid-cols-[2%,96%] items-start gap-4 3xl:gap-6 justify-evenly">
          <span className="text-lg sm:text-xl lg:text-3xl text-blue-600 font-bold">1</span>
          <div className="space-y-2">
            <h3 className="text-xl text-blue-600 font-bold">Digital Marketing Strategy</h3>
            <p className="text-gray-700 leading-tight font-medium">
              Our digital marketing strategies include using the best online resources and tools to help your brand connect, engage, and earn revenue from its target audience.
            </p>
            <p className="text-gray-700 leading-tight font-medium">
              We create strategies that make your business profitable on every digital platform.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[2%,96%] items-start gap-4 3xl:gap-6 justify-evenly">
          <span className="text-lg sm:text-xl lg:text-3xl text-gray-900 font-bold">2</span>
          <div className="space-y-2">
            <h3 className="text-xl text-gray-900 font-bold">Performance</h3>
            <p className="text-gray-700 leading-tight font-medium">
              Our performance-focused digital marketing campaigns aim to provide clients with the best ROI and results, ensuring their business and marketing objectives are always met.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-[2%,96%] items-start gap-4 3xl:gap-6 justify-evenly">
          <span className="text-lg sm:text-xl lg:text-3xl text-blue-600 font-bold">3</span>
          <div className="space-y-2">
            <h3 className="text-xl text-blue-600 font-bold">Quality Support</h3>
            <p className="text-gray-700 leading-tight font-medium">
              We support you at every step, from consultation to digital marketing campaign planning to advertising and technology support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 