import React from 'react';
import favicon from "@/assets/images/favicon.jpg";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & About */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <img src={favicon} alt="edapt mark" className="h-8 w-8 rounded object-cover" />
              <span className="text-xl font-bold tracking-wide uppercase">EDAPT</span>
            </div>
            <p className="text-sm leading-6 text-slate-400 max-w-md">
              Empowering learners worldwide with cutting-edge AI education since 2017. Building the future of education, one student at a time.
            </p>
            {/* Social */}
            <div className="flex items-center gap-6 mt-6">
              {/* WhatsApp */}
              <a href="#" aria-label="WhatsApp" className="text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 0 5.37 0 12c0 2.1.54 4.1 1.56 5.9L0 24l6.24-1.64A11.88 11.88 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 22a9.86 9.86 0 01-5.02-1.36l-.36-.21-3.74.98.99-3.65-.24-.37A9.82 9.82 0 012.18 12C2.18 6.6 6.6 2.18 12 2.18S21.82 6.6 21.82 12 17.4 21.82 12 21.82zm5.47-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.44-.15-.63.15-.19.3-.73.97-.9 1.17-.17.2-.33.22-.61.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.31.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.5-.5-.68-.51-.18-.01-.39-.02-.6-.02-.21 0-.55.08-.84.38-.29.3-1.11 1.08-1.11 2.64 0 1.56 1.12 3.07 1.28 3.29.16.22 2.22 3.39 5.38 4.7.75.32 1.34.51 1.8.63.76.22 1.46.2 2.01.12.61-.09 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.38z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.62h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              {/* Instagram (outlined for clarity) */}
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-slate-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a2.99 2.99 0 00-2.104-2.116C19.79 3.5 12 3.5 12 3.5s-7.79 0-9.394.57A2.99 2.99 0 00.502 6.186C0 7.79 0 12 0 12s0 4.21.502 5.814a2.99 2.99 0 002.104 2.116C4.21 20.5 12 20.5 12 20.5s7.79 0 9.394-.57a2.99 2.99 0 002.104-2.116C24 16.21 24 12 24 12s0-4.21-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">› Hello AI Textbooks</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› AI Labs Setup</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› AI Creator Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› Professional Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› College Programs</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">› Premium Membership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› Events & Workshops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› Blog & Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">› Partner Network</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><a href="mailto:hello@edapt.me" className="hover:text-white transition-colors">hello@edapt.me</a></li>
                <li><a href="tel:+919072616500" className="hover:text-white transition-colors">+91 90726 16500</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download Edapt App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">24/7 Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} Edapt. All rights reserved. Transforming education since 2017.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Developed by Edapt Technologies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
