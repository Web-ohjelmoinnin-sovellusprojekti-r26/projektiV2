import { useEffect, useState } from "react";
import "./App.css";
import TemperatureAnnual from "./HadCRUT.5.0.1.0.analysis.summary_series.global.annual.json"
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function App() {
  const [userDataChart, setUserData] = useState({
    labels: TemperatureAnnual.map(t => t.Time), //UserData.map((data) => data.year) x-akseli
    datasets: [
      {
        label: "Temperatures",
        data: TemperatureAnnual.map(t => t.Temperature), //UserData.map((data) => data.userGain)
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value"
        }
      },
    ],
  });


 
/*
 useEffect(() => {
    async function getV1data(){
      const response = await axios.get('http://localhost:3001/v1data')
      console.log(response)
      setUserData({
        datasets: [
          {
            label: "Temperatures",
            data: response.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
            }
          },
        ],
      })
    }
    getV1data()
  }, [])
*/
  useEffect(() => {
    async function getnorthernhemisphere(){
      const response = await axios.get('http://localhost:3001/northernhemisphere')
      console.log(response)
      setUserData({
        datasets: [
          {
            label: "Temperatures",
            data: response.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "red",
            borderWidth: 1,
            parsing: {
              xAxisKey: "Time",
              yAxisKey: "Temperature"
            }
          },
        ],
      })
    }
    getnorthernhemisphere()
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Demo Co2 plot",
      },
    },
    scales: {
      x: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };


  return (
    <div className="App">
      <div style={{ width: 900 }}>
        <Line options={options} data={userDataChart} />
      </div>        
    </div>
  );
}

export default App;