import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ResultsDisplay from '../../components/search/ResultsDisplay';
import SortControls from '../../components/search/SortControls';

const Query = () => {
  const { setBookData } = useContext(UserContext);
  const router = useRouter();
  const { query } = router.query;

  const API_KEY = 'AIzaSyADAV_RuIVe-nZHJFf2HxmKdDHtvE_zAmM';

  useEffect(() => {
    const fetchSearchData = () => {
      if (query) {
        axios
          .get(
            `https://www.googleapis.com/books/v1/volumes?q=${query.replace(
              / /g,
              '+'
            )}&maxResults=20&key=${API_KEY}`
          )
          .then((res) => {
            const data = res.data.items;
            setBookData(data);
          });
      }
    };

    fetchSearchData();
  }, [query, setBookData]);

  return (
    <div className='col-span-9 bg-dark-200 flex flex-col gap-3 rounded-md p-5'>
      <SortControls />
      <ResultsDisplay />
    </div>
  );
};
export default Query;
