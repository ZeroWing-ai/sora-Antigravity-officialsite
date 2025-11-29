import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Works from '../components/Works';
import Footer from '../components/Footer';
import SkyBackground from '../components/SkyBackground';

export default function Home() {
    return (
        <main className="bg-black min-h-screen relative">
            <SkyBackground />
            <Header />
            <Hero />
            <Profile />
            <Works />
            <Footer />
        </main>
    );
}


