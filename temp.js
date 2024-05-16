let list1 = [1, 2, 3, 4, 5];

let list2 = [10, 11, 12, 13, 14];

// TODO: Finish function
// TIP: use splice and push
function move(index) {
  const item = list1.splice(index, 1);
  list2.push(item);
  return [list1, list2];
}

[list1, list2] = move(2);
console.log(list1);
console.log(list2);
