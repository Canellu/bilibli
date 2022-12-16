const Stats = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className='flex gap-2 flex-col justify-center items-center'>
      <span className='text-2xl font-semibold'>{number}</span>
      <span className='text-lg font-medium text-gray-400'>{text}</span>
    </div>
  );
};

export default Stats;
