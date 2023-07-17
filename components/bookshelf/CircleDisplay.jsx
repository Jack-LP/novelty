const CircleDisplay = ({ circle }) => {
  return (
    <div className='flex flex-col border-2 rounded-md border-white/50 p-3 items-center gap-3'>
      <div
        style={{ borderColor: circle.color }}
        className='w-40 h-40 border-[20px] rounded-full'
      ></div>
      <p style={{ color: circle.color }}>{circle.name}</p>
    </div>
  );
};
export default CircleDisplay;
