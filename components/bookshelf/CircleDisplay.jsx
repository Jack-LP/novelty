import Link from 'next/link';

const CircleDisplay = ({ circle }) => {
  return (
    <Link
      href={`/bookshelf/${circle.name}`}
      className='flex flex-col bg-dark-200/50 backdrop-blur-sm rounded-md p-4 gap-3'
    >
      <div
        style={{ borderColor: circle.color }}
        className='w-40 h-40 border-[20px] rounded-full'
      ></div>
      <h3 className='font-semibold'>{circle.name}</h3>
      <p className='text-sm'>
        {circle.books.length} book{circle.books.length !== 1 ? 's' : null}
      </p>
    </Link>
  );
};
export default CircleDisplay;
