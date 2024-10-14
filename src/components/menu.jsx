import Link from "next/link";
//import "@/components/menu.css"

export default function Menu(){
    return(
        <>
            <link className="link" href="/usuarios">Usuarios</link>
            <link className="link" href="/masDatos">Mas De Usuario</link>
            <Link className="link" href="/chat">Chat</Link>
            <Link className="link" href="/universidades">Universidades</Link>
        </>
    );
}