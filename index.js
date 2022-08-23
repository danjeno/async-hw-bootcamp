import axios from "axios";

const url = "https://dummyjson.com/users";

let result1 = [];
let result2 = [];

async function getNashvilleUsers() {
  const response = await axios.get(url);
  const users = response.data.users;
  for (let i = 0; i < users.length; i++) {
    if (users[i].address.city === "Nashville") {
      result1.push(
        users[i].firstName + " " + users[i].lastName + " " + users[i].username
      );
    }
  }
  console.log("NASHVILLE USERS:");
  console.log(result1);
}

async function getUsersWithAgeMoreThan40() {
  const response = await axios.get(url);
  const users = response.data.users;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 40) {
      result2.push(
        users[i].firstName + " " + users[i].lastName + " " + users[i].username
      );
    }
  }
  console.log("USERS WITH AGE MORE THAN 40:");
  console.log(result2);
}

getNashvilleUsers();
getUsersWithAgeMoreThan40();
