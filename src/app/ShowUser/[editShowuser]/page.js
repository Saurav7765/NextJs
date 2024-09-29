'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = (props) => {
    const id = props.params.editShowuser;
    const router = useRouter();

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [category, setCategory] = useState('')


    useEffect(() => {
        getUserDetail();
    }, [id]);
    
    const getUserDetail = async () => {
        let productData = await fetch('http://localhost:3000/api/products/' + id);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCategory(result.category);
        }
    }

    const updateProduct = async () => {
        let data = await fetch('http://localhost:3000/api/products/' + id, {
            method: "put",
            body: JSON.stringify({ name, price, color, category })
        });
        data = await data.json();
        // if (data.result) {
        //     alert("product has been updated");
        //     router.push("/ShowUser")
        //     router.refresh();
        // }

        if (data.success) {
            toast.success("product has been updated");
            setTimeout(() => {
                router.push('/ShowUser');
                router.refresh();
            },1500);
        }

    }




    return (
        <div style={{ width: '90%' }}>
            <Link href='/ShowUser'> Go To Previous Page</Link>
            <div style={{ width: '50%', margin: 'auto', border: '1px solid grey', padding: '10px', borderRadius: '10px' }}>
                <h6 className="text-center text-success">Update Products</h6>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Name</label>
                    <div className="col-sm-9">
                        <input type="text" value={name} placeholder="Enter Product Name To Be Updated" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Price</label>
                    <div className="col-sm-9">
                        <input type="number" value={price} placeholder="Enter Product Price To Be Updated" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Color</label>
                    <div className="col-sm-9">
                        <input type="text" value={color} placeholder="Eneter Product Color To Be Updated" className="form-control" onChange={(e) => setColor(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm font-weight-bold">Product Category</label>
                    <div className="col-sm-9">
                        <input type="text" value={category} placeholder="Enter Product Category To Be Updated" className="form-control" onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" onClick={updateProduct} className="btn btn-success w-25">Update Products</button>
                </div>

            </div>
            <ToastContainer position="bottom-right"  hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition= {Bounce}/>
        </div>
    )

}
export default Page;