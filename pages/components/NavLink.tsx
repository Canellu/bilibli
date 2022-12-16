import {
  FiChevronRight,
  FiFile,
  FiLogOut,
  FiStar,
  FiUser
} from 'react-icons/fi';

const Icon = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'FiUser': {
      return <FiUser className={className} />;
    }
    case 'FiFile': {
      return <FiFile className={className} />;
    }
    case 'FiStar': {
      return <FiStar className={className} />;
    }
    case 'FiLogOut': {
      return <FiLogOut className={className} />;
    }
    default:
      return null;
  }
};

const NavButton = ({ iconName }: { iconName: string }) => {
  return (
    <button className='flex justify-between w-full items-center duration-300  group/LinkButton hover:bg-slate-200 rounded-lg px-6 py-3  active:shadow-inner'>
      <div className='flex justify-between items-center gap-4 '>
        <Icon
          name={iconName}
          className='text-3xl text-gray-500 group-active/LinkButton:text-gray-900'
        />
        <span className='text-lg tracking-widest font-thin pointer-events-none'>
          我的我的
        </span>
      </div>
      <FiChevronRight className='text-xl text-gray-600 group-active/LinkButton:text-gray-900' />
    </button>
  );
};

export default NavButton;
