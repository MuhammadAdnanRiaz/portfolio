import Head from 'next/head';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Header from '../components/header';
import Portfolio from '../components/portfolio';
import Web from '../components/web';

export default function Home() {
  return (
    <div className="font-body text-white bg-black">
      <Header />
      <Portfolio />
      <Web />
      <Contact />
      <Footer />
    </div>
  );
}
