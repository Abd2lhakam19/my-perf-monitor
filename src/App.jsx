import React from 'react'
import { usePerformanceEngine } from './hooks/usePerformanceEngine'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSimulating } from './store/metricsSlice';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => {

  usePerformanceEngine();
  const dispatch = useDispatch();
  const isSimulating = useSelector((state) => state.metrics.isSimulating);
  const { reRenders, apiSpeed, memoryUsage } = useSelector((state) => state.metrics);

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
