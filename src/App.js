import './App.css';
import { useState } from 'react';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';



function App() {
  const livesSaved= {
    labels: ['', 2014, 2016, 2018, 2020, 2022, ''],
    datasets: [{
        label: "Lives Saved",
        data: [null, 2000, 4000, 7000, 10000, 11000, null],
        backgroundColor: '#ace6ea'
    }]
  }

  const adoptTime = {
    labels: ['', 2017, 2018, 2019, 2020, 2021, 2022, ''],
    datasets: [{
        label: "Avg Time to Adopt Over Time",
        data: [null, 39, 50, 55, 40, 42, 60, null],
        backgroundColor: '#ace6ea'
      }
    ]
  }

  const ageData = {
    labels: ["0-1 Puppies", "2-6 Adults", "7+ Senior"],
    datasets: [{
      label: "Avg Time to Adopt by Age Bucket",
      data: [30, 85, 103],
      backgroundColor: '#ace6ea'
    }]
  }

  const breedData = {
    labels: ["Labrador" , "Pit", "Hound", "Shepherd", "Terrier", "American", "Catahoula", "Hounds", "Australian", "Mountain"],
    datasets: [{
      label: "Top 10 Primary Breeds (Including Mixes)",
      data: [1422, 838, 400, 376, 306, 157, 155, 150, 126, 108],
      backgroundColor: '#ace6ea'
    }]
  }

  const charsData = {
    labels: ["Gets Along With Dogs", "Gets Along with Cats", "Gets Along with Kids", "Are House Broken"],
    datasets: [{
      label: "Does/Are",
      data: [87, 29, 58, 38],
      backgroundColor: '#ace6ea'
    },
    {
      label: "Does Not/Are Not",
      data: [1, 7, 3, 6],
      backgroundColor: '#5c6068'
    },
    {
      label: "Not Sure",
      data: [12, 64, 39, 56],
      backgroundColor: '#d3d3d3'
    },
    
  ]
  }

  const lineOptions ={
    maintainAspectRatio: false,
    scales:{
      x: {
        offset: false
      },
      y: {
        beginAtZero: true
      }
    }
  }

  const barOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
  }

  const charBarOptions = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true,
        
      },
  

    },
    maintainAspectRatio: false,
  }

  return (
    <div className="App">
      <div className='intro'>
        <h1>Last Hope K9</h1>
        <h2>Where a last hope </h2>
        <h2>becomes a new beginning</h2>
      </div>
      <div className='graphs'>
        <div className='leftGraph'>
          <div className="livesSaved graph">
            <h2 style={{textAlign: 'center'}}>Lives Saved</h2>
            <h1 style={{textAlign: 'center'}}>10,875</h1>
            <LineChart chartData={livesSaved} options={lineOptions}/>
          </div>
        </div>

        <div className='rightGraph'>
          <div className="ageBucket graph">
            <h2 style={{textAlign: 'center'}}>Avg Time to Adopt</h2>
            <h2 style={{textAlign: 'center'}}>45 days</h2>
            <BarChart chartData={ageData} options={barOptions}/>
          </div>

          <div className="chars graph">
            <h2 style={{textAlign: 'center'}}>Characteristics</h2>
            <h2 style={{textAlign: 'center'}}>Proportions of dogs that ...</h2>
            <BarChart chartData={charsData} options={charBarOptions}/>
          </div>
          
          <div className="adoptTime graph">
            <LineChart chartData={adoptTime} options={lineOptions}/>
          </div>         

          <div className="breed graph">
            <BarChart chartData={breedData} options={barOptions}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
