import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const result = await register(username, email, password);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout videoSrc="/videos/hero-2.mp4">
      <div className="flex flex-col items-center">
        {/* Glowing floating text */}
        <h2 className="text-white text-3xl sm:text-4xl font-black mb-2 text-center uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" style={{fontFamily: 'zentry'}}>
          Register
        </h2>
        
        <p className="text-violet-200/80 text-[10px] mb-8 sm:mb-8 text-center font-circular-web tracking-widest uppercase relative after:content-[''] after:block after:w-16 after:h-[1px] after:bg-violet-400 after:mt-5 after:mx-auto after:opacity-50">
          Join the Metagame Layer
        </p>

        {/* Dynamic Error Toast Banner */}
        {error && (
            <div className="w-full bg-red-500/10 border border-red-500/50 rounded-xl p-3 mb-6 flex items-center justify-center animate-fade-in-up">
              <span className="text-red-400 text-[9px] uppercase font-bold tracking-widest text-center leading-relaxed">{error}</span>
            </div>
        )}

        <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
          <div className="relative group">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isSubmitting}
              className="bg-black/50 border border-white/10 text-white text-sm rounded-2xl block w-full px-4 sm:px-5 py-3 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all duration-300 outline-none placeholder-white/30 font-circular-web peer disabled:opacity-50" 
              placeholder="AgentX" 
              required 
            />
            <label className="absolute text-[9px] uppercase font-bold tracking-widest text-violet-300 -top-2 left-4 bg-black/80 px-3 rounded-full transition-all duration-300 peer-placeholder-shown:opacity-0 opacity-100 backdrop-blur-sm border border-white/10">
              Username
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="bg-black/50 border border-white/10 text-white text-sm rounded-2xl block w-full px-4 sm:px-5 py-3 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all duration-300 outline-none placeholder-white/30 font-circular-web peer disabled:opacity-50" 
              placeholder="agent@xentra.io" 
              required 
            />
            <label className="absolute text-[9px] uppercase font-bold tracking-widest text-violet-300 -top-2 left-4 bg-black/80 px-3 rounded-full transition-all duration-300 peer-placeholder-shown:opacity-0 opacity-100 backdrop-blur-sm border border-white/10">
              Agent Email
            </label>
          </div>

          <div className="relative group mb-1">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              className="bg-black/50 border border-white/10 text-white text-sm rounded-2xl block w-full px-4 sm:px-5 py-3 focus:border-violet-400 focus:ring-1 focus:ring-violet-400 transition-all duration-300 outline-none placeholder-white/30 font-circular-web peer disabled:opacity-50" 
              placeholder="••••••••" 
              required 
            />
            <label className="absolute text-[9px] uppercase font-bold tracking-widest text-violet-300 -top-2 left-4 bg-black/80 px-3 rounded-full transition-all duration-300 peer-placeholder-shown:opacity-0 opacity-100 backdrop-blur-sm border border-white/10">
              Access Code
            </label>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full text-black bg-white/90 hover:bg-white font-bold rounded-2xl text-xs sm:text-sm px-5 py-3 sm:py-4 text-center transition-all duration-500 transform hover:-translate-y-1 active:scale-[0.98] uppercase tracking-widest shadow-[0_5px_40px_rgba(139,92,246,0.2)] hover:shadow-[0_10px_50px_rgba(139,92,246,0.4)] mt-2 sm:mt-3 disabled:hover:translate-y-0 disabled:opacity-50"
          >
            {isSubmitting ? 'Registering...' : 'Create Account'}
          </button>
        </form>

        <p className="text-[10px] font-light text-gray-400 mt-6 sm:mt-8 font-circular-web text-center uppercase tracking-widest">
          Already an agent? <Link to="/login" className="text-white hover:text-violet-300 font-bold underline underline-offset-4 transition-colors">Log in</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
