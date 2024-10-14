import axios from "axios";
import Link from "next/link";

async function getDatos() {
    const url="https://jsonplaceholder.typicode.com/users";
    const usuarios=await axios.get(url);
    return usuarios.data;  
}


export default async function Usuarios(){
    const usuarios=await getDatos();
    return(
        <>
        <h1>Usuarios</h1>
        <p>Estas en usuarios</p>
        <table className="table">

        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                usuarios.map((usuario)=>(
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>
                            <Link href={`/usuarios/${usuario.id}`}>
                            {usuario.name}
                            </Link>
                            </td>
                        <td>{usuario.username}</td >
                        <td>{usuario.email}</td>
                    </tr>
                ))
            }
        </tbody>

        </table>
        </>
    );
}