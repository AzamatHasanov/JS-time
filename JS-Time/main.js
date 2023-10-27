function dateTime() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()


    document.getElementById('hours').innerText = hour + `:`
    document.getElementById('minute').innerText = minute + `:`
    document.getElementById('saniye').innerText = second
}
dateTime()
setInterval(dateTime, 1000)