import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Works from '../components/Works';
import Footer from '../components/Footer';
import WaveBackground from '../components/WaveBackground';

export default function Home() {
    return (
        <main className="bg-transparent min-h-screen relative">
            <WaveBackground />
            <div className="relative z-20">
                <Header />
                <Hero />
                <Profile />
                <Works />
                <Footer />
            </div>
        </main>
    );
}


