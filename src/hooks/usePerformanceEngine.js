import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { updateMetrics } from "../store/metricsSlice";

export const usePerformanceEngine = () => {
    const dispatch = useDispatch();
    const isSimulating = useSelector((state) => state.metrics.isSimulating);
    useEffect(() => {
        let interval;
        if (isSimulating) {
            interval = setInterval(() => {
                dispatch(updateMetrics({
                    reRenders: Math.floor(Math.random() * 50) + 1,
                    apiSpeed: Math.floor(Math.random() * 900) + 50,
                    memoryUsage: Math.floor(Math.random() * 40) + 20,
                }));
            }, 1000)
        } else {
            dispatch(updateMetrics({ reRenders: 0, apiSpeed: 0, memoryUsage: 0 }));
        }

        return () => clearInterval(interval);
    }, [isSimulating, dispatch])
}