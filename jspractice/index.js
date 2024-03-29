const cart = ["shoes", "pants", "kurta"];

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

//consuming a promise

const user = fetch(GITHUB_API);

user.then(function (data) {
  console.log(data);
});

//Creating a promise
function createOrder(cart) {
  const id = 10;

  const pr = new Promise(function (resolve, reject) {
    if (true) {
      resolve(id);
    } else {
      const err = new Error("cart is not valid");
      reject(err);
    }
  });

  return pr;
}

function printId(id) {
  console.log(id);
}

/*

createOrder()
  .then(function (id) {
    printId(id);
  })
  .catch(function (err) {
    console.log(err.message);
  });

*/

//async-await

const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise resolved")
    }, 5000)
})

async function handlePromise() {
  const val = await p;
  console.log(val);
  console.log("after await")
}

handlePromise();
