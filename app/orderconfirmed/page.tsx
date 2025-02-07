import Header from "../components/homepage/header";
import Footer from "../components/homepage/footer";
import svg1 from "@/public/images/images-removebg-preview.png"
import Image from "next/image";
import Link from "next/link";
const OrderconfirmedPage = () => {
    return (
        <div>
            <Header />
            <div className="p-10  min-h-screen">
                <Image src={svg1} alt="Order Confirmed" width={300} height={300} className="ml-[29.5rem]" />
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10 mt-10">Order Confirmed</h1>
                <p className="text-center text-lg text-black font-semibold ">Your order has been confirmed. You will receive an email confirmation shortly. <br /> "Thank you for your order! 🎉 . We'll update you once it's shipped!"</p>
                <button className=" bg-blue-950 text-white rounded-md h-16 font-semibold w-48 ml-[33rem] mt-5"><Link href={""}>Continue Shopping</Link></button>
            </div>
            <Footer />
        </div>
    )
}
export default OrderconfirmedPage;