header(1);
console.log('xxxxx');
console.log('xxxxxxxx');
console.log('\nOutput: ')
console.log(xify('hello'));
console.log(xify('Hi there'));
header(2);
console.log('g!o!o!d!n!e!s!s!')
console.log('o!h! !h!e!l!l!o!');
console.log('\nOutput: ')
console.log(yellingChars('goodness'));
console.log(yellingChars('oh hello'));
header(3);
console.log('0h1e2l3l4o');
console.log('0b1y2e');
console.log('\nOutput: ')
console.log(indexedChars('hello'));
console.log(indexedChars('bye'));
header(4);
console.log('What are you doing! Are you a fool!');
console.log('This is fine!');
console.log('\nOutput: ')
console.log(exlaim('What are you doing? Are you a fool?'));
console.log(exlaim('This is fine?'));
header(5);
console.log('The fault, dear...');
console.log('Well, that\'s ju...');
console.log('\nOutput: ')
console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate('Well, that\'s just, like, your opinion man.'));
header(6);
console.log('colin.jaffe@codeimmersives.com');
console.log('anthony.derosa@codeimmersives.com');
console.log('\nOutput: ')
console.log(ciEmailify('coliin jaffe'));
console.log(ciEmailify('Anthony Derosa'))
header(7);
console.log('niloc');
console.log('arausem');
console.log('\nOutput: ')
console.log(reverse('colin'));
console.log(reverse('mesuara'));
header(8);
console.log('oiae');
console.log('ui');
console.log('Aoeoa');
console.log('\nOutput: ')
console.log(onlyVowels('oiae'));
console.log(onlyVowels('ui'));
console.log(onlyVowels('Anthony DeRosa'));
header(9);
console.log('hElLo');
console.log('mUlTiPlE WoRdS HeRe');
console.log('yElLiNg');
console.log('\nOutput: ')
console.log(crazyCase('hello'));
console.log(crazyCase('multiple words here'));
console.log(crazyCase('YELLING'));
header(10);
console.log('Return Of The King');
console.log('Code Immersives');
console.log('\nOutput: ')
console.log(titleCase('return of the king'));
console.log(titleCase('cOde iMMerSives'));
header(11);
console.log('ohHello');
console.log('wellYeahOfCourse');
console.log('boyHowdy');
console.log('\nOutput: ')
console.log(camelCase('oh Hello'));
console.log(camelCase('well yeah of course'));
console.log(camelCase('Boy howdy'));
header(12);
console.log('mUlTiPlE wOrDs HeRe');
console.log('cRaZy StUfF');
console.log('\nOutput: ')
console.log(crazyCase2ReturnOfCrazyCase('multiple words here'));
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'));

function xify(str) {
    let temp = '';
    for(let i of str){
        temp += 'x';
    }
    return temp;
}

function yellingChars(str){
    let temp = '';
    for(let i of str) {
        temp += i + "!";
    }
    return temp;
}

function indexedChars(str){
    let temp = '';
    for(let i = 0; i < str.length; i++) {
        temp += i;
        temp += str[i];
    }
    return temp;
}

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

function reverse(str){
    let temp = '';
    for(let i = str.length - 1; i >= 0; i--){
        temp += str[i];
    }
    return temp;
}

function onlyVowels(str){
    let temp = '';
    for(let i of str){
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U'){
            temp += i;
        }
    }
    return temp;
}

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

function header(num){
    if(num === 1){
        console.log('Challenge ' + num);
        console.log('');
        console.log('Expected output: ');
        return;
    }
    console.log('\n');
    console.log('Challenge ' + num);
    console.log('');
    console.log('Expected output: ');
}