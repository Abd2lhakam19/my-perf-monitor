import React from 'react'
import { usePerformanceEngine } from './hooks/usePerformanceEngine'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSimulating } from './store/metricsSlice';

const App = () => {

  usePerformanceEngine();
  const dispatch = useDispatch();
  const isSimulating = useSelector((state) => state.metrics.isSimulating);
  const { reRenders, apiSpeed, memoryUsage } = useSelector((state) => state.metrics);

  return (
    <div>
      <button onClick={()=>dispatch(toggleSimulating())}>Toggle</button>

      <div>
        <p>
          Re-Renders: {reRenders}
        </p>
        <p>
          apiSpeed:{apiSpeed}
        </p>
        <p>
          MemoryUsage:{memoryUsage}
        </p>
      </div>
    </div>
  )
}

export default App
