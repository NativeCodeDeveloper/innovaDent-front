// app/page.jsx
import Portada from "@/app/(public)/portada/page";
import Footer from "@/Componentes/Footer";

export default function Home({ searchParams }) {
    return (
        <main>
            <Portada />
            <Footer />
        </main>
    );
}