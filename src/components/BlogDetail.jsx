import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactMarkdown from 'react-markdown';

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#efefef] py-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1B1B1B]">Blog post not found</h2>
          <Link 
            to="/#blogs" 
            className="mt-4 inline-flex items-center gap-2 text-[#1B1B1B] hover:opacity-80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#efefef] py-20">
      <div className="container mx-auto px-4 md:px-8">
        <Link 
          to="/#blogs" 
          className="inline-flex items-center gap-2 text-[#1B1B1B] hover:opacity-80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Column */}
          <div 
            className="rounded-xl overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div 
            className="space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="space-y-4">
              <span className="text-sm text-slate-500">{blog.date}</span>
              <h1 className="text-4xl font-bold text-[#1B1B1B]">{blog.title}</h1>
              <p className="text-lg text-[#1B1B1B]/80 leading-relaxed">
                {blog.description}
              </p>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg text-[#1B1B1B]/80 max-w-none">
              {blog.blogText ? (
                <ReactMarkdown>{blog.blogText}</ReactMarkdown>
              ) : (
                <p>No content available for this blog post yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;