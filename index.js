// ReferenceError: fetch is not defined in NodeJs

// EXAMPLE 1 - Using the node-fetch module in Node.js

import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());

// ----------------------------------------------------------

// // EXAMPLE 2 - Using native fetch() for Node.js version 18+

// async function getUser() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(await getUser());
