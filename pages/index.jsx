import Heading from '../components/home/Heading';
import Searchbar from '../components/home/Searchbar';

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col py-20 items-center gap-20'>
      <Heading />
      <Searchbar />
    </div>
  );
}
