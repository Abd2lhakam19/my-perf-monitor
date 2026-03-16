import React from 'react'
import StatCard from './StatCard'
import { useSelector } from 'react-redux'


const MainContent = () => {
    const { reRenders, apiSpeed, memoryUsage } = useSelector((state) => state.metrics);

    return (
        <section className='max-w-7xl mx-auto px-6 py-10'>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>

                <StatCard title="re-renders" number={reRenders} desc="within normal range" />
                <StatCard title="api response time" number={`${apiSpeed}`} unit='ms' desc="Optimal response time" />
                <StatCard title="memory usage" number={`${memoryUsage}`} unit='%' desc="Stable allocation" />

            </section>
        </section>
    )
}

export default MainContent
