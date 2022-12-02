import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import 'chartjs-adapter-luxon';


function App() {
  const [userDataChart, setUserData] = useState();
  const [v5Data, setV5Data] = useState();



 

 useEffect(() => {
    async function getV1data(){
      const responseAnnualG = await axios.get('http://localhost:3001/v1dataga')
      const responseAnnualN = await axios.get('http://localhost:3001/v1datagan')
      const responseAnnualS = await axios.get('http://localhost:3001/v1datagas')
      const responseMonthlyG = await axios.get('http://localhost:3001/v1datagm')
      const responseMonthlyN = await axios.get('http://localhost:3001/v1datagmn')
      const responseMonthlyS = await axios.get('http://localhost:3001/v1datagms')
      const responseV2Data = await axios.get('http://localhost:3001/v2data')
      console.log(responseAnnualN)
      setUserData({
        datasets: [
          {
            label: "TemperaturesGlobalAnnual",
            data: responseAnnualG.data, //UserData.map((data) => data.userGain)
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
            },
            //pointRadius: 1,
          },
          {
            label: "TemperaturesNorthernAnnual",
            data: responseAnnualN.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "blue",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
            },
            //pointRadius: 1,
          },
          {
            label: "TemperaturesSouthernAnnual",
            data: responseAnnualS.data, //UserData.map((data) => data.userGain)
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
              xAxisKey: "time",
              yAxisKey: "temperature"
            },
            //pointRadius: 1,        
          },
          {
            label: "TemperatureGlobalMonthly",
            data: responseMonthlyG.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "green",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
             //pointRadius: 1,  
          },

          {
            label: "TemperatureNorthernMonthly",
            data: responseMonthlyN.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "dark blue",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
             //pointRadius: 1,  
          },

          {
            label: "TemperatureSouthernMonthly",
            data: responseMonthlyS.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "brown",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
             //pointRadius: 1,  
          },

          {
            label: "TemperatureReconstruction",
            data: responseV2Data.data, //UserData.map((data) => data.userGain)
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "crimson",
            borderWidth: 1,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
             //pointRadius: 1,  
          }
         
        ],
      })
    }
    getV1data()
  }, [])

  useEffect(() => {
    async function getV5data(){
      const responseV5Data = await axios.get('http://localhost:3001/v5data')
      console.log(responseV5Data)
      setV5Data({
        datasets: [
          {
            label: "VostokIceCore",
            data: responseV5Data.data, //UserData.map((data) => data.userGain)
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
              yAxisKey: "co2"
            },
          },        
        ],
      })
    }
    getV5data()
  }, [])


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global Temperatures",
      },
    },
    scales: {
      x: {
        type: "time",
        display: true,
        position: "right",
      },
    },
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Historical CO2 record from the Vostok ice core",
      },
    },
    scales: {
      x: {
        type: "linear",
        min: 0,
        max: 419200,
        display: true,
        position: "right",
      },
    },
  };

  if(userDataChart === undefined){
    return null;
  }


  return (
    <div className="App">
      <div style={{ width: 1200 }}>
        <Line options={options} data={userDataChart} />
        <h3>V5 Historical CO2 record from the Vostok ice core</h3>
        <Line options={options2} data={v5Data} />
        <br></br>
        <p><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">V5 description</a><br />
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">V5 dataset source</a></p>
        <p>
        V5 chart shows data of Soviet Co2 levels study from Vostok research center located at Antarctica.<br />
        Data was gathered from deep ice bore holes. Samples contain roughly 400000 years worth of data.
        </p>
      </div>
    </div>
  );
}

export default App;