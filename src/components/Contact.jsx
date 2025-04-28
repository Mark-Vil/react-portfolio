import { GithubIcon, LinkedInIcon, FacebookIcon } from './icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="hover:text-gray-900 transition-colors w-8">
                  <LinkedInIcon />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
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
      className="bg-[#1B1B1B] text-white py-3 px-8 rounded-md hover:bg-black transition-colors w-full sm:w-auto"
    >
      Send Message
    </button>
  </form>
</div>
        </div>
      </div>
    </main>
  );
};

export default Contact;