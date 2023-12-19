import React from 'react';

export default function Popup({ isOpen, onClose, geneDetails }) {
  if (!isOpen) return null;

  return (
    <div className='absolute inset-0  backdrop-blur-sm flex items-center justify-center '>
      <div className=' lg:w-2/4 w-full max-w-3xl mx-auto bg-white border rounded-lg p-5'>
        <div className='header relative w-full h-8 border-b border-b-gray-200 mb-2'>
          <h3 className='text-lg font-bold'>Statistics</h3>
          <span className='absolute top-0 right-0 cursor-pointer' onClick={onClose}>
            x
          </span>
        </div>
        <div className='body flex justify-between h-fit w-5/6 mx-auto'>
          {/* Mean */}
          <div className='flex flex-col gap-2 items-center'>
            <h3 className='font-bold text-lg'>Mean</h3>
            <p className='text-md'>{parseFloat(geneDetails.mean).toFixed(2)}</p>
          </div>
          {/* Median */}
          <div className='flex flex-col gap-2 items-center'>
            <h3 className='font-bold text-lg'>Median</h3>
            <p className='text-md'>{parseFloat(geneDetails.median).toFixed(2)}</p>
          </div>
          {/* Variance */}
          <div className='flex flex-col gap-2 items-center'>
            <h3 className='font-bold text-lg'>Variance</h3>
            <p className='text-md'>{parseFloat(geneDetails.variance).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
