import Header from '../components/Header';
import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Works from '../components/Works';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            <Header />
            <Hero />
            <Profile />
            <Works />
            <Footer />
        </main>
    );
}

　
