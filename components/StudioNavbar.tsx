import Link from 'next/link';
import  { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';


const StudioNavbar = (props: any) => {
  return (
    <div>
      <div >
        <Link href="/" className='text-[#F7AB0A] flex items-center'>
          {/* <ArrowUturnLeftIcon className='h-2 w-2 text-[#F7AB0A] mr-2'/> */}
        Go to the website
        </Link>
      </div>

      {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar