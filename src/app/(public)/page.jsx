// app/page.jsx
import Portada from "@/app/(public)/portada/page";
import PortadaCelulares from "@/app/(public)/portadaCelulares/page";
import Seccion1 from "./seccion1/page";

export default function Home({ searchParams }) {


    return (
        <main>
            <Portada></Portada>
            <Seccion1/>

    
        </main>
    );
}