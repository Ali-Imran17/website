import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-black via-red-950 to-black text-red-600 w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold text-red-600">NETFLIX</h1>
          </div>

          {/* Email Subscription */}
          <div className="flex-1">
            <h3 className="text-sm  text-white mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 w-full sm:w-auto flex-1 border text-white bg-transparent rounded-sm focus:ring-red-900 focus:ring"
              />
              <button
                type="submit"
                className="bg-red-800 text-white font-semibold px-4 py-2 rounded-sm hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 text-white">
          <div>
            <h3 className="text-xl mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400">FAQ</a></li>
              <li><a href="#" className="hover:text-red-400">Investor Relations</a></li>
              <li><a href="#" className="hover:text-red-400">Privacy</a></li>
              <li><a href="#" className="hover:text-red-400">Speed Test</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400">Help Center</a></li>
              <li><a href="#" className="hover:text-red-400">Jobs</a></li>
              <li><a href="#" className="hover:text-red-400">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-red-400">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400">Account</a></li>
              <li><a href="#" className="hover:text-red-400">Ways to Watch</a></li>
              <li><a href="#" className="hover:text-red-400">Corporate Info</a></li>
              <li><a href="#" className="hover:text-red-400">Only on Netflix</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400">Media Center</a></li>
              <li><a href="#" className="hover:text-red-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-red-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-400">We are Hiring</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-white text-sm">
          <p>All Rights Reserved © {new Date().getFullYear()}</p>
          <p>Netflix Pakistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
