const fs = require('fs');
const https = require('https')
const fetch = require('node-fetch')
const request = require('request');
const requestp = require('request-promise');
// // First I want to read the file
// fs.readFile('coba.md', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     //const content = data;

//     // Invoke the next step here however you like
//     console.log(data);   // Put all of the code here (not the best solution)
// });
function alertA(){
    console.log("alertA");
    console.log(1);
    }
// function alertB(){
//     console.log("alertB");
//     setTimeout(()=>console.log(2));
//     }
// function alertC(){
//     console.log("alertC");
//     console.log(3);
//     }
// alertA();alertB();alertC()

// fs.readFileSync('coba.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// alertA(); // will run before console.log

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) => {
// let data = "";

//   // A chunk of data has been recieved.
//   res.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   res.on('data', () => {
//     console.log('Tanggal : '+JSON.parse(data).date);
//   });
//   res.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

// const getAPI = () => fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(res) => {
//     res.on('data', (chunk) => {
//         data += chunk;
//       });
// })

// const fetchPromise = fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);
// });

// getAPI()
//     .then(getDate => getDate.json())
//     .then(getDate => getAPI(getDate.date)
//     .then(response => {
//         return ({getDate})
//     }))
//     .then(results => {
//         console.log(results.getDate)
//     })

// const fetchPromise = fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   const names = people.map(person => person.explanation);
//   console.log(names);
// });

  