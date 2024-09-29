import Link from "next/link";

export  const Page = () => {
  return (
    <div className="mainContent my-2">
      <div className="card" style={{ width:'12rem', height: '100px' }}>
        <div className="card-body d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <Link href='/ShowUser'>CRUD OPERATION</Link>          
        </div>       
      </div>
    </div>
  )
}
export default Page;