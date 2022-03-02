const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

//with variable
buttonA.onclick = () => {
  const name = prompt("What is your name?");
  if (name) {
    alert(`Hello ${name}, nice to see you!`);
  } else {
    alert(`Good Bye...`);
  }
  headingA.textContent = `Welcome ${name}`;
};
//without variable
buttonA.onclick = () => {
  const name = prompt("What is your name?");
  if (name) {
    alert(`Hello  ${prompt("What is your name?")}, nice to see you!`);
  } else {
    alert(`Good Bye...`);
  }
  headingA.textContent = `Welcome  ${prompt("What is your name?")}`;
};
