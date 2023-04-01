import './App.css';
import { useState } from 'react';
import LineChart from './components/LineChart';
import { LivesSaved } from './Data/LivesSavedData';
import { AdoptTime } from './Data/AdoptTimeData';


function App() {
  const [livesSaved, setLivesSaved] = useState({
    labels: LivesSaved.map((data) => data.year),
    datasets: [{
        label: "Lives Saved",
        data: LivesSaved.map((data) => (data.livesSaved))
      }
    ]
  })

  const [adoptTime, setAdoptTime] = useState({
    labels: AdoptTime.map((data) => data.year),
    datasets: [{
        label: "Avg Time to Adopt Over Time",
        data: AdoptTime.map((data) => (data.adopt))
      }
    ]
  })

  return (
    <div className="App">
      <div style={{width: 550}}>
        <LineChart chartData={livesSaved}/>
      </div>

      <div style={{width: 550}}>
        <LineChart chartData={adoptTime}/>
      </div>
    </div>
  );
}

export default App;
