

 const secondHand = document.querySelector('.second');
 const minsHand = document.querySelector('.minute');
 const hourHand = document.querySelector('.hour');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // console.log(seconds);
    const secondsDegrees = ((seconds / 60) * 360) ;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
   
    const mins = now.getMinutes();
    // console.log(mins);
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) ;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
      
    const hour = now.getHours();
    // console.log(hour);
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

setInterval(setDate, 1000);