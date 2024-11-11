import React from 'react';
// Tambahkan file CSS untuk animasi

function Supporter() {
    return (
        <div className='bg-gray-50 py-8 md:mt-32 mt-48'>
            <div className='md:mx-32 '>
                <h1 className='text-center text-2xl font-bold mb-4'>Supported By:</h1>
                <div className='relative overflow-hidden h-16'>
                    <div className='absolute whitespace-nowrap sponsor-scroll'>
                        <span className='mr-8'>Sponsor 1</span>
                        <span className='mr-8'>Sponsor 2</span>
                        <span className='mr-8'>Sponsor 3</span>
                        <span className='mr-8'>Sponsor 4</span>
                        <span className='mr-8'>Sponsor 5</span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Supporter;
