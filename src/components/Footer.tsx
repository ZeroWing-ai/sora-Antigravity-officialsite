export default function Footer() {
    return (
        <footer id="contact" className="py-8 bg-slate-100 border-t border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-500">
                    &copy; {new Date().getFullYear()} Sora. 全著作権所有.
                </p>
            </div>
        </footer>
    );
}
