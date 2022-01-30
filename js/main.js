import { intervalToDuration  } from 'date-fns'

const UI = {
    DATE: document.querySelector('input'),
    RESULT: document.getElementById('result'),
}

UI.FORM.addEventListener("change", function (e) {
    const todayDate = new Date();
    const selectDate = new Date(UI.DATE.value);
    const difference =  intervalToDuration({ start: todayDate, end: selectDate});
    UI.RESULT.textContent = `Up to date ${difference.years} year(s), ${difference.days} day(s), ${difference.hours} hour(s)`
})
