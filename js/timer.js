const over = document.querySelector('.over')
const blockTimer = document.querySelector('.timer')
const days_html = document.querySelector('.days')
const hours_html = document.querySelector('.hours')
const minutes_html = document.querySelector('.min')
const seconds_html = document.querySelector('.sec')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const input = document.querySelector('.datetime_input')

let timer = null;
//const end = new Date('2023-05-08T23:59:59').getTime()

function startTimer(){
const inputDate = new Date(input.value)
if(!isNaN(inputDate)){
end = inputDate.getTime();
clearInterval(timer)
timer = setInterval(updateTimer,1000)
}
}

function stopTimer(){
    clearInterval(timer)
}
 function updateTimer(){
    const now = new Date().getTime()
    const distanse = end - now

    const days = Math.floor((distanse % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanse % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanse % (1000 * 60)) / 1000);

    const formatTimeDays = `${addZero(days)}`;
    const formatTimeHours = `${addZero(hours)}`;
    const formatTimeMinutes = `${addZero(minutes)}`;
    const formatTimeSeconds = `${addZero(seconds)}`;

    days_html.textContent = formatTimeDays;
    hours_html.textContent = formatTimeHours;
    minutes_html.textContent = formatTimeMinutes;
    seconds_html.textContent = formatTimeSeconds;

    blockTimer.style.display = "flex";
        over.style.display = "none";
    if(distanse < 0 ){
        clearInterval(timer);
        blockTimer.style.display = "none";
        over.style.display = "flex";
    }
}

function addZero(number){
    return number.toString().padStart(2,'0')
}
function stopTimer(){
    clearInterval(timer)
}

button1.addEventListener('click', startTimer)
button2.addEventListener('click', stopTimer)

