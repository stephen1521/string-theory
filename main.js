console.log('Challenge 1');
console.log('');
console.log(xify('hello'));
console.log(xify('Hi there'));
function xify(str) {
    let temp = '';
    for(let i of str){
        temp += 'x';
    }
    return temp;
}
console.log('\n');
console.log('Challenge 2');
console.log('');
console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));
function yellingChars(str){
    let temp = '';
    for(let i of str) {
        temp += i + "!";
    }
    return temp;
}
console.log('\n');
console.log('Challenge 3');
console.log('');
console.log(indexedChars('hello'));
console.log(indexedChars('bye'));
function indexedChars(str){
    let temp = '';
    for(let i = 0; i < str.length; i++) {
        temp += i;
        temp += str[i];
    }
    return temp;
}
console.log('\n');
console.log('Challenge 4');
console.log('');
console.log(exlaim('What are you doing? Are you a fool?'));
console.log(exlaim('This is fine?'));
function exlaim(str){
    let temp = '';
    for(let i of str){
        if(i === '?'){
            temp += '!';
        } else {
            temp += i;
        }
    }
    return temp;
}
console.log('\n');
console.log('Challenge 5');
console.log('');
console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate('Well, thats\'s just, like, your opinion man.'));
function truncate(str){
    if(str.length < 15){
        return str;
    }
    let temp = '';
    for(let i = 0; i <= 15; i++){
        if((i === 15) && (str[i] === " ")){
            break;
        }
        temp += str[i];
    }
    return temp + '...';
}
console.log('\n');
console.log('Challenge 6');
console.log('');
console.log(ciEmailify('coliin jaffe'));
console.log(ciEmailify('Anthony Derosa'))
function ciEmailify(str){
    str = str.toLowerCase();
    let temp = '';
    for(let i of str){
        if(i === " "){
            temp += '.';
            continue;
        }
        temp += i;
    }
    return temp + '@codeimmersives.com';
}
console.log('\n');
console.log('Challenge 7');
console.log('');
console.log(reverse('colin'));
console.log(reverse('mesuara'));
function reverse(str){
    let temp = '';
    for(let i = str.length - 1; i >= 0; i--){
        temp += str[i];
    }
    return temp;
}
console.log('\n');
console.log('Challenge 8');
console.log('');
console.log(onlyVowels('oiae'));
console.log(onlyVowels('ui'));
console.log(onlyVowels('Anthony DeRosa'));
function onlyVowels(str){
    let temp = '';
    for(let i of str){
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U'){
            temp += i;
        }
    }
    return temp;
}
console.log('\n');
console.log('Challenge 9');
console.log('');
console.log(crazyCase('hello'));
console.log(crazyCase('multiple words here'));
console.log(crazyCase('YELLING'));
function crazyCase(str){
    let temp = '';
    for(let i = 0 ; i < str.length; i++) {
        if(i % 2 === 0){
            temp += str[i].toLowerCase();
        } else {
            temp += str[i].toUpperCase();
        }
    }
    return temp;
}
console.log('\n');
console.log('Challenge 10');
console.log('');
console.log(titleCase('return of the king'));
console.log(titleCase('cOde iMMerSives'));
function titleCase(str){
    let temp = '';
    str =  str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(i === 0){
            temp += str[i].toUpperCase();
            continue;
        } 
        if(str[i] === " ") {
            temp += str[i];
            temp += str[i+1].toUpperCase();
            i++;
            continue;
        }
        temp += str[i];
    }
    return temp;
}
console.log('\n');
console.log('Challenge 11');
console.log('');
console.log(camelCase('oh Hello'));
console.log(camelCase('well yeah of course'));
console.log(camelCase('Boy howdy'));
function camelCase(str){
    str = str.toLowerCase();
    let temp = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            temp += str[i+1].toUpperCase();
            i++;
            continue;
        }
        temp += str[i];
    }
    return temp;
}
console.log('\n');
console.log('Challenge 12');
console.log('');
console.log(crazyCase2ReturnOfCrazyCase('multiple words here'));
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'));
function crazyCase2ReturnOfCrazyCase(str){
    let temp = '';
    let cnt = 1;
    for(let i = 0 ; i < str.length; i++) {
        if(str[i] === " ") {
            temp += str[i];
        } else if(cnt === 1){
            temp += str[i].toLowerCase();
            cnt = 2;
        } else if(cnt === 2){
            temp += str[i].toUpperCase();
            cnt = 1;
        }
    }
    return temp;
}