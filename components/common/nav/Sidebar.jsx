import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import UserContext from '../../../context/UserContext';

const Sidebar = () => {
  const [hydrated, setHydrated] = useState(false);
  const { bookCircles } = useContext(UserContext);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const navElements = [
    { title: 'Home', path: '/' },
    { title: 'Featured', path: '/featured' },
    { title: 'Bookshelf', path: '/bookshelf' },
    { title: 'Reading Speed', path: '/speedTest' },
    { title: 'Random', path: '' },
  ];

  return !hydrated ? null : (
    <div className='flex flex-col gap-10'>
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
          {bookCircles.map((circle) => (
            <li className='flex items-center gap-2' key={circle.name}>
              <div
                style={{ borderColor: circle.color }}
                className='w-[11px] h-[11px] rounded-full border-2'
              ></div>
              <Link href={`/bookshelf/${circle.name}`}>{circle.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
