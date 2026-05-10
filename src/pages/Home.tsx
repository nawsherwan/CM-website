import { motion } from 'motion/react';

const services = [
  {
    title: 'Performance Marketing',
    description: 'We help real estate brands generate high-quality leads through performance-driven marketing, targeted campaigns, and optimized digital strategies designed to maximize visibility, conversions, and ROAS.',
    image: 'https://images.squarespace-cdn.com/content/v1/69ff2f7c3919990a72ae9f72/4822aa00-a9d8-4fd3-a1d4-8e68568d0608/ChatGPT+Image+May+9%2C+2026%2C+08_53_23+PM.png'
  },
  {
    title: 'Digital Marketing',
    description: 'Scale your brand with data-driven performance marketing designed to generate measurable growth. Corceptive Media helps businesses increase visibility, acquire high-intent customers, and maximize ROI through affiliate marketing, media buying, lead generation, and strategic digital campaigns tailored for modern brands.',
    image: 'https://images.squarespace-cdn.com/content/v1/69ff2f7c3919990a72ae9f72/7fb0b279-4814-417b-9beb-3281312741d2/ChatGPT+Image+May+9%2C+2026%2C+08_30_54+PM.png',
    featured: true
  },
  {
    title: 'Brand Strategy',
    description: 'We help you build a stronger brand through strategic positioning, creative direction, and audience-focused messaging designed to create lasting recognition, trust, and meaningful market impact.',
    image: 'https://images.squarespace-cdn.com/content/v1/69ff2f7c3919990a72ae9f72/f170a512-af19-4acd-97d7-8851b140c890/ChatGPT+Image+May+9%2C+2026%2C+09_46_53+PM.png'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] animate-subtle-zoom"
          style={{ 
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/fc8e282e-f277-4fad-ab65-3dd2b186d3fb/imgg-demo-wingBtIF.png)',
          }}
        >
          {/* Subtle Pinkish Tinge Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#fcece4_0%,transparent_70%)] opacity-40 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-6xl px-10 text-center"
        >
          <h1 className="text-4xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight">
            Where creativity meets clarity <br className="hidden md:block" />
            & vision meets action.
          </h1>
        </motion.div>

        {/* Thick Burgundy Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,90 C200,130 400,130 600,90 C800,50 1000,50 1200,90 V120 H0 Z" 
              className="fill-brand-bg"
            ></path>
            <path 
              d="M0,90 C200,130 400,130 600,90 C800,50 1000,50 1200,90" 
              fill="none" 
              stroke="var(--color-brand-burgundy)" 
              strokeWidth="4.2" 
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-24 px-6 bg-brand-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-brand-text">Our Approach</h2>
            <p className="text-md md:text-lg font-light leading-relaxed text-gray-700 max-w-3xl mx-auto">
              We're a team of passionate thinkers and doers, dedicated to building with purpose and clarity. Collaboration and curiosity drive everything we do. Our process is simple, thoughtful, and designed with your experience in mind. We believe great results come from clear steps, open collaboration, and a shared sense of purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32 px-6 theme-light-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-brand-text">Our Services</h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Explore our range of services designed to help you move forward with confidence, wherever you're headed next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-lg">
                <img 
                  src={services[0].image} 
                  alt={services[0].title}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-text">{services[0].title}</h3>
              <p className="text-[13px] font-light leading-relaxed text-gray-600 max-w-[280px]">
                {services[0].description}
              </p>
            </motion.div>

            {/* Service 2 - Featured/Tall */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center md:-translate-y-12"
            >
              <div className="relative w-full aspect-[4/6] overflow-hidden rounded-[80px] mb-8 shadow-xl">
                <img 
                  src={services[1].image} 
                  alt={services[1].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-text">{services[1].title}</h3>
              <p className="text-[13px] font-light leading-relaxed text-gray-600 max-w-[320px]">
                {services[1].description}
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-lg">
                <img 
                  src={services[2].image} 
                  alt={services[2].title}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-text">{services[2].title}</h3>
              <p className="text-[13px] font-light leading-relaxed text-gray-600 max-w-[280px]">
                {services[2].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
