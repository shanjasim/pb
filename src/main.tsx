import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Attach a scroll-reveal observer for sections with class "reveal"
const attachRevealObserver = () => {
  const nodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((n) => n.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  nodes.forEach((n) => observer.observe(n));

  // Fallback: reveal any still-hidden nodes shortly after mount
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach((n) => n.classList.add('revealed'));
  }, 800);
};

createRoot(document.getElementById("root")!).render(<App />);

// Defer attaching observer until after first paint and after onload
requestAnimationFrame(() => attachRevealObserver());
window.addEventListener('load', () => attachRevealObserver());
