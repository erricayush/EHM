import React, { useState } from 'react';
import { Search, Calendar, User, Tag, Clock, ArrowRight, Facebook, Twitter, Instagram, Eye, Heart, MessageCircle } from 'lucide-react';

// Mock images for demonstration
import pic1 from "../assets/pic1Blog.jpg";
import pic2 from "../assets/pic2Blog.jpg";
import pic3 from "../assets/pic3Blog.jpg";
import pic4 from "../assets/pic4Blog.jpg";
import pic5 from "../assets/pic5Blog.jpg";

// Enhanced mock data for the blog posts
const featuredPost = {
  category: 'Travel',
  title: 'A title to catch your readers attention',
  excerpt: 'A brief and compelling excerpt that summarizes the blog post content. It should be engaging and make the reader want to click and read more.',
  image: pic1,
  author: 'John Smith',
  readTime: '8 min read',
  views: '2.4k',
  likes: 156,
  comments: 23
};

const recentPosts = [
  {
    id: 1,
    title: 'How to master a new skill in 30 days',
    date: 'July 25, 2025',
    image: pic2,
    category: 'Education',
    author: 'Sarah Johnson',
    readTime: '6 min read',
    views: '1.8k',
    likes: 89,
    comments: 12,
    description: 'Discover proven strategies and techniques to accelerate your learning process. This comprehensive guide covers everything from setting clear goals to creating effective practice routines that will help you master any new skill efficiently.',
    tags: ['Learning', 'Productivity', 'Self-improvement', 'Skills']
  },
  {
    id: 2,
    title: 'A deep dive into the world of AI',
    date: 'July 20, 2025',
    image: pic3,
    category: 'Technology',
    author: 'Dr. Michael Chen',
    readTime: '12 min read',
    views: '3.2k',
    likes: 234,
    comments: 45,
    description: 'Explore the fascinating realm of artificial intelligence, from machine learning fundamentals to cutting-edge applications. Learn how AI is transforming industries and what the future holds for this revolutionary technology.',
    tags: ['AI', 'Machine Learning', 'Technology', 'Future']
  },
  {
    id: 3,
    title: 'The ultimate guide to digital marketing',
    date: 'July 18, 2025',
    image: pic4,
    category: 'Marketing',
    author: 'Emily Rodriguez',
    readTime: '10 min read',
    views: '2.7k',
    likes: 178,
    comments: 31,
    description: 'Master the art of digital marketing with this comprehensive guide covering SEO, social media marketing, content strategy, and paid advertising. Learn proven tactics that drive real results for businesses of all sizes.',
    tags: ['Marketing', 'SEO', 'Social Media', 'Business']
  },
  {
    id: 4,
    title: 'Exploring the best destinations for foodies',
    date: 'July 15, 2025',
    image: pic5,
    category: 'Food & Travel',
    author: 'Marco Antonelli',
    readTime: '7 min read',
    views: '2.1k',
    likes: 145,
    comments: 28,
    description: 'Embark on a culinary journey around the world as we explore the most incredible food destinations. From street food markets in Bangkok to Michelin-starred restaurants in Paris, discover flavors that will tantalize your taste buds.',
    tags: ['Food', 'Travel', 'Culture', 'Adventure']
  },
];

// Enhanced SearchBar Component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full max-w-2xl mx-auto mb-12">
      <div className={`relative flex-grow transition-all duration-300 ${isActive ? 'scale-105' : ''}`}>
        <input
          type="text"
          placeholder="Search articles, topics, or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onKeyPress={handleKeyPress}
          className="w-full px-6 py-4 pr-16 text-gray-700 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg placeholder-gray-400"
        />
        <button 
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-14 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
        >
          <Search size={24} />
        </button>
      </div>
    </div>
  );
};

// Enhanced BlogCard Component
const BlogCard = ({ post, isLarge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer ${
        isLarge ? 'h-auto' : 'h-full'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
            {post.category}
          </span>
        </div>
        
        {/* Reading Time Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-gray-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-full">
        {/* Author and Date */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User size={16} />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>

        {/* Description */}
        {post.description && (
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 text-sm">
            {post.description}
          </p>
        )}

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Stats and CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {/* Engagement Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Eye size={16} />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart size={16} />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={16} />
                <span>{post.comments}</span>
              </div>
            </div>

            {/* Read More Button */}
            <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              Read More
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-16 px-4 font-sans">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover insights, stories, and knowledge from our community of writers
          </p>
        </div>
        
        {/* Search Bar */}
        <SearchBar />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">

          {/* Main Blog Content */}
          <div className="xl:col-span-3 space-y-12">
            
            {/* Featured Post */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                Featured Article
              </h2>
              
              <article className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] group cursor-pointer">
                <img src={featuredPost.image} alt="Featured Post" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative p-8 md:p-12 flex flex-col justify-end h-full text-white">
                  
                  {/* Category and Meta */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-gray-200">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{featuredPost.title}</h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                  
                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        {featuredPost.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {featuredPost.comments}
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
                      Read Article
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            </section>

            {/* Recent Posts Grid */}
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                Recent Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <aside className="xl:col-span-1 space-y-8">
            
            {/* Categories Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                <Tag className="text-blue-600" size={24} />
                Categories
              </h3>
              <ul className="space-y-3">
                {['Technology', 'Lifestyle', 'Travel', 'Business', 'Health', 'Education'].map((category) => (
                  <li key={category}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 group"
                    >
                      <span className="font-medium">{category}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6">Get the latest articles delivered to your inbox weekly.</p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Social Media Widget */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Follow Us</h3>
              <div className="grid grid-cols-3 gap-4">
                <a 
                  href="#" 
                  className="flex flex-col items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Facebook size={28} className="mb-2" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a 
                  href="#" 
                  className="flex flex-col items-center p-4 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-500 hover:text-sky-600 transition-all duration-300 hover:scale-105"
                >
                  <Twitter size={28} className="mb-2" />
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a 
                  href="#" 
                  className="flex flex-col items-center p-4 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-500 hover:text-pink-600 transition-all duration-300 hover:scale-105"
                >
                  <Instagram size={28} className="mb-2" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Popular This Week</h3>
              <div className="space-y-4">
                {recentPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <span className="text-2xl font-bold text-blue-600 min-w-[2rem]">{index + 1}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                        <Eye size={12} />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Custom CSS for line clamping */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default BlogSection;