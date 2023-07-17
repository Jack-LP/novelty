import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';

const SortControls = ({ originalSort }) => {
  const { bookData, setBookData } = useContext(UserContext);

  const sortByName = () => {
    const sortedArray = [...bookData].sort((a, b) => {
      const titleA = a.volumeInfo.title.toUpperCase();
      const titleB = b.volumeInfo.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });

    setBookData(sortedArray);
  };

  const sortByReadTime = () => {
    const sortedArray = [...bookData].sort((a, b) => {
      return b.volumeInfo.pageCount - a.volumeInfo.pageCount;
    });

    setBookData(sortedArray);
  };

  const sortByDate = () => {
    const sortedArray = [...bookData].sort((a, b) => {
      const dateA = new Date(a.volumeInfo.publishedDate);
      const dateB = new Date(b.volumeInfo.publishedDate);
      return dateB - dateA;
    });

    setBookData(sortedArray);
  };

  const sortByRelevance = () => {
    setBookData([...originalSort]);
  };

  const handleChange = (option) => {
    if (option === 'name') {
      sortByName();
    } else if (option === 'readTime') {
      sortByReadTime();
    } else if (option === 'date') {
      sortByDate();
    } else if (option === 'relevance') {
      sortByRelevance();
    }
  };

  return (
    <div className='border-y-[1px] border-white/5 py-2 flex gap-1 items-center'>
      <span>Sort:</span>
      <select
        onChange={(e) => handleChange(e.target.value)}
        name='sort'
        id='sort'
        className='bg-transparent'
        defaultValue={'relevance'}
      >
        <option className='bg-dark-200' value='relevance'>
          Relevance
        </option>
        <option className='bg-dark-200' value='name'>
          Name
        </option>
        <option className='bg-dark-200' value='readTime'>
          Reading Time
        </option>
        <option className='bg-dark-200' value='date'>
          Publish Date
        </option>
      </select>
    </div>
  );
};
export default SortControls;
