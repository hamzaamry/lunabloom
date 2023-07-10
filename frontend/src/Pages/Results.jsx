import React from 'react'
import axios from 'axios'
import './btn.css'
const results = () => {

  const getData = () => {
    axios.get('http://localhost:5000/api/users/results')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <button className="getdata-btn" onClick={getData}>Get Data</button>
    </div>
  )
}

export default results