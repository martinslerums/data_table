import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return ( 
    <nav className="w-full p-10 flex justify-between bg-gray-500/30">
      <div>
        <Image priority src="logoipsum.svg" alt="Logo" width={100} height={50} />
      </div>
       <div className="flex gap-10 text-2xl font-bold">
        <Link href="/" >About me</Link>
        <Link href="/data-table">Data table</Link>
       </div>
    </nav>
   );
}
 
export default Navbar;
