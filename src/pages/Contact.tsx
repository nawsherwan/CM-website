import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // In a real production environment, you would send this to a backend or a service like EmailJS / Formspree
    // For now, we simulate a successful send to teams@corceptivemedia.com
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If we wanted to use mailto as a fallback for no-backend:
      // window.location.href = `mailto:teams@corceptivemedia.com?subject=New Contact from ${formData.firstName}&body=${formData.message}`;
      
      setStatus('sent');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
          <p className="text-[18px] font-bold text-[#622f00] mb-14 max-w-lg">
            Share a few details below and someone from our team will get in touch with you ASAP.
          </p>
          
          <p className="text-lg md:text-xl font-light text-[#790000] mb-12">
            We usually reply within 24 hours
          </p>

          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/80 backdrop-blur-sm border border-brand-accent/20 p-10 rounded-3xl text-center shadow-2xl flex flex-col items-center gap-6"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-brand-text mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-light">
                    Thank you for reaching out. We've received your message and will get back to you at <strong>teams@corceptivemedia.com</strong>.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-burgundy text-xs uppercase tracking-widest font-semibold hover:underline flex items-center gap-2"
                >
                  Send another message <ChevronRight className="w-3 h-3" />
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8 w-full max-w-xl" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[12px] uppercase tracking-[0.2em] text-[#000000] font-semibold block">
                      First Name <span className="lowercase font-normal opacity-60">(required)</span>
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-white/60 border-[1.25px] border-[#a86700] rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[12px] uppercase tracking-[0.2em] text-[#000000] font-bold block">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-white/60 border border-[#a86700] rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[12px] uppercase tracking-[0.2em] text-[#000000] font-semibold block">
                    Email <span className="lowercase font-normal opacity-60">(required)</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Please ensure its a valid email"
                    className="w-full bg-white/60 border border-[#a86700] rounded-xl px-4 py-3.5 font-normal text-[16px] text-[#000000] focus:outline-none focus:border-brand-accent transition-all duration-300 placeholder:text-gray-300 placeholder:font-light"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[12px] uppercase tracking-[0.2em] text-[#000000] font-semibold block">
                    Message <span className="lowercase font-normal opacity-60">(required)</span>
                  </label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/60 border border-[#a86700] rounded-xl px-4 py-3.5 focus:outline-none focus:border-brand-accent transition-all duration-300 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-brand-burgundy text-white px-12 py-3.5 rounded-full text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-black transition-all duration-500 shadow-xl shadow-brand-burgundy/10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs mt-2">Something went wrong. Please try again.</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center items-center relative"
        >
          {/* External Golden Aura/Shine */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/20 blur-[100px] rounded-full opacity-40 pointer-events-none z-0" />
          
          <div className="relative z-10 w-full max-w-xl aspect-[4.5/5.5] overflow-hidden squircle shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_0_60px_-10px_rgba(218,183,133,0.3)] bg-brand-bg-alt group">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/69ff2f7c3919990a72ae9f72/e5fc421e-f2e3-4f1e-998f-50def178214f/corceptivemedia.png" 
              alt="Receptionist at a luxury hotel"
              className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
            />
            {/* Golden Shine Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-accent/10 to-transparent opacity-20" />
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine -skew-x-[25deg]" />
            </div>
            {/* Subtle Golden Inner Border */}
            <div className="absolute inset-0 border border-brand-accent/20 squircle pointer-events-none z-20" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

