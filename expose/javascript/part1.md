# Part 1 Questions
1. What is printed by line 9 is "values added: 20"
2. By line 13, it will print "final result: 20"
3. By line 9, it will print "values added: 20"
4. The code will return an error because result is declared as `let` which is a block scope. This means result can only be accessed by other calls within the `if` block and the `console.log('final result: ', result)` cannot accesss the result.
5. By line 9 there will be an error because we set result as `const` which means result cannot be reassigned to another number.
6. By line 13 there will be an error because we set result as `const` which means result cannot be reassigned to another number. Additionally, it also has the same scope as let which means `console.log('final result: ', result)` cannot access result.
