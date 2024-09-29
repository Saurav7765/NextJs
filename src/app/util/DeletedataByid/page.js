'use client';

import { useRouter } from "next/navigation";
import { ToastContainer, toast , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = (props) => {
    const dataId = props.id;
    const router = useRouter();

    const deletedataById = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        
        if (confirmDelete) {
            try {
                let result = await fetch(`http://localhost:3000/api/products/${dataId}`, {
                    method: "delete"
                });
                result = await result.json();
                
                if (result.success) {
                    toast("This item has been deleted.");  // Replace toast with alert
                    setTimeout(() => {
                        router.push('/ShowUser');
                        router.refresh();
                    }, 100);
                }
            } catch (error) {
                alert("An error occurred while deleting the item."); // Handle error with alert
            }
        }
    }

    return (
        <>
            <button className="btn1" onClick={deletedataById}>Delete</button>
            <ToastContainer position="bottom-right"  hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition= {Bounce}/>
        </>
    );
}

export default Page;
