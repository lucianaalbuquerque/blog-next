import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">
          <Image
            className="rounded-full"
            height={50}
            width={50}
            src="https://links.papareact.com/1m8"
            alt="logo"
          />
        </Link>
        <h1>the collection</h1>
      </div>
      <div>
        <Link href="" 
          className='px-5 py-3 text-sm md:text-base 
          bg-[#F7BAFF] text-gray-500
          flex items-center rounded-full text-center'
          >Sign up to our newsletter</Link>
      </div>
    </header>
  );
};

export default Header;
