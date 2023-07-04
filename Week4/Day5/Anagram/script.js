function isItAnAngram(str1, str2){
    
    const isAnagram = (str1, str2) => {
        if (str1.length !== str2.length) {
          return false;
        }
    const stringBreakDown1 = str1.replace(/\s/g, '').toLowerCase();
    const stringBreakDown2 = str2.replace(/\s/g, '').toLowerCase();

    const combineTheString1 = stringBreakDown1.split('').sort().join('');
    const combineTheString2 = stringBreakDown2.split('').sort().join('');

        return combineTheString1 === combineTheString2
}
}