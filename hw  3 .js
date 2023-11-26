// 1. Insert a number. Print “yes” if it contains 3 successive zeros, otherwise print “no”.

function checkZeros(num) {   
    const numStr = num + '';  // преобразует число в строку
         let count = 0;  // создает счетчик  0 
            for (let i = 0; i < numStr.length; i++) {  // перебирает каждую цифру в строке
                if (numStr[i] === '0') {  // current digit равна 0 и увеличиваем счетчик 0                   count++;
                } else { 
                    count = 0; //если current digit не равна 0, то сбрасываем счетчик 0
                }
                  if  (count >= 3){  // если счетчик 0 равен 3,выводим Да
               console.log('Yes')  
            return;
        }  
    }
        console.log('No') //  если счетчик не равен 3, то  выводим нет 
 }


/* 2. Insert a number. Remove all zeros from the number, except the last one and print the
number. If there are at most one zero, print “Nothing to remove”. */


        function removeZeros(num) {
            let numStr = num + ''; // Преобразуем число в строку
                let count = 0;
                let result = '';
            for (let i = 0; i < numStr.length - 1; i++) {  // Считаем количество нулей, кроме последнего нуля
                if (numStr[i] === '0') {
                    count++;
                }
            }
            if (count <= 1) {  // Если количество нулей не больше 1, выводим "Nothing to remove"
                return "Nothing to remove";
            }
            for (let i = 0; i < numStr.length - 1; i++) { // Удаляем все нули, кроме последнего
                if (numStr[i] !== '0') {
                    result += numStr[i];
                }
            }
            result += '0';
            return result;  // Возвращаем полученное число
        }
console.log(removeZeros(4050120)) 


/* 3. Insert a n positive number. Check number is prime or not. Prime numbers are numbers
that have only 2 factors: 1 and themselves. For example, the first 5 prime numbers are
2, 3, 5, 7, and 11. */

function isPrime(num) {
    const numStr = num + '';
    for (let i = 2;  i < numStr; i++) {
     if (numStr % i === 0)
        return false;
       }  {
        return numStr !== 1;
     }
 if (numStr[i] === 0 || i === Math.sign) {
    result++
   }
    console.log(isPrime)
}    


//  4. Insert a n positive number. Print the n-st prime number.




// 5. Insert two positive integers n and m between 1 and 10. Compute and print n m .

    const fnPow = (n, m) =>  {
        if (n >= 1 && n <= 10 && m >= 1 && m <= 10) {
          let result = Math.pow(n, m);
            return result;
        }
     console.log( n + '^' + m + '=' + result)
    } 