class Numbers {
    constructor() {
        this.map = new Map();
        this.map.set(1, 'one')
        this.map.set(2, 'two')
        this.map.set(3, 'three')
        this.map.set(4, 'four')
        this.map.set(5, 'five')
        this.map.set(6, 'six')
        this.map.set(7, 'seven')
        this.map.set(8, 'eight')
        this.map.set(9, 'nine')
        this.map.set(10, 'ten')
        this.map.set(11, 'eleven')
        this.map.set(12, 'twelve')
        this.map.set(13, 'thirteen')
        this.map.set(14, 'fourteen')
        this.map.set(15, 'fifteen')
        this.map.set(16, 'sixteen')
        this.map.set(17, 'seventeen')
        this.map.set(18, 'eighteen')
        this.map.set(19, 'nineteen')
        this.map.set(20, 'twenty')
        this.map.set(30, 'thirty')
        this.map.set(40, 'forty')
        this.map.set(50, 'fifty')
        this.map.set(60, 'sixty')
        this.map.set(70, 'seventy')
        this.map.set(80, 'eighty')
        this.map.set(90, 'ninety')
    }

    getValue(key) {
        return this.map.get(key)
    }
}


function getDecimal(str, text, nums) {
    let decimal = str.join('')
    if (decimal < 20) text = nums.getValue(Number.parseInt(decimal))
    else {
        text = nums.getValue(Number.parseInt(str[0].concat('0')))
        if (str[1] !== '0') text += ' ' + nums.getValue(Number.parseInt(str[1]))
    }
    return text;
}

module.exports = function toReadable(number) {
    const nums = new Numbers()
    let str = number.toString().split('');
    let text = ''
    switch (str.length) {
        case 1: // 0 from 9
            if (str[0] === '0') text = 'zero'
            else text = nums.getValue(Number.parseInt(str))
            break
        case 2: // decimal
            text = getDecimal(str, text, nums);
            break
        case 3: // hundred
            text = nums.getValue(Number.parseInt(`${str[0]}`)).concat(` hundred `)
            str.shift()
            text += getDecimal(str, text, nums);
            break
    }
    return text.replace(/undefined/, ' ').trim()
}

