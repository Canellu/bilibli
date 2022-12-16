import Head from 'next/head';
import { FiChevronRight, FiUser } from 'react-icons/fi';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
      </Head>

      <article className='relative group'>
        <button className='bg-red-400 rounded-full w-14 h-14 flex justify-center group-hover:bg-sky-100 items-center border-2 border-white group-hover:scale-[2.5] duration-300 group-hover:-translate-x-10 group-hover:translate-y-8 z-10 absolute'>
          🥟
        </button>
        <div className='bg-white shadow-md rounded-md px-8 py-24 absolute left-1/2 z-0 top-12 w-96 -translate-x-52 group-hover:opacity-100 duration-300 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:duration-500 flex justify-center flex-col items-center gap-2'>
          <h1 className='font-semibold text-2xl'>与一块科目</h1>
          <div>
            <span className='text-gray-500'>我的: </span>
            <span>489.3</span>
            <span className='text-gray-500 ml-4'>我的: </span>
            <span>8</span>
          </div>
          <div className='gap-2 relative flex justify-between w-full'>
            <span>LV4</span>
            <span>LV5</span>
            <div className='h-1 w-[70%] bg-orange-300 flex absolute top-1/2 left-1/2 -translate-x-1/2'></div>
            <div className='h-1 w-[30%] bg-gray-300 flex absolute top-1/2 left-44'></div>
          </div>
          <div className='flex justify-between w-full px-2'>
            <div className='flex gap-2 flex-col justify-center items-center'>
              <span className='text-2xl font-semibold'>3</span>
              <span className='text-lg font-medium text-gray-400'>我的</span>
            </div>
            <div className='flex gap-2 flex-col justify-center items-center'>
              <span className='text-2lgfont-semibold'>38</span>
              <span className='text-lg font-medium text-gray-400'>我的</span>
            </div>
            <div className='flex gap-2 flex-col justify-center items-center'>
              <span className='text-2xl font-semibold'>8</span>
              <span className='text-lg font-medium text-gray-400'>我的</span>
            </div>
          </div>
          <div>
            <div className='flex justify-between'>
              <div className='flex '>
                <FiUser className='text-4xl text-gray-500' />
                <span className='text-xl'>我的我的</span>
              </div>
              <FiChevronRight className='text-4xl text-gray-500' />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
