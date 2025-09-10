import { useState } from 'react';

const PrintingButton = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);

    // Printing শুরু
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 1500); // অ্যানিমেশন চলবে ১.৫ সেকেন্ড
  };

  return (
    <button
      onClick={handlePrint}
      disabled={isPrinting}
      className={`print:hidden relative px-6 py-2 rounded-lg font-semibold text-white shadow-md transition-all duration-300 
        ${
          isPrinting
            ? 'bg-red-800 cursor-not-allowed'
            : 'bg-red-900 hover:bg-red-700'
        }
      `}
    >
      {isPrinting ? (
        <span className='flex items-center gap-2'>
          <svg
            className='animate-spin h-5 w-5 text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v8H4z'
            ></path>
          </svg>
          Printing...
        </span>
      ) : (
        <span className='flex items-center gap-2'>🖨️ Print</span>
      )}
    </button>
  );
};

export default PrintingButton;
