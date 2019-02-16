const sortString = str => {
    return str.replace(/\s+/g, '').split('').sort().join('')
}

const isAnagram = (str1, str2) => {
    return sortString(str1) === sortString(str2);
}
