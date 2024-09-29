const showProducts = async () =>{
    let data = await fetch('http://localhost:3000/api/products' ,{cache:'no-store'});
    data = await data.json();
    return data.result;
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
 import DeletedataByid from '../util/DeletedataByid/page'



const Page = async () => {
    const products = await showProducts();
 
    return (
        <div className="my-2" style={{ width: '90%' }}>
            <div className="mb-3">
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <Link href='/'>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ width: '23px', color: 'white', background: 'blue', borderRadius: '5px', padding: '5px' }} />
                    </Link>
                    <Link href='/AddProducts' className="addProducts"> Add Products</Link>
                </div>
            </div>

            <div className="card">
                <div className="card-body" style={{maxHeight:'415px' , overflowX:'auto'}}>
                    <table className="table table-hover" style={{ fontSize: '14px' , position:'relative'}}>
                    <thead style={{ position: 'sticky', top: '-17px'}}>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Color</th>
                                <th>Category</th>
                                <th style={{width:'190px' , textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? products.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.color}</td>
                                        <td>{item.category}</td>
                                        <td style={{textAlign:'center'}}>
                                            <Link className="btn1 btnedit" href={"ShowUser/" + item._id}>Edit</Link>
                                            <DeletedataByid id={item._id} />
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5}>No Records Found....</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
