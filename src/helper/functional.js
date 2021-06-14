export const formatTime = (date) => {
    var d = date;
    var h = d.getHours(), m = d.getMinutes(), l = "AM";
    if (h > 12) {
        h = h - 12;
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (d.getHours() >= 12) {
        l = "PM"
    } else {
        l = "AM"
    }
    return h + ':' + m + ' ' + l;
}
