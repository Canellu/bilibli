import Image from 'next/image';

const NavCardButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className='relative group'>
      <button className='bg-red-400 rounded-full w-14 h-14 flex justify-center group-hover:bg-sky-100 items-center border-2 border-white group-hover:scale-[2.5] duration-300 group-hover:-translate-x-10 group-hover:translate-y-8 z-10 absolute'>
        🥟
        <Image
          src='/profile_pic.jfif'
          alt=''
          fill
          className='object-cover rounded-full opacity-0 group-hover:opacity-100 duration-300'
        />
      </button>
      <div className='bg-white shadow-md rounded-md px-8 pt-24 pb-12 absolute left-1/2 z-0 top-12 w-96 -translate-x-52 group-hover:opacity-100 duration-300 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:duration-500 flex justify-center flex-col items-center gap-2'>
        {children}
      </div>
    </article>
  );
};

export default NavCardButton;
