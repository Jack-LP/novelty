import Link from 'next/link';

const Sidebar = () => {
  const navElements = [
    { title: 'Home', path: '/' },
    { title: 'Featured', path: '/featured' },
    { title: 'Bookshelf', path: '/bookshelf' },
    { title: 'Reading Speed', path: '/speedTest' },
    { title: 'Random', path: '' },
  ];

  return (
    <div className='flex flex-col gap-10 text-sm'>
      <ul className='flex flex-col gap-2'>
        {navElements.map((item) => (
          <Link key={item.title} href={item.path}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className='flex flex-col gap-2'>
        <p className='uppercase text-white/25 text-sm'>Book Circles</p>
        <ul className='flex flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <div className='w-[11px] h-[11px] rounded-full border-2 border-[#3c4982]'></div>
            <a href=''>Dwemer</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
