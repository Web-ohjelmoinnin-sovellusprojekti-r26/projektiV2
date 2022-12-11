import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js/auto";
import axios from 'axios';
import 'chartjs-adapter-luxon';
import "./App.css";

export default function V7data() {

    const [v7data, setV7data] = useState([]);
    let v7carbon = v7data.slice(0, 800);

    const getV7data = () => {
        axios.get('http://localhost:3001/v7data')
            .then((response) => {
                setV7data(response.data)
            }).catch(error =>
                console.error('Error: ' + error))
    }

    useEffect(() => {
        getV7data();
        console.log(v7data)
    }, [])

    const data = {
        datasets: [
            {
                label: "co2 ppm",
                data: v7carbon,
                backgroundColor: 'rgb(255,0,0)',
                borderColor: "rgb(255,0,0)",
                borderWidth: 1.5,
                pointRadius: 0,
                yAxisID: 'y',
                parsing: {
                    yAxisKey: 'carbonDioxidePPM',
                    xAxisKey: 'id'
                }
            },
            {
                label: "Surface Temperature Change",
                labelColor: "black",
                data: v7data,
                backgroundColor: "rgb(0,255,255)",
                borderColor: "rgb(0,255,255)",
                borderWidth: 1.5,
                pointRadius: 0,
                yAxisID: 'y1',
                parsing: {
                    yAxisKey: 'globalAverageFifty',
                    xAxisKey: 'id'
                }
            }
        ]
    }

    const optionsV7 = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: 'Evolution of global temperature over the past two million years'
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                grid: {
                    drawOnChartArea: false
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right'
            },
            x: {
                type: "linear",
                display: true,
                reverse: true
            }
        },
        title: {
            display: true,
            text: "Testiotsikko"
        }
    }

    return (
        <Line data={data} options={optionsV7} />
    )

}
