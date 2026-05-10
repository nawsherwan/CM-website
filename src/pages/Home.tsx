import { motion, useScroll, useTransform } from 'motion/react';

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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 150]);
  const scale = useTransform(scrollY, [0, 800], [1.1, 1.2]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/fc8e282e-f277-4fad-ab65-3dd2b186d3fb/imgg-demo-wingBtIF.png)',
            y,
            scale,
          }}
        >
          {/* Darkest 1 Color Overlay at 40% Opacity */}
          <div className="absolute inset-0 bg-darkest-1/40" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-6xl px-10 text-center mb-8"
        >
          <h1 className="text-4xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight">
            Where creativity meets clarity <br className="hidden md:block" />
            & vision meets action.
          </h1>
        </motion.div>

        {/* Thick Golden Wavy Divider - Refined Curve and Seamless Fill */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[130px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 130" preserveAspectRatio="none">
            <path 
              d="M0,60 C300,140 600,100 900,40 C1050,10 1200,60 1200,60 V130 H0 Z" 
              fill="#f9f7f0"
            ></path>
            {/* Main Path - More Vibrant and Thick */}
            <path 
              d="M0,60 C300,140 600,100 900,40 C1050,10 1200,60 1200,60" 
              fill="none" 
              stroke="#d4af37" 
              strokeWidth="6" 
              strokeLinecap="round"
              className="opacity-70"
            ></path>
            {/* Light Ray Animation Path */}
            <path 
              d="M0,60 C300,140 600,100 900,40 C1050,10 1200,60 1200,60" 
              fill="none" 
              stroke="#fff" 
              strokeWidth="8" 
              strokeLinecap="round"
              className="animate-light-ray opacity-40"
              style={{ filter: "blur(4px)" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-24 px-6 bg-[#f9f7f0] overflow-hidden -mt-[1px] z-10">
        {/* Luminous Asymmetrical Light Source - Warm Glow from Top Right */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#ffffff_0%,rgba(255,255,255,0.8)_25%,transparent_70%)] opacity-100" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(218,183,133,0.3)_0%,transparent_50%)] opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.4)_0%,transparent_40%)] opacity-60" />
        </div>
        
        {/* Shimmering Bokeh / Light Particles - Highly Visible */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 10 + 1.5; 
            const left = Math.random() * 100 + '%';
            const top = Math.random() * 100 + '%';
            const delay = Math.random() * 10 + 's';
            const duration = 4 + Math.random() * 10 + 's'; 
            const isBokeh = size > 4;
            
            return (
              <div
                key={i}
                className={`absolute rounded-full animate-bubble animate-shimmer ${
                  isBokeh ? 'blur-[5px]' : 'blur-[0.5px] shadow-[0_0_15px_rgba(255,255,255,1)]'
                }`}
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  backgroundColor: 'white',
                  left: left,
                  top: top,
                  opacity: isBokeh ? Math.random() * 0.3 + 0.15 : Math.random() * 0.9 + 0.4,
                  animationDelay: delay,
                  animationDuration: duration,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-30 max-w-4xl mx-auto text-center pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-12 text-[#4a3a32]">Our Approach</h2>
            <p className="text-[22px] font-light leading-relaxed text-[#5a4a42] max-w-[772px] mx-auto">
              We're a team of passionate thinkers and doers, dedicated to building with purpose and clarity. Collaboration and curiosity drive everything we do. Our process is simple, thoughtful, and designed with your experience in mind. We believe great results come from clear steps, open collaboration, and a shared sense of purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-white">
        {/* Layered Radial Glows - Matching About Page Aesthetic but Brighter */}
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,#fff_0%,transparent_60%),radial-gradient(circle_at_80%_40%,#fcece4_0%,transparent_70%),radial-gradient(circle_at_40%_80%,#f7f3f0_0%,transparent_60%)] animate-subtle-drift" />
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_10%_90%,var(--color-brand-rose)_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-brand-text">Our Services</h2>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Explore our range of services designed to help you move forward with confidence, wherever you're headed next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] mb-8">
                <img 
                  src={services[0].image} 
                  alt={services[0].title}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-[24px] font-bold font-serif mb-4 text-[#8e5454]">{services[0].title}</h3>
              <p className="text-[16px] font-normal leading-relaxed text-black max-w-[280px]">
                {services[0].description}
              </p>
            </motion.div>

            {/* Service 2 - Featured/Tall */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/6] overflow-hidden rounded-[32px] mb-8">
                <img 
                  src={services[1].image} 
                  alt={services[1].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-[32px] font-bold font-serif mb-4 text-[#8e5454]">{services[1].title}</h3>
              <p className="text-[16px] font-normal leading-relaxed text-black max-w-[320px]">
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
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[32px] mb-8">
                <img 
                  src={services[2].image} 
                  alt={services[2].title}
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-[24px] font-bold font-serif mb-4 text-[#8e5454]">{services[2].title}</h3>
              <p className="text-[16px] font-normal leading-relaxed text-black max-w-[280px]">
                {services[2].description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
