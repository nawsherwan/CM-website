import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden bg-brand-bg">
      {/* Subtle Background Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[conic-gradient(from_0deg_at_50%_50%,#fcece4_0%,#fff_50%,#fdfcf9_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Left Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-7xl font-serif mb-6 text-brand-text leading-tight">Let’s get in touch</h1>
          <p className="text-sm md:text-base font-light text-gray-500 mb-14 max-w-lg">
            Share a few details below and someone from our team will get in touch with you ASAP.
          </p>
          
          <p className="text-lg md:text-xl font-light text-brand-rose mb-12">
            We usually reply within 24 hours
          </p>

          <form className="space-y-8 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">
                  First Name <span className="lowercase font-normal opacity-60">(required)</span>
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white/60 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">
                  Last Name
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white/60 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">
                Email <span className="lowercase font-normal opacity-60">(required)</span>
              </label>
              <input 
                type="email" 
                placeholder="Please ensure its a valid email"
                className="w-full bg-white/60 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300 placeholder:text-gray-300 placeholder:font-light"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold block">
                Message <span className="lowercase font-normal opacity-60">(required)</span>
              </label>
              <textarea 
                rows={4}
                className="w-full bg-white/60 border border-gray-100 rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="bg-brand-burgundy text-white px-12 py-3.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-black transition-all duration-500 shadow-xl shadow-brand-burgundy/10 active:scale-95"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg aspect-[4.5/5.5] overflow-hidden squircle shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-brand-bg-alt">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/69ff2f7c3919990a72ae9f72/e5fc421e-f2e3-4f1e-998f-50def178214f/corceptivemedia.png" 
              alt="Receptionist at a luxury hotel"
              className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
