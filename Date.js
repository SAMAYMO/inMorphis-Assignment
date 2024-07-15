// let myDate=new Date()
// console.log(myDate.toString())
function displayTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(displayTime, 1000);

