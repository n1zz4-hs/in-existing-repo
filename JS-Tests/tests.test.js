
'use strict';

function longstring(str) {
    if (str.length > 100)
        return true;
    else 
        return false;
}

test('test_string', () => {
    expect(longstring('qwerqwerqwerqwerqwerqwerqwer')).toEqual(false);
});

function s_concat_all(str1, str2, str3){
    return String.prototype.concat(str1, str2), String.prototype.concat(str1, str3), String.prototype.concat(str2, str3);
}

test('test_concat', () => {
    expect(s_concat_all('a', 'b', 'c')).toEqual('bc', 'ac', 'ab');
});

function sIncrease(i, ii) { // По возрастанию
    if (i > ii)
        return 1;
    else if (i < ii)
        return -1;
    else
        return 0;
}

function number_divisors(num) {
    var divisors = [1];
    for (var i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0)
            divisors.push(i);
    }
    for (var i = 0; i < divisors.length; i++){
        if (!(num / divisors[i] in divisors)) {
            divisors.push(num / divisors[i]);
        }
    }
    return divisors.sort(sIncrease);
}

test('test_numbers', () => {
    expect(number_divisors(10)).toEqual([1, 2, 5, 10]);
});

function array_doubler(arr) {
    var a = arr.length;
    for (var i = 0; i < a; i++)
        arr.push(arr[i]);
    return arr.sort();
}

test('test_arrays', () => {
    expect(array_doubler([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]);
});

function arr_pop_shift(arr){
    var arr_l = arr.pop();
    arr_l = arr.shift();
    return arr;
}

test('test_pop_and_shift', () => {
    expect(arr_pop_shift([1, 2, 3])).toEqual([2]);
});

test('test_compare_operators', () => {
    expect(((false == 0) + (false !== 0) != (false == 0)) + false).toEqual(1);
});

test('test_equality_comparison_algorithm', () => {
    expect([[][[]]+[]][+[]][++[+[]][+[]]]).toEqual('n');
});
