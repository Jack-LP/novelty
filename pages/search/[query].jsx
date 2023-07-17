import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import ResultsDisplay from '../../components/search/ResultsDisplay';
import SortControls from '../../components/search/SortControls';

const Query = () => {
  const [originalSort, setOriginalSort] = useState();
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
              /\+/g,
              ' '
            )}&maxResults=10&key=${API_KEY}`
          )
          .then((res) => {
            const data = res.data.items;
            setBookData(data);
            setOriginalSort(data);
          });
      }
    };

    fetchSearchData();
  }, [query, setBookData]);

  return (
    <div className='col-span-9 bg-dark-200 flex flex-col gap-3 rounded-md p-5'>
      <Head>
        <title>novelty | Search</title>
      </Head>
      <h2 className='text-lg font-semibold'>
        {`Results for "${query ? query.replace(/\+/g, ' ') : null}"`}
      </h2>
      <SortControls originalSort={originalSort} />
      <ResultsDisplay />
    </div>
  );
};
export default Query;
