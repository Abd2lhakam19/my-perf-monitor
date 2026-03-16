import React from 'react'

const StatCard = ({ title, number, unit, desc }) => {

    return (
        <div className='px-5 py-5 bg-white rounded-lg border border-slate-200'>
            <div className='flex flex-col gap-3'>
                <h3 className='uppercase  text-slate-600 leading-tight font-medium '>
                    {title}
                </h3>
                <div className='flex items-end gap-1'>

                    <span className='text-4xl text-emerald-700 font-black'>
                        {number}
                    </span>
                    <span className='text-lg text-gray-400 '>
                        {unit}
                    </span>
                </div>
                <p className='text-sm text-slate-400 font-normal'>{desc}</p>
            </div>

        </div>
    )
}

export default StatCard
