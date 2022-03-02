//loop,
for (let i = 0; i < 4; i += 1) {
  console.log(i);
}

// loop through array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Output: Every item in the array

// Break Keyword
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
    break;
  }
  console.log(i);
}

// Output: 0 1 2 3 4 5

// Nested Loop

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

/* 
  Output:
  0-0
  0-1
  0-2
  1-0
  1-1
  1-2
  */
