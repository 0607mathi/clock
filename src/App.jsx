import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function zeroFun(data){
  return data<10?'0'+data:data
}

function App() {

  // time
  const [clock, setClock]=useState(new Date())
  let hours = clock.getHours()
  hours = hours===0?"12":hours>12?hours-12:hours
  hours = zeroFun(hours)
  let minutes = clock.getMinutes()
  minutes = zeroFun(minutes)
  let seconds = clock.getSeconds()
  seconds = zeroFun(seconds)
  let AM_PM = clock.getHours()>=12?"PM":"AM"

  // date month year day
  const week =["SUN","MON","TUE","WED","THU","FRI","SAT"]
  let date = clock.getDate()
  date = zeroFun(date)
  let month = clock.getMonth() + 1
  month = zeroFun(month)
  let day = clock.getDay()
  let year = clock.getFullYear()
  

  useEffect(()=>{
    const time = setInterval(()=>{
        setClock(new Date())
    },100)
    return() => clearInterval(time)
  },[])

  return (
    <>
      <div className="clock">
        <div className="date-day">{date} - {month} - {year} {week[day]}</div>
        <div className="time">
          <div className="data">{hours}</div> :
          <div className="data">{minutes}</div> :
          <div className="data">{seconds}</div>
          <div className="data am-pm">{AM_PM}</div>
        </div>
        <div className="author">DIGITAL CLOCK With Mathi</div>
      </div>
    </>
  )
}

export default App
