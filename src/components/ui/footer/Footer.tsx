import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-white font-medium text-sm text-white'>
      <div className='py-8 flex flex-col items-center justify-center lg:flex-row lg:justify-between'>
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          <span>Build by&nbsp;</span>
          <Link href="mailto:benjalavalla8@gmail.com" target='_blank' className='flex justify-center underline underline-offset-2 text-white'>Benjamín La Valla</Link>
        </div>
        <span className="mt-4 lg:mt-0">Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;