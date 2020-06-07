function findLongestSubstring(str) {

    let map = {};
    let maxLength = 0;
    let len = 0;

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (map.hasOwnProperty(char)) {
            i = map[char];
            maxLength = maxLength < len ? len : maxLength;
            map = {};
            len = 0;
        } else {
            map[char] = i;
            len++;
        }

    }

    maxLength = maxLength < len ? len : maxLength;
    return maxLength;


}

console.log(findLongestSubstring('thisishowwedoit'))