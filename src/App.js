import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import TemperatureAnnual from "./HadCRUT.5.0.1.0.analysis.summary_series.global.annual.json"

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
        borderWidth: 2,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value"
        }
      },
    ],
  });


  return (
    <div className="App">
      <div style={{ width: 900 }}>
        <LineChart chartData={userDataChart} />
      </div>        
    </div>
  );
}

export default App;