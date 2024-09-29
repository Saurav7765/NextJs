
import Image from "next/image";
import pic from '../../../../public/sks.jpg'
import Link from "next/link";


const page = () => {
  return (
    <div className="side_bar">
      <div className="img" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link href='/'>
          <Image src={pic} alt="pic" height={50} width={50} className="img1" />
        </Link>
      </div>

    </div>


  )
}

export default page
