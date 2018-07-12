function formatDate(date) {
    var d = new Date(date);
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return year + "-" + month + "-" + day;
}

function daysCalculatorFromToday(days, action) {
    var d = new Date();
    var x = Math.abs(days);
    if (action == "add") {
        d.setDate(d.getDate() + x);
    }
    else if (action == "subtract") {
        d.setDate(d.getDate() - x);
    } else {
        return false;
    }
    return formatDate(d);
}
