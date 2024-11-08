How to handle asynchronous operations using async/await over callback/promise TypeScript.?

Async/await feels like a game-changer-handler in TypeScript because it offers a cleaner+ readable syntax than callbacks or .then chains with promises. 
Sometimes we don’t get results instantly from an API/database. This delay is handled with async/await so the program keeps running without waiting for response. Previously developers used callbacks/promises but async/await provides a simple + readable format.

Concept of Async/Await
async makes a function asynchronous so it can handle promises.
await pauses the code until the promise is resolved (gets result) or rejected (has error).
Async/await  write asynchronous code that looks like regular + synchronous code.

Fetching Data from an API With Promises:

function fetchData(url: string): Promise<any> {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
}

fetchData("https://api.nextLevelWebDev2.0.com/data"); // Just for example, not a real site

Here, .then chains handle response and .catch handles errors. 
Although it works fine but for larger code, it gets messy + hard to read.


Fetching Data from an API With Async/Await (Cleaner + More Readable):

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url); 
    const data = await response.json(); 
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("https://api.nextLevelWebDev2.0.com/data");

Here:
await fetch(url) pauses the function until data is fetched.
await response.json() pauses the function again until the data is converted to JSON
try/catch catches if it can find any err


Advantages of async/await:
simple code, step-by-step code.
In the world of async/await, each request is handled in sequence //(it maintains sequence!)
far better Error Handling with try/catch
more readability with multiple awaits.
Reduce the mental load for the developer.


