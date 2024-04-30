# Part 2 Questions
1. By line 12, it will print "3" because i was declared as a `var` where it can be accessed globally. It is 3 because it counts the number of values in the given prices array due to the condition of `i < prices.lenth`. Since it reaches to 3 and 3 is not bigger than `prices.length` (3), i remains as 3.
2. By line 13 it will print "150". Similarly to i, it was declared as a var so it can be accessed globally. Then by the end of the execution of the for loop, discountedPrice will contain the very last value of the array that is discounted by the price which is 300 * (1 - 0.5) = 150.
3. By line 14, it will also print "150". `finalPrice` is set as var and it's similar if we `console.log(discountedPrice)` from the previous step. In line 8, it rounds `discountedPrice * 100` by to the nearest integer which is 1500 and then divided by 100 which is still 150.
4. This function will return the list of discounted Prices in the array discounted which is `[50, 100, 150]`. This because discounted is set as a `var` which can be accessed globally. Additionally, all variables and data types are set as `var` so anything can access each other.
5. At line 12, there will be an error because i was declared as `let` which is only within the scope of the block. In this case the block is the for loop because it was declared in the conditions of the for loop and the `console.log(i)` was called outside of the for loop.
6. At line 13, there will be an error because discountedPrice was declared as `let` which is only within the scope of the block. In this case the block is the for loop because it's inside the for loop block and the `console.log(discountedPrice)` was called outside of the for loop.
7. It will print out "150" because `console.log(finalPrice)` was in the same scope as the variable declaration of `let finalPrice = 0;`. Additionally, the for loop's function can manipulate finalPrice because it's in the same scope. It prints "150" because that was the last operation of the given array.
8. This function will return the list of discounted Prices in the array discounted which is `[50, 100, 150]` because discounted was declared as `let` and the `return` call was made within the same scope. The for loop also manipulated discounted because it's within the same scope.
9. There will be an error because i was declared as `let` which is only in the scope of the for loop's conditional and `console.log(i)` was made outside of the for loop.
10. In line 12, it will print 3 because `length` was declared as a `const` with the value of array length whic is `prices.length`. Then `console.log(length)` was made within the same scope as `const` because its scope is the same as `let`. 
11. It will return `[50, 100, 150]` because although discounted was declared as `const`, the data type can be modified. It is just that the array itself cannot be reassigned to anything else. Additionally inside the for loop, the const is being redeclared during each iteration of the loop so it adds the new values into the array.
12. 
    1.  `student.name`
    2.  `student['Grad Year']`
    3.  `student.greeting()`
    4.  `student.['Favorite Teacher'].name`
    5.  `student.courseLoad[0]`
13. Arthmetic
    1.  '32' it is because '3' is a string and the + is used as concatenation with the number 2 so it's '32'
    2.  1 it is because the '3' is converted to a number due to the - and it does 3 - 2
    3.  3 in numeric conversion, null becomes a 0 so it's 3 + 0
    4.  '3null' it is because '3' is a string and it concatenates with the null due to the + operation
    5.  4 it is because true is evaluated as a 1 in numeric conversion and is basically 1 + 3
    6.  0 it is basically 0 + 0 because false and null evaluates to 0 in numeric conversion
    7.  '3undefined' it is because '3' is a string and the + is concatenating with undefined turning it into a string
    8.  NaN it is because the string is being subtracted with the value undefined which in numeric conversion it becomes NaN
14. Comparison
    1.  true because th string '2' becomes a number 2
    2.  false because '2' is compared to the first char which is '1' and it is a dictionary comparison
    3.  true because it's an equality check and checks whether the content of both is equal which is 2
    4.  false because it checks for type on both sides where one is a number and the other is a string
    5.  false because true will be evaluated as 1, and 1 == 2 is false
    6.  true because Boolean(2) will be evaluated true since it contains a non-zero number and then true === true is true since they are both true and booleans
15. The difference between == and === is that === is strictly equals where it also checks for data type. Compared to ==, it can do type conversions on either side to be evaulated. Usually === is safer because we are also type checking.
16. In [part2-question16.js](part2-question16.js)
17. The result will be `[2, 4, 6]`. We first called the function `modifyArray` while passing values of `[1, 2, 3]` and `doSomething` function. Then the `modifyArray` iterates through the given list. While it iterates throught the given list, `newArr.push(callback(array[i]));`. This line first gets the value at `array[i]`. Then it applies the `callback` function which in this case, its the `doSomething` function and it multiplies the given value with 2 and spits out the number. Finally, `newArr.push()` adds the number to the `newArr`.
18. In [part2-question18.js](part2-question18.js)
19. It will print 1, 4, 3, 2 each on a new line.