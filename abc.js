function setYear(){
    var year = document.getElementById('inputYear').value || 2023
    for (let i = 0; i <= 12; i++) {
        let p = (i + 1) + ',' + year
        console.log(p)
        let noOfDays = moment(p, 'M,YYYY').daysInMonth()
        console.log(noOfDays);
        let monthName = moment().month(i).format('MMMM')
        console.log(monthName)
        let monthBox = document.getElementById(monthName)
        let dateContent = ''
        for (let j = 1; j <= noOfDays; j++) {
            let date = moment(`${j}-${monthName}-${year}`, 'D-MMMM-YYYY')
            let dayOfWeek = moment(date).format('ddd')
            dateContent += `<div class="dateWrapper"><label for="day">${j}</label><input type='checkbox' value=${j}><label for="day">${dayOfWeek}</label></div>`
            monthBox.innerHTML = dateContent
        }
    }
}