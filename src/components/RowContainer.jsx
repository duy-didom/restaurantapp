import React from 'react'
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data }) => {
    console.log(data)
    return (
        <div className={`w-full my-12 flex items-center
    ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
            {data && data.map(item => (
                <div
                    className='w-300 md:w-340 h-auto my-12 shadow-md backdrop-blur-lg bg-cardOverlay rounded-lg hover:drop-shadow-2xl'>
                    <div className='w-full flex items-center justify-between px-2'>
                        <motion.img
                            whileTap={{ scale: 0.75 }}
                            src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-8e4f2.appspot.com/o/Images%2Ffunction%20now()%20%7B%20%5Bnative%20code%5D%20%7D-f10.png?alt=media&token=0a5d1d14-90cb-48b4-a157-b2e81588b47c'
                            alt=''
                            className='w-40  -mt-8 drop-shadow-2xl' />
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center'>
                            <MdShoppingBasket className='text-white' />
                        </motion.div>
                    </div>
                    <div className='w-full flex flex-col gap-4 items-end justify-end px-2'>
                        <p className='text-textColor font-semibold text-base md:text-lg'>
                            Chocolate & Vanilla
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>45Calorires</p>
                        <div className='flex items-center gap-8'>
                            <p className='text-lg text-headingColor font-semibold'>
                                <span className='text-sm text-red-500'>$</span>5.25
                            </p>
                        </div>
                    </div>
                </div>
            ))};

        </div>
    );
};

export default RowContainer;