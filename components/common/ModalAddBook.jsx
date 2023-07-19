import { X } from 'react-bootstrap-icons';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

const ModalAddBook = ({ setShowModal, currentBook }) => {
  const { bookCircles, setBookCircles } = useContext(UserContext);

  const addToCircle = (name) => {
    const index = bookCircles.findIndex((circle) => circle.name === name);

    const newData = [...bookCircles];
    newData[index] = {
      ...newData[index],
      books: [...newData[index].books, { ...currentBook }],
    };

    setBookCircles(newData);
  };

  return (
    <div className='fixed inset-0 w-screen h-screen bg-dark-200/20 backdrop-blur-md flex items-center justify-center z-30'>
      <div className='bg-dark-200 rounded-md flex flex-col gap-3 p-5 relative w-[650px]'>
        <button
          className='absolute right-3 top-3'
          onClick={() => setShowModal(false)}
        >
          <X size={28} />
        </button>
        <h2 className='font-semibold text-xl'>Add to Circle</h2>
        {bookCircles.map((circle) => (
          <button
            className='border-2 border-white/50 rounded-md'
            key={circle.name}
            onClick={() => addToCircle(circle.name)}
          >
            {circle.name}
            {circle.books.length}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ModalAddBook;
