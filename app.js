// let count = 1;
// while (count <= 100) {
//     console.log(count)
//        count = count + 1;
// }


// for (let i = 0; i < 50; i = i + 1)  {
//     console.log(i   

//     );

// }


// for (let i = 1; i <= 20; ++i) {

    
//   if (i % 3 === 0  && i % 5 === 0) {
//     console.log('${i} -> Frontend Simplified')
    
//   }
//   else if (i % 3 === 0) {
//     console.log('${i} -> Frontend') }
  

//   else if (i % 5 === 0) {
//     console.log('S{i} -> Simplified')
//   }

//   else {
//     console.log('${i}  -> ${i}')
//   }

// }

// for (let i = 1; i <=20; ++i) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> Frontend Simplified`)
//     }

//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }

//     else if (i % 5 === 0)
// {
//     console.log(`${i} -> Simplified`)

// }

// else {
//     console.log(`${i} -> ${i}`)
// }
// }

// const str = "frontend Simplified"

// for (let i = 0; i < str.length; ++i) { 
//     console.log(str[i]);
// }

// console.log('welcome to FES, David');
// console.log('welcome to FES, Zen');
// console.log('welcome to FES William');  

//Function definition

// function welcomePersonToFES(name){console.log(`Welcome to Frontend Simplified, ${name}`)

// }

// //call the function
// welcomePersonToFES(`Tammy`);
// welcomePersonToFES(`David`);

// function convertCelsiusToFahrenheit (celsius){
  
//     return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(36))

// function welcomePersonToFES (firstName, lastName) {
//     console.log(`Welcome to FES ${firstName} ${lastName}`);
// }

// welcomePersonToFES("David", "Bragg");
// welcomePersonToFES("Tammy", "Jacobs");

// function sumOfTwoNumbers (num1, num2) {return num1 + num2;
// }
// console.log(sumOfTwoNumbers(10, 20));
// nst convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32;
// };
// console.log(convertCelsiusToFahrenheit(25));
// co


// console.log(arr[0])
// console.log(arr[arr.length - 1])
// arr.push(200)
// console.log(arr);


// let newArr = arr.filter((element) => {

//     console.log(element)
//     if (element < 50){
//     return true
//     }
// // })
// let arr = [20, 30,40,50,100]
// let newArr = arr.filter(element => element < 50)

// console.log(newArr)

// let Arr = [`A+`, `A`,`FAIL`] => [`A+`, `A`]

// let newArr = Arr.filter(element =)    

// let grades = [`A+`, `A`, `FAIL`]
// let goodGrades = grades.filter((element) => {
//     console.log(element)
//     if(element !== `FAIL`)
//  return true;

// })
// console.log(goodGrades)



// let goodGrades = grades.filter(element => {
//     return element !== `FAIL`
// })



//   let goodGrades = grades.filter(element => element !== `FAIL`)
// console.log(goodGrades)

// let grades = [`A+`,`A`,`FAIL`]

// let goodGrades = []

// for (let i = 0; i < grades.
//     length; ++i)

// { if(grades[i] !== `FAIL`) {
// goodGrades.push(grades[i]);

// }
    
// }
// console.log(goodGrades);

// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) =>  {
// console.log(element)
// return undefined;

// })
// console.log(newArray)

// let arr = [1, 4, 9, 16]
// let newArray = arr.map(element => {
//     return `10`;
// })
// console.log(newArray)

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => {
//       return element * 100
// })
// console.log(cents)

// let dollars = [0 , 10, 20];
// let cents = dollars.map(element => 
//     element * 100)
// // 
//  console.log(cents)

// 

// let dollars = [1, 5, 10, 3]
// let cents = []
// for(let i = 0; i < dollars.length; ++i){
// cents.push(dollars [i] * 100);
// }
// console.log(cents)

let users = [
  {
    username: "Tammy",
    email: "tammyjacobs63@gmail.com",
    password: "test243",
    subscriptionStatus: "VIP",
    discordId: "Tammy Jacobs#002",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
  {
    username: "mitri",
    email: "mitri@gmail.com",
    password: "metri123",
    subscriptionStatus: "VIP",
    discordId: "mitri#001",
    lessonsCompleted: [0, 1, 2, 3],
  },

    {
    username: "zen",
    email: "zen@gmail.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "zen#001",
    lessonsCompleted: [0, 1, 2, 3],
},

];

function login(email, password) {
    for (let i = 0; i < users.length; ++i)
  
        if (users[i].email === email){
        console.log(users[i]);
        if (users[i].password === password)
console.log(`log the user in - the details are correct`)

        }
else {
    console.log(`password is incorrect - try again`)
}
return;
}
console.log(`could not find an email tht matches`);

login(`thisdoesnotexistjacobs63@gmail.com`, `test243`);


let user = [ {
    username: "Tammy",
    email: "tammyjhealthcoach@gmail.com",
    password: "tj051063",
    subscriptionStatus: "VIP",
    discordId: "jacobs123",
     lessonsCompleted: "0, 1, 2, 3"
},
{
    username: "Taylor",
    email: "taylorherndon123@gmail.com",
    password: "th121106",
    subscriptionStatus: "VIP",
    discordID: "taylor1211",
    lessonsCompleted: "0, 1, 2, 3, 4",
},
];

function login(email, password){
for (let i = 0; i < user.length; ++i)
if (user [i].email === email){
    console.log (user [i]);
    if (user [i].password === password){
        console.log (`log the user in - password is correct`);
    }

    else { console.log (`password is incorrect - please try again`)

    }
    return;
}
console.log(`could not find user`);
}

login(`zen@gmail.com`, `zen123`);

function register(
    name,
    email, 
    password, 
    subscriptionStatus, 
    discordId, 
    lessonsCompleted)
    {
    
        let user = {
            username: name,
            email: email,
            password: password,
            subscriptionStatus: subscriptionStatus,
            discordId: discordId,
            lessonsCompleted: lessonsCompleted
        }
        users.push(user);
     
    }

    register(
        "zen",
         "zen@gmail.com", 
         "zen123",
          "VIP",
          "Zen#001",
        [0, 1]
        );

        console.log(users);