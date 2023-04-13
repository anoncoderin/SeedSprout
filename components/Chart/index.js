import styles from './Chart.module.css'
import { useState, useEffect } from 'react'
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function Chart({
    mNum, 
    ttfgNum,
    dcNum,
    seNum,
    rtgNum,
    name
}) {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Maintenance', 'Time to fully grow', 'Difficulty', 'Sun Exposure', 'Room to grow'],
            datasets: [
                {
                    label: `${name} Statistics`,
                    data: [mNum, ttfgNum, dcNum, seNum, rtgNum],
                    borderColor: 'rgb(29, 73, 35)',
                    backgroundColor: 'rgba(95, 191, 106,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Seed Sprout Stats"
                }
            },
            scale: {
                min: 0,
                max: 10,
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <Radar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}