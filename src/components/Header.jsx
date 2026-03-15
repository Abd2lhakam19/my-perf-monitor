import React from 'react'
import { Zap } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSimulating } from '../store/metricsSlice';

const Header = () => {
    const dispatch = useDispatch();
    const isSimulating = useSelector((state) => state.metrics.isSimulating);
    return (
        <header className='bg-white w-full border border-b-slate-200 '>
            <div className='max-w-7xl  mx-auto px-6 py-5 flex items-center justify-between'>
                <div className='text-lg font-semibold capitalize flex items-center gap-3'>
                    <div className='bg-green-800 rounded-md w-7 h-7 flex items-center justify-center'>

                        <Zap size={15} className=' text-white ' />
                    </div>
                    <span>

                        performance monitor
                    </span>
                </div>
                <div className='flex items-center gap-3'>
                    <p className=' text-sm capitalize text-slate-500'>simulate issues</p>
                    <button onClick={() => dispatch(toggleSimulating())} className={` transition-colors duration-300 ${isSimulating ? `bg-red-500` : `bg-gray-300`}  w-8 h-4.5 relative  rounded-full flex items-center`}>
                        <span className={`bg-white ${isSimulating ? `translate-x-4` : `translate-x-0.5`} shadow-sm transform transition-transform duration-300 absolute  w-4 h-4 rounded-full  `}>

                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
