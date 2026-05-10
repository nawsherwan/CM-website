import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Sophie Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Warm Multi-layered Gradient Glow */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none bg-[radial-gradient(circle_at_40%_30%,#fff_0%,transparent_70%),radial-gradient(circle_at_70%_20%,#fcece4_0%,transparent_60%),radial-gradient(circle_at_20%_80%,#f7f3f0_0%,transparent_50%)] animate-subtle-drift" />
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_80%_80%,var(--color-brand-rose)_0%,transparent_40%)]" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-[45%] flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden squircle shadow-2xl shadow-brand-accent/30">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/98f9a844-4bf0-4f8e-9b2d-01148f573fc9/imgg-demo-dU8iBsrN.png" 
                alt="Sophie"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:w-[55%] text-center md:text-left"
          >
            <h1 className="text-5xl md:text-8xl font-serif mb-10 text-brand-text">Hi, I’m Sophie.</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 max-w-xl">
              This isn’t just a Digital Marketing business—it’s a reflection of what my team believes in. We’re here to create work that matters, led by a shared commitment to quality and scale.
            </p>
          </motion.div>
        </div>

        {/* Thick Burgundy Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,90 C200,130 400,130 600,90 C800,50 1000,50 1200,90 V120 H0 Z" 
              className="fill-brand-bg-alt"
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

      {/* My Approach Section */}
      <section className="py-40 px-6 theme-light-1">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-serif text-brand-text">My Approach</h2>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg md:text-xl font-light leading-loose text-gray-700">
              What began as a passion project has evolved into something more. We’re proud of where we’ve been and even more excited for what’s ahead. What sets us apart isn’t just our process—it’s the intention behind it. We take time to understand, explore, and create with purpose at every turn.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
