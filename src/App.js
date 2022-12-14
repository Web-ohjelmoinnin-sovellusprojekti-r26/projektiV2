import { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import 'chartjs-adapter-luxon';
import V7data from "./V7data";


function App() {
  const [userDataChart, setUserData] = useState();
  const [V3Data, setV3Data] = useState();
  const [v5Data, setV5Data] = useState();
  const [V6Data, setV6Data] = useState();



 

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
            data: responseAnnualG.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
            },
            
          },
          {
            label: "TemperaturesNorthernAnnual",
            data: responseAnnualN.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "blue",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
            },
            
          },
          {
            label: "TemperaturesSouthernAnnual",
            data: responseAnnualS.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "red",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
            },
                    
          },
          {
            label: "TemperatureGlobalMonthly",
            data: responseMonthlyG.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "green",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
               
          },

          {
            label: "TemperatureNorthernMonthly",
            data: responseMonthlyN.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "dark blue",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
               
          },

          {
            label: "TemperatureSouthernMonthly",
            data: responseMonthlyS.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "brown",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
               
          },

          {
            label: "TemperatureReconstruction",
            data: responseV2Data.data.map((d)=>{
              return{
              time:d.time.padStart(4,"0"),
              temperature:d.temperature
              }
              

            }), 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "cyan",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "temperature"
              
            },
               
          }
         
        ],
      })
    }
    getV1data()
  }, [])

  useEffect(() => {
    async function getV3data(){
      const responseV3DataMonthly = await axios.get('http://localhost:3001/v3datam')
      const responseV3DataAnnual = await axios.get('http://localhost:3001/v3data')
      const responseV4DataDE08 = await axios.get('http://localhost:3001/v4data')
      const responseV4DataDE082 = await axios.get('http://localhost:3001/v4data')
      const responseV4DataDSS = await axios.get('http://localhost:3001/v4data')
      console.log(responseV3DataAnnual)
      setV3Data({
        datasets: [
          {
            label: "MaunaLoaCO2Monthly",
            data: responseV3DataMonthly.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "red",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "co2"
            },
          },
          {
            label: "MaunaLoaCO2Annual",
            data: responseV3DataAnnual.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "blue",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "co2"
            },
          },
         
          {
            label: "DE08",
            data: responseV4DataDE08.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "yellow",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "timede08",
              yAxisKey: "co2de08"
            },
          },

          {
            label: "DE082",
            data: responseV4DataDE082.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "green",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "timede082",
              yAxisKey: "co2de082"
            },
          },

          {
            label: "DSS",
            data: responseV4DataDSS.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "cyan",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "timedss",
              yAxisKey: "co2dss"
            },
          },
        ],
      })
    }
    getV3data()
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
            borderWidth: 1.5,
            pointRadius: 0,
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


useEffect(() => {
    async function getV6data(){
      const responseV6Data = await axios.get('http://localhost:3001/v6data')
      console.log(responseV6Data)
      setV6Data({
        datasets: [
          {
            label: "CO2 concentration",
            data: responseV6Data.data, 
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1.5,
            pointRadius: 0,
            parsing: {
              xAxisKey: "time",
              yAxisKey: "co2"
            },
            
          },        
        ],
      })
    }
    getV6data()
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

 const options4 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Atmospheric CO2 concentrations from Mauna Loa",
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

 const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ice core 800k year composite study CO2 measurements",
      },
    },
    scales: {
      x: {
        reverse: true,
        type: "linear",
        min: -2000,
        max: 810000,
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
      <div className="repsonsive" style={{ width: "100%", margin: "auto" }} >
      <h3>V1+V2 Global historical surface temperature anomalies from January 1850 onwards</h3>
        <Line options={options} data={userDataChart} />
        <p>
        <a href='https://www.metoffice.gov.uk/hadobs/hadcrut5/'>V1 V2 Datasets sources</a><br />
        <a href='https://www.nature.com/articles/nature03265'>V2 Full study</a>
        </p>
        <p>
        This chart is about global historical surface temperature anomalies from january 1850 onwards.<br />
        This chart also includes 2,000-Year Northern Hemisphere Temperature(v2) information aswell (cyan line).<br />
        Both V1 (annual and monthly) and V2(Northern hemishpere reconstruction) visualizes temperatures in relation to the time.
        </p>
        <h3>V3+V4 Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958</h3>
        <Line options={options4} data={V3Data} />
        <p>
        <a href='https://gml.noaa.gov/ccgg/trends/data.html'> V3 Datasets sources </a><br />
        <a href='https://gml.noaa.gov/ccgg/about/co2_measurements.html'>V3 Data measurement description </a><br />
        <a href='https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat'> V4 Datasets sources </a><br />
        <a href='https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html'>V4 Data measurement description </a>
        </p>
        <p>
        This chart displays CO2 concentrations from Mauna Loa and three ice core datasets from East Antarctica. 
        </p>
        <br></br>
        <h3>V5 Historical CO2 record from the Vostok ice core</h3>
        <Line options={options2} data={v5Data} />
        <br></br>
        <p><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">V5 description</a><br />
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">V5 datasets sources</a></p>
        <p>
        chart shows data of Soviet Co2 levels study from Vostok research center located at Antarctica.<br />
        Data was gathered from deep ice bore holes. Samples contain roughly 400000 years worth of data.
        </p>
        <br></br>
        <h3>V6 Ice core composite study CO2 measurement</h3>
        <Line options={options3} data={V6Data} />
        <p>
        <a href='https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt'> V6 Dataset source </a><br />
        <a href='https://www.ncei.noaa.gov/access/paleo-search/study/17975'>V6 Description source</a>
        </p>
        <p>
        A line graph of atmospheric carbon dioxide concentrations based on a combined study of antarctic ice cores (last 800000 years).
        </p>
        <br></br>
        <div>
            <h3>V7 Evolution of global temperature over the past two million years</h3>
              <V7data/>
              <p>
                <a target="_blank" href="http://carolynsnyder.com/publications.php">Dataset Source</a> From there: <i>Source data for Figures</i>
              </p>
              <p>
                <a target="_blank" href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Data Description Document</a>
              </p>
              <p>The chart displays the change in global surface temperature and the concentration of co2 ppm over a two million year period in relation to one another. The left y axis tells the co2 ppm and the right y axis tells the temperature change. The x axis tells the time in kilo years; the value starts from left at two million years and shifts right towards the year zero.</p>
          </div>
        </div>
      </div>        
  );
}

export default App;