import axios from "axios";
async function getMasDatos(id) {
    const url=`https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario= await axios.get(url);
    return usuario.data;
}

export default async function Usuarios({params}) {
    const usuario =await getMasDatos(params.id);
    return(
        <>  
        <table className="table">


            <thead>
                <tr>
                    <th>Id</th>
                    <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Lat</th>
                        <th>Lng</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Name</th>
                        <th>CatchPhrase</th>
                        <th>BS</th>
                </tr>
            </thead>
            <tbody>
            <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.address.street}</td>
                        <td>{usuario.address.suite}</td>
                        <td>{usuario.address.city}</td>
                        <td>{usuario.address.zipcode}</td>
                        <td>{usuario.address.geo.lat}</td>
                        <td>{usuario.address.geo.lng}</td> 
                        <td>{usuario.phone}</td>
                        <td>{usuario.website}</td>
                        <td>{usuario.company.name}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.company.catchPhrase}</td>
                        <td>{usuario.company.bs}</td>
                        </tr>
            </tbody>
        </table>


        </>
    );
}