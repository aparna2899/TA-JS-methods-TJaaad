Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = "A quick brown fox jumped over a lazy".split(" ");
     sentanceArray.concat("dog").join(" "); //"A quick brown fox jumped over a lazy dog"
     let colors = ["red", "green", "blue"];
     colors.concat("black", "red", 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

   - Parameter: separator(string to separate elements)
   - Return: A string sepated by seperator.
   - Example:

   ```js
   let numbers = [1, 2, 3];
   numbers.join(); // '1,2,3'
   let colors = ["red", "green", "blue"];
   colors.join(" "); // 'red green blue'
   colors.join("-"); // 'red-green-blue'
   ```

   - `join` accepts a seperator and join the array elements seperated by seperator in a single string.
   - No it does not mutate the original array

3. `flat`

   - Parameter: depth of an array to be flattened(number)
   - Return: an array with sub array concatenated.
   - Example:

   ```js
   let numbers = [1, 2, [3, 4], 5];
   numbers.flat(1); // [1,2,3,4,5]
   let numbers = [1, 2, [3, 4, [5, 6]], 7];
   numbers.flat(2); // [1,2,3,4,5,6,7]
   let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]], [9], 10];
   numbers.flat(3); // [1,2,3,4,5,6,7,8,9,10]
   ```

   - `flat` accepts the level of depth and creates a new array with all sub-array elements concatenated into it.
   - No it does not mutate the original array

4. `push`

   - Parameter: elements to be pushed
   - Return: the length of the new array
   - Example:

   ```js
   let numbers = [1, 2, 3, 4];
   numbers.push(5); // 5
   numbers.push("hi"); // 6
   numbers.push(true); // 7
   ```

   - `push` accepts the elements to be pushed in the array and return the length of the new array.
   - Yes it does mutate the original array

5. `indexOf`

   - Parameter: elements to be searched in array, position to start with(index)
   - Return: first index of the element to be found
   - Example:

   ```js
   let numbers = [1, 2, 3, 4, 5, 1, 6, 7, 8, 1];
   numbers.indexOf(1); // 1
   numbers.indexOf(1, 1); // 5
   numbers.indexOf(1, 6); // 9
   ```

   - `indexOf` accepts the elements to search in the array and return the first index of the element.
   - No it does not mutate the original array

6. `lastIndexOf`

   - Parameter: elements to be searched in array, position to start searching from backwards(index)
   - Return: last index of the element to be found
   - Example:

   ```js
   let numbers = [1, 2, 3, 4, 5, 1, 6, 7, 8, 1];
   numbers.lastIndexOf(1); // 9
   numbers.lastIndexOf(1, 5); // 5
   numbers.lastIndexOf(1, 0); // 0
   ```

   - `lastIndexOf` accepts the elements to search in the array from back and return the last index of the element.
   - No it does not mutate the original array

7. `includes`

   - Parameter: elements to be searched, position to start searching from(index)
   - Return: true if the value is found else false
   - Example:

   ```js
   let numbers = [1, 2, 3, 4, 5];
   numbers.includes(3); // true
   numbers.includes(9); // false
   let str = "hello";
   str.includes("l", 2); // true
   ```

   - `includes` accepts the elements to search and return true if element is found on specified position.
   - No it does not mutate the original array

8. `reverse`

   - Return: the reverse of the array
   - Example:

   ```js
   let numbers = [1, 2, 3, 4, 5];
   numbers.reverse(); // [5, 4, 3, 2, 1]
   let words = ["a", "b", "c"];
   words.reverse(); // ['c', 'b', 'a']
   let fruits = ["apple", "mango", "orange"];
   fruits.reverse(); // ['orange', 'mango', 'apple']
   ```

   - `reverse` returns the reversed array
   - Yes it does mutate the original array

9. `every`

   - Parameter: the callback function with three arguments: element, index(optional), array(optional)
   - Return: true if callback function returns truthy value
   - Example:

   ```js
   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   numbers.every((num) => num < 10); // true
   numbers.every((num) => num < 5); // false
   let even = [2, 4, 6, 8];
   even.every((num) => num % 2 === 0); // true
   ```

   - `every` accepts callback function and returns true if callback function returns true for every element in array
   - No it does not mutate the original array

10. `shift`

- Return: remove the first value from the array
- Example:

````js
  let numbers = [1,2,3,4,5,6,7,8,9];
  numbers.shift() // 1
  let fruits = ['apple','mango','orange'];
  fruits.shift() // 'apple'
  fruits.shift() // 'mango'
  ```
 - `shift` removes the first element of an array
 - Yes it does mutate the original array

11. `splice`

- Parameter: the starting index, delete count, no. of items to add
- Return: an array of deleted elements
- Example:
```js
  let numbers = [1,2,3,4,5,6,7,8,9];
  numbers.splice(2,0,18) // []
  numbers.splice(4,1,12) // [4]
  numbers.splice(5,2,15,17) // [5,6]
  ```
 - `splice` can add/remove or replace elements in the array
 - Yes it does mutate the original array

12. `find`

- Parameter: the callback function with three arguments: element, index(optional), array(optional)
- Return: the first value in array that satisfy the condition
- Example:
```js
  let numbers = [1,2,3,4,5,6,7,8,9];
  numbers.find((num) => num>1) // 2
  numbers.find((num)=> num %2===0) //2
  numbers.find((num)=> num < 6) // 1
  ```
 - `find` returns the value of the first element in the array that satisfies condition
 - No it does not mutate the original array

13. `unshift`
- Parameter: elements to add
- Return: the length of the new array
- Example:
```js
  let numbers = [1,2,3,4,5];
  numbers.unshift(0) // 6
  numbers.unshift(34,78) // 8
  numbers.unshift(-2) // 9
  ```
 - `unshift` add elements at the begining of the array
 - Yes it does mutate the original array

14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
````
