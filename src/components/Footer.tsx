export default function Footer() {
    return (
        <footer id="contact" className="py-8 bg-black border-t border-zinc-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Sora. 全著作権所有.
                </p>
            </div>
        </footer>
    );
}
