import { useState, useContext } from 'react';
import { Search } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import UserContext from '../../../context/UserContext';

const Searchbar = () => {
  const [route, setRoute] = useState();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${route.replace(/ /g, '+')}`);
  };

  return (
    <div className='relative'>
      <Search className='absolute top-3 left-3 text-white/20' />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setRoute(e.target.value)}
          className='bg-transparent border-2 outline-none border-white/10 rounded-md pl-9 h-10 w-[470px]'
          type='text'
          placeholder='Search...'
        />
      </form>
    </div>
  );
};

export default Searchbar;
