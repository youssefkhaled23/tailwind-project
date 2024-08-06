import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => [
        setNav(!nav)
    ]
    return (
        <header className="text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto  ">
            <h1 className="text-[#00df9a] text-3xl font-bold">REACT.</h1>
            <ul className="hidden md:flex text-xl">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div className="flex items-center gap-4">
                <button className="bg-[#00df9a] px-8 rounded-md font-medium my-6 mx-auto py-3 text-black">SignUp</button>
                <div onClick={handleNav} className='block md:hidden '>
                    {nav ? <AiOutlineClose size={25} className="cursor-pointer" /> : <AiOutlineMenu size={25} className="cursor-pointer" />}
                </div>
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-xl'
                : 'ease-in-out fixed  top-0 w-[60%] h-full duration-500 left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </header>
    )
}

export default Nav
