import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import BookDisplay from '../../components/bookshelf/BookDisplay';
import { convertToHours } from '../../utilities/convertToHours';

const CircleId = () => {
  const router = useRouter();
  const { circleId } = router.query;
  const { bookCircles, readingSpeed } = useContext(UserContext);
  const [pageCounts, setPageCounts] = useState([]);

  const selectedCircle = bookCircles.filter(
    (circle) => circle.name === circleId
  )[0];

  const totalPageCount = pageCounts.reduce((acc, cur) => acc + cur, 0);

  return !selectedCircle ? null : (
    <div className='col-span-9 bg-dark-200/50 backdrop-blur-sm rounded-md p-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4 border-b-[1px] border-white/5 pb-4'>
          <div
            style={{ borderColor: selectedCircle.color }}
            className='w-40 h-40 border-[20px] rounded-full'
          ></div>
          <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-semibold'>{selectedCircle.name}</h1>
            <h2 className='text-white/50 flex gap-1'>
              {selectedCircle.books.length} book
              {selectedCircle.books.length !== 1 ? 's' : null}
              <span>•</span>
              {`${convertToHours((totalPageCount * 230) / readingSpeed)} Hrs`}
            </h2>
          </div>
        </div>
        <div className='flex flex-wrap gap-6'>
          {selectedCircle.books.map((book) => (
            <BookDisplay
              key={book.id}
              bookId={book.id}
              title={book.title}
              author={book.author}
              thumbnail={book.thumbnail}
              pageCount={book.pageCount}
              circleId={circleId}
              setPageCounts={setPageCounts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CircleId;
