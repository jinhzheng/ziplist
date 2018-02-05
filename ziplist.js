const num = [1, 2, 3];
const lett = ['a', 'b', 'c'];
function zipList(list1, list2) {
  if (!(list1.length === list2.length)) {
    return 'length mismatch';
  } const bigarr = [];
  for (let i = 0; i < list1.length; i++) {
    bigarr.push(list1[i], list2[i]);
  }
  return bigarr;
}
console.log(zipList(num, lett));
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1,list2));
}
console.log(zipListTheSimpleWay(num, lett));
