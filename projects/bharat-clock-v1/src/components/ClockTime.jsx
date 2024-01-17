let ClockTime = () => {

  let time = new Date();

  return(
    <p>The current time is: {time.toLocaleTimeString()}, {time.toLocaleDateString()}</p>
  )
}

export default ClockTime;