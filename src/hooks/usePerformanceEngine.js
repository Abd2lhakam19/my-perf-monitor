import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateMetrics } from "../store/metricsSlice";

export const usePerformanceEngine = () => {
    const dispatch = useDispatch();
    const isSimulating = useSelector((state) => state.metrics.isSimulating);
    const renderCount = useRef(0);
    renderCount.current++;

    const getRealMemory = () => {
        if (window.performance && window.performance.memory) {
            const usedHeap = window.performance.memory.usedJSHeapSize / (1024 * 1024);
            return Math.floor(usedHeap);
        }
        return 0;
    }

    const getApiSpeed = async () => {
        const start = performance.now();
        try {
            await fetch('https://httpbin.org/delay/2', { cache: 'no-store' });
            const end = performance.now();
            return Math.floor(end - start);
        }
        catch (e) {
            return 0;
        }
    }


    useEffect(() => {
        let interval;
        if (isSimulating) {
            const runEngine = async () => {
                const speed = await getApiSpeed();
                dispatch(updateMetrics({
                    reRenders: renderCount.current,
                    apiSpeed: speed,
                    memoryUsage: getRealMemory(),
                }));
            };
            runEngine();
            interval = setInterval(runEngine, 3000)
        } else {
            renderCount.current = 0;
            dispatch(updateMetrics({ reRenders: 0, apiSpeed: 0, memoryUsage: 0 }));
        }

        return () => clearInterval(interval);
    }, [isSimulating, dispatch])
}