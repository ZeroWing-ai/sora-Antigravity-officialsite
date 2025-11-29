import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Works from '../components/Works';
import Footer from '../components/Footer';
import SkyBackground from '../components/SkyBackground';

export default function Home() {
    return (
        <main className="bg-transparent min-h-screen relative">
            <SkyBackground />
            <div className="relative z-10">
                <Header />
                <Hero />
                <Profile />
                <Works />
                <Footer />
            </div>
        </main>
    );
}


