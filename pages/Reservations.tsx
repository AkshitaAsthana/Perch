
import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../constants';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get local today's date in YYYY-MM-DD format for the 'min' attribute and validation
  // 'sv-SE' locale consistently provides the YYYY-MM-DD format
  const today = new Date().toLocaleDateString('sv-SE');

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Date validation: Format (YYYY-MM-DD) and Past check
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (!dateRegex.test(formData.date)) {
      newErrors.date = 'Invalid date format (YYYY-MM-DD required)';
    } else if (formData.date < today) {
      newErrors.date = 'Reservations cannot be made for past dates';
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = 'Time is required';
    } else {
      const hours = parseInt(formData.time.split(':')[0]);
      const minutes = parseInt(formData.time.split(':')[1]);
      const timeVal = hours + minutes / 60;

      // Basic bounds check (10 AM to 11 PM)
      if (timeVal < 10 || timeVal > 23) {
        newErrors.time = 'Reservations are available between 10:00 AM and 11:00 PM';
      }
    }

    // Guest count validation
    if (formData.guests < 1) newErrors.guests = 'At least 1 guest required';
    // Removed hard error for parties > 20 to allow selection

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Reservation Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'guests' ? parseInt(value) : value }));
    // Clear error for that field when user starts typing again
    if (errors[name]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <div className="py-16 px-4 animate-fade-in">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Policy & Info */}
        <div className="space-y-12">
          <div className="bg-gold/5 p-8 border-l-4 border-gold">
            <h1 className="text-4xl md:text-6xl font-serif text-gold mb-8">Table Reservations</h1>
            <p className="text-white text-lg leading-relaxed font-serif italic mb-6">
              "Experience the best of Downtown Los Angeles from the heights of the 15th floor."
            </p>
            <p className="text-gray-400 leading-loose">
              {RESTAURANT_INFO.reservationPolicy}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold tracking-widest text-sm mb-4">DRESS CODE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Upscale Casual. No beachwear, athletic wear, or overly casual attire. We recommend dressing for the occasion as you enjoy the skyline.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold tracking-widest text-sm mb-4">AGE POLICY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                21+ after 9:00 PM nightly. Families are welcome for Lunch, Brunch, and early Dinner service.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-8 rounded-sm backdrop-blur-sm border border-white/10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-gold text-3xl"></i>
              </div>
              <h2 className="text-3xl font-serif text-white mb-4">Merci Beaucoup!</h2>
              <p className="text-gray-400">
                Your reservation request for <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been received. 
                Our host will confirm via email shortly.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', date: '', time: '', guests: 2 });
                }}
                className="mt-8 text-gold border-b border-gold uppercase tracking-widest text-xs font-bold hover:text-white hover:border-white transition-colors"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex justify-between">
                    <span>Your Name</span>
                    {errors.name && <span className="text-red-500 lowercase tracking-normal font-normal">*{errors.name}</span>}
                  </label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Jean-Luc Picard"
                    className={`w-full bg-black/50 border ${errors.name ? 'border-red-500/50' : 'border-white/20'} rounded-none p-3 focus:border-gold outline-none transition-colors text-white`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex justify-between">
                    <span>Email Address</span>
                    {errors.email && <span className="text-red-500 lowercase tracking-normal font-normal">*{errors.email}</span>}
                  </label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="jean@example.com"
                    className={`w-full bg-black/50 border ${errors.email ? 'border-red-500/50' : 'border-white/20'} rounded-none p-3 focus:border-gold outline-none transition-colors text-white`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex justify-between">
                    <span>Date</span>
                    {errors.date && <span className="text-red-500 lowercase tracking-normal font-normal">*</span>}
                  </label>
                  <input 
                    name="date"
                    required
                    type="date" 
                    min={today}
                    className={`w-full bg-black/50 border ${errors.date ? 'border-red-500/50' : 'border-white/20'} rounded-none p-3 focus:border-gold outline-none transition-colors text-white`}
                    value={formData.date}
                    onChange={handleChange}
                  />
                  {errors.date && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.date}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold flex justify-between">
                    <span>Time</span>
                    {errors.time && <span className="text-red-500 lowercase tracking-normal font-normal">*</span>}
                  </label>
                  <input 
                    name="time"
                    required
                    type="time" 
                    className={`w-full bg-black/50 border ${errors.time ? 'border-red-500/50' : 'border-white/20'} rounded-none p-3 focus:border-gold outline-none transition-colors text-white`}
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Guests</label>
                  <select 
                    name="guests"
                    className="w-full bg-black/50 border border-white/20 rounded-none p-3 focus:border-gold outline-none transition-colors text-white"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8,9,10,12,15,20,25,30,40,50].map(n => (
                      <option key={n} value={n} className="bg-[#111]">
                        {n} {n === 50 ? 'or more' : ''} Guests
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {formData.guests >= 6 && (
                <div className="p-3 bg-gold/10 border border-gold/30 flex gap-3 items-center animate-fade-in">
                  <i className="fas fa-info-circle text-gold"></i>
                  <p className="text-[10px] text-gold uppercase tracking-widest leading-relaxed">
                    Groups of 6 or more are subject to an automatic 20% gratuity.
                  </p>
                </div>
              )}

              {formData.guests > 20 && (
                <div className="p-3 bg-white/5 border border-white/20 flex gap-3 items-center animate-fade-in">
                  <i className="fas fa-envelope text-white/50"></i>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                    For parties larger than 20, we suggest contacting our events team at <span className="text-gold">events@perchla.com</span> for the best experience.
                  </p>
                </div>
              )}

              {errors.time && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest text-center">{errors.time}</p>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gold hover:bg-white text-black py-4 font-bold tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    PROCESSING...
                  </>
                ) : (
                  'REQUEST RESERVATION'
                )}
              </button>
              
              <p className="text-center text-gray-500 text-[10px] uppercase tracking-[0.2em]">
                Submitting this form requests a reservation. A confirmation email will follow.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
