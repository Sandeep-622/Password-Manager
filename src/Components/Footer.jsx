import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex flex-col items-center justify-around text-white py-4 gap-y-3  w-full'>
                <div className='font-bold logo text-2xl '>
                    <span className='text-green-600'>&lt;</span>
                    Pass
                    <span className='text-green-600'>OP/ &gt;</span>
                </div>

            <div className='flex gap-2 text-md items-center'>
                Made with <img width={24} src="/icons/heart.png" alt="heart" /> by Sandeep
            </div>
        </div>
    )
}

export default Footer
