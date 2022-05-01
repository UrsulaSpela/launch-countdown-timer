const countdown = function(){
    const endDate = new Date('January 1, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const timeGap = endDate - now

    // calculate time
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const dayText = Math.floor(timeGap / day)
    const hourText = Math.floor((timeGap % day) / hour)
    const minuteText = Math.floor((timeGap % hour) / minute)
    const secondText = Math.floor((timeGap % minute) / second)

    document.querySelector('.days').textContent = dayText
    document.querySelector('.hours').textContent = hourText
    document.querySelector('.minutes').textContent = minuteText
    document.querySelector('.seconds').textContent = secondText
}

setInterval(countdown, 1000)
