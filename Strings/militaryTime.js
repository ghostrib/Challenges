/*
Military Time
Given a string that represents time in hours and minutes,
convert the string to military time (if necessary).
*/

function toMilitary(time) {
    const digits = time.match(/\d+:\d+/g)[0].split(':')
    if (time.substr(-2) === 'pm' && digits[0] < 12) {
        digits[0] = parseInt(digits[0]) + 12;
    }
    if (time.substr(-2) === 'am') {
        if (digits[0] === '12') {
            digits[0] = '00'
        } else {
            digits[0] = '0' + digits[0];
        }
    }
    return digits.join(':')
}
