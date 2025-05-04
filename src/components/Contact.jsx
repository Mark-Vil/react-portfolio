import { useState } from 'react';
import { GithubIcon, LinkedInIcon, FacebookIcon } from './icons';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState({ show: false, success: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('http://wmsurmis.online/email/email-api.php', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      setResponse({
        show: true,
        success: data.status === 'success',
        message: data.message || (data.status === 'success' ? 'Email sent successfully!' : 'Failed to send email')
      });

      if (data.status === 'success') {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 1000);
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse({
        show: true,
        success: false,
        message: 'Network error or server not responding. Please try again.'
      });
    } finally {
      setLoading(false);
      setTimeout(() => setResponse({ show: false, success: false, message: '' }), 5000);
    }
  };

  return (
    <main className="flex w-full min-h-screen items-center justify-center bg-[#efefef] py-20" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between" 
          data-aos="fade-right" 
          data-aos-duration="1000"
          data-aos-delay="200">
            <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#1B1B1B]">
            Let's collaborate
            </h1>
            <p className="text-xl text-[#1B1B1B] mb-4">
            markvilliones.netlify.com
            </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 text-gray-600">
            <div className="flex gap-6">
                <a href="https://github.com/Mark-Vil" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-gray-900 transition-colors w-9 h-9 bg-black rounded-full p-1">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/mark-anthony-villiones-144455262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gray-900 transition-colors w-8">
                  <LinkedInIcon />
                </a>
                <a href="https://www.facebook.com/Nocalan.Mark.007" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gray-900 transition-colors w-8">
                  <FacebookIcon />
                </a>
              </div>
              <div>
                <p className="font-medium text-[#1B1B1B]">Address:</p>
                <p  className="text-[#1B1B1B]">Zamboanga City, Philippines</p>
              </div>
              <div>
                <p className="font-medium text-[#1B1B1B]">Phone:</p>
                <p className="text-[#1B1B1B]">09060440131</p>
              </div>
              
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8 rounded-lg" 
          data-aos="fade-left" 
          data-aos-duration="1000"
          data-aos-delay="400">
  <h3 className="text-2xl font-bold mb-8 text-[#1B1B1B]">Say Hello</h3>
  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
    {/* Name and Email row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="relative">
        <label htmlFor="name" className="block text-[#1B1B1B] mb-2">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="w-full rounded-md bg-transparent placeholder:text-[#1B1B1B]/60 text-[#1B1B1B] focus:outline-none"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="email" className="block text-[#1B1B1B] mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          className="w-full rounded-md bg-transparent placeholder:text-[#1B1B1B]/60 text-[#1B1B1B] focus:outline-none"
          required
        />
      </div>
    </div>

    {/* Subject and Message row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="relative">
        <label htmlFor="subject" className="block text-[#1B1B1B] mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="What is this about?"
          className="w-full rounded-md bg-transparent placeholder:text-[#1B1B1B]/60 text-[#1B1B1B] focus:outline-none"
          required
        />
      </div>
      <div className="relative">
        <label htmlFor="message" className="block text-[#1B1B1B] mb-2">Message</label>
        <textarea
          id="message"
          placeholder="Your message here..."
          rows="5"
          className="w-full rounded-md bg-transparent placeholder:text-[#1B1B1B]/60 text-[#1B1B1B] focus:outline-none resize-none"
          required
        ></textarea>
      </div>
    </div>

    <button
      type="submit"
      disabled={loading}
      className="bg-[#1B1B1B] text-white py-3 px-8 rounded-md hover:bg-black transition-colors w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {loading ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </div>
      ) : success ? (
        <div className="flex items-center">
          <svg className="animate-scale-check -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Sent!
        </div>
      ) : (
        'Send Message'
      )}
    </button>
  </form>
</div>
        </div>
      </div>
    </main>
  );
};

export default Contact;