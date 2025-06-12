// variables

// var , let , const

// data types

// 1. number => 5 ,5.6 , 5.666666
// 2. string => "hello" , 'hello'
// 3. array => [1,2,3,4,5] , [2,"john"] , [{name:"john",age:20}]
// 4. object => {name:"john",age:20}
// 5. boolean => true , false
// 6. null => 
// 7. undefined

// let a = ["john","jane"]

// let student = {
//   name:"john",
//   age:20,
//   dob:"01-01-2000",
// }

// console.log(a[0])
// console.log(student.age)


// function greet(name){
//   console.log("hello",name)
//   console.log("hello "+name)
//   console.log(`hello ${name}`)
// }

// greet("john")

// let j = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// while (j < 10){
// console.log(j)
// j++
// }

// do {
//   console.log(j)
//   j++
// } while (j < 10);

// let age = 20;

// if(age > 18){
//   console.log("eligible")
//   if(age == 18){
//     console.log("eligible")
//   }
// } else if(age == 18){
//   console.log("eligible")
// } else {
//   console.log("not eligible")
// }


// const h1 = document.getElementById("heading")
// const btn = document.getElementById("btn")
// const cls = document.getElementsByClassName("cls")

// const h1 = document.querySelector("#heading")
// const btn = document.querySelector(".btn")

// btn.addEventListener("click",function(){
//   h1.innerText = "hello world"
// })

// console.log(h1.innerText)

// let count = 0
// const counter = document.querySelector("#counter")
// const increment = document.querySelector("#increment")
// const decrement = document.querySelector("#decrement")

// increment.addEventListener("click",function(){
//   if(count >= 10) return;

//   count ++
//   counter.innerText = count
// })

// decrement.addEventListener("click",function(){
//   if(count <= 0){
//     return;
//   }
//   count --
//   counter.innerText = count
// })


// let greet = () => {
//   console.log("hello")
// }

// greet()

// hello()

// function hello(){
//   console.log("hello world")
// }

// let hello = () => {
//   console.log("hello world")
// }

// function sqr (value){
//   return value * value
// }

// const sqr = (value) => value * value
// const name = "john"

// console.log(`hello ${name}`)


// destructuring

// const arr = [1, 24, 5, 6, 7]
// const [val1, val2] = arr

// const obj = {
//   name: "jane",
//   age: 29,
//   dob: "01-01-2000",
// }
// const { name } = obj

// const arr = [1, 34, 545, 66, 7]

// map , filter , reduce , pop , push , includes , foreach

// for (let i = 0; i < arr.length;i++){
//   console.log(arr[i])
// }

// function printValue(value) {
//   console.log(value)
// }

// arr.forEach(function (value) {
//   console.log(value)
// })

// arr.forEach( val => console.log(val))

// map function
const evenArr = [1, 2, 3, 4]

// let newArr = []

// for (let i = 0; i < evenArr.length; i++) {
//   newArr.push(evenArr[i] * 2)
// }

const newArr = evenArr.map(val => val * 2)
const filterArr = evenArr.filter(val => val > 2)

console.log(filterArr)
console.log(newArr)






