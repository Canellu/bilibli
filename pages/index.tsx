import Head from 'next/head';
import NavCardButton from './components/NavCardButton';
import NavLink from './components/NavLink';
import Stats from './components/Stats';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
      </Head>

      <NavCardButton>
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
        <div className='flex justify-between w-full px-6 py-3'>
          <Stats number='3' text='我的' />
          <Stats number='38' text='我的' />
          <Stats number='8' text='我的' />
        </div>
        <div className='w-full flex flex-col gap-3 '>
          <NavLink iconName='FiUser' />
          <NavLink iconName='FiFile' />
          <NavLink iconName='FiStar' />
          <span className='w-full h-0.5 bg-slate-200 rounded-full mt-1' />
          <NavLink iconName='FiLogOut' />
        </div>
      </NavCardButton>
    </section>
  );
}
