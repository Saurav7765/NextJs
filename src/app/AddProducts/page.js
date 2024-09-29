'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const router = useRouter();
    const pdata = { name: '', price: '', color: '', category: '' };
    const [product, setProduct] = useState(pdata);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    }

    const onDataAdd = async () => {
        let result = await fetch('http://localhost:3000/api/products', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        console.log(result, "post");
        result = await result.json();

        if (result.success) {
            toast.success("Product Added");
            setProduct(pdata);

            setTimeout(() => {
                router.push('/ShowUser');
                router.refresh();
            },500);
        }
    }

    return (
        <div className="my-2" style={{ width: '90%' }}>
            <Link href='/ShowUser'> Go To Previous Page</Link>
            <div style={{ width: '50%', margin: 'auto', border: '1px solid grey', padding: '10px', borderRadius: '10px' }}>
                <h6 className="text-center text-success">Add Products</h6>

                {/* Input Fields */}
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Name</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" value={product.name} placeholder="Enter Product Name" className="form-control" onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Price</label>
                    <div className="col-sm-9">
                        <input type="number" name="price" value={product.price} placeholder="Enter Product price" className="form-control" onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm">Product Color</label>
                    <div className="col-sm-9">
                        <input type="text" name="color" value={product.color} placeholder="Enter Product Color" className="form-control" onChange={handleChange} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label-sm font-weight-bold">Product Category</label>
                    <div className="col-sm-9">
                        <input type="text" name="category" value={product.category} placeholder="Enter Product Category" className="form-control" onChange={handleChange} />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" onClick={onDataAdd} className="btn btn-success w-25">Add Products</button>
                </div>
            </div>
            <ToastContainer position="bottom-right"  hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition= {Bounce}/>
          
        </div>
    )
}
export default Page;
