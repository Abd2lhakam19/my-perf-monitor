import React from 'react'
import { usePerformanceEngine } from './hooks/usePerformanceEngine'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSimulating } from './store/metricsSlice';
import Header from './components/Header';

const App = () => {

  usePerformanceEngine();
  const dispatch = useDispatch();
  const isSimulating = useSelector((state) => state.metrics.isSimulating);
  const { reRenders, apiSpeed, memoryUsage } = useSelector((state) => state.metrics);

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
