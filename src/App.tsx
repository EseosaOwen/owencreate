import { useEffect, useRef } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhoIAm from './components/WhoIAm';
import Offer from './components/Offer';
import ProofOfWork from './components/ProofOfWork';
import Series from './components/Series';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children }: { children: React.ReactNode }) {
  const ref = useFadeUp();
  return <div ref={ref}>{children}</div>;
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <FadeSection><Hero /></FadeSection>
        <FadeSection><Problem /></FadeSection>
        <FadeSection><WhoIAm /></FadeSection>
        <FadeSection><Offer /></FadeSection>
        <FadeSection><ProofOfWork /></FadeSection>
        <FadeSection><Series /></FadeSection>
        <FadeSection><Testimonials /></FadeSection>
        <FadeSection><Contact /></FadeSection>
      </main>
      <Footer />
    </>
  );
}
