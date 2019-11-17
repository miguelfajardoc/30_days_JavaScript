window.addEventListener("load", do_stuff);

function do_stuff(){

    const secondHand = document.querySelector('.second-hand');
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');

    function setDate() {
        const now = new Date();
        const seconds =  now.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        //console.log(seconds);

        const hours = now.getHours();
        const hoursDegrees = (hours / 12) * 360 + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        //console.log(hours);

        const minutes = now.getMinutes();
        const minutesDegrees = (minutes / 60) * 360 + 90;
        minHand.style.transform = `rotate(${minutesDegrees}deg)`;
        //console.log(minutes);
    }

    setInterval(setDate, 1000);
}