
const withdraw = document.getElementById("withdraw");
const deposite = document.getElementById("deposite");
const create = document.getElementById("create");
const openSection = document.getElementById("open-section");
let userObj = {};
let finalArray = [];

function createAccount() {
  let createdaElement = document.createElement("input");
  createdaElement.type = "text";
  createdaElement.placeholder = "Enter your name";
  openSection.appendChild(createdaElement);

  createdaElement.addEventListener("change", () => {
    let nameOfUser = createdaElement.value;
    console.log(nameOfUser);

  
    let accountNumber = Math.floor(100000 + Math.random() * 900000);
    userObj = { name: nameOfUser, accountNumber: accountNumber, balance: 0 };

   
    finalArray.push(userObj);
    console.log("Account Created:", userObj);
    console.log(finalArray);

    alert(`Account Created!\nName: ${nameOfUser}\nAccount Number: ${accountNumber}`);
    createdaElement.value = ""; // Clear input after creating the account
  });
}

function depositeInAccount() {
  let nameInput = document.createElement("input");
  let accountNumberInput = document.createElement("input");
  let amountInput = document.createElement("input");

  nameInput.type = "text";
  accountNumberInput.type = "number";
  amountInput.type = "number";

  nameInput.placeholder = "Enter your name";
  accountNumberInput.placeholder = "Enter account number";
  amountInput.placeholder = "Enter amount to deposit";

  openSection.appendChild(nameInput);
  openSection.appendChild(accountNumberInput);
  openSection.appendChild(amountInput);

  let submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  openSection.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    let name = nameInput.value;
    let accountNumber = Number(accountNumberInput.value);
    let amount = Number(amountInput.value);

    
    let account = finalArray.find(
      acc => acc.name === name && acc.accountNumber === accountNumber
    );

    if (account) {
      account.balance += amount;
      alert(`Deposit successful! New Balance: ${account.balance}`);
      console.log("Updated Account:", account);
    } else {
      alert("Account not found! Please check your details.");
    }

    
    nameInput.value = "";
    accountNumberInput.value = "";
    amountInput.value = "";
  });
}

function withdrawFromAccount() {
  let nameInput = document.createElement("input");
  let accountNumberInput = document.createElement("input");
  let amountInput = document.createElement("input");

  nameInput.type = "text";
  accountNumberInput.type = "number";
  amountInput.type = "number";

  nameInput.placeholder = "Enter your name";
  accountNumberInput.placeholder = "Enter account number";
  amountInput.placeholder = "Enter amount to withdraw";

  openSection.appendChild(nameInput);
  openSection.appendChild(accountNumberInput);
  openSection.appendChild(amountInput);

  let submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  openSection.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    let name = nameInput.value;
    let accountNumber = Number(accountNumberInput.value);
    let amount = Number(amountInput.value);

    // Find the account
    let account = finalArray.find(
      acc => acc.name === name && acc.accountNumber === accountNumber
    );

    if (account) {
      if (account.balance >= amount) {
        account.balance -= amount;
        alert(`Withdrawal successful! New Balance: ${account.balance}`);
        console.log("Updated Account:", account);
      } else {
        alert("Insufficient balance!");
      }
    } else {
      alert("Account not found! Please check your details.");
    }

    // Clear inputs
    nameInput.value = "";
    accountNumberInput.value = "";
    amountInput.value = "";
  });
}

create.addEventListener("click", createAccount, false);
deposite.addEventListener("click", depositeInAccount, false);
withdraw.addEventListener("click", withdrawFromAccount, false);
