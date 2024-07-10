function twoSum(numbers, target) {
  let number = {};
  for (let i in numbers) {
    number[numbers[i]] = Number(i);
  }
	for(let i in numbers){
    if(number[target-numbers[i]] && number[target-numbers[i]] != i){
      return [Number(i),number[target-numbers[i]]]
    }
  } 
}
numbers1 = [2, 7, 11, 15]; // input 9 output [0, 1]
numbers2 = [2, 7, 11, 15]; // input 23 output []

console.log(twoSum(numbers1, 9));
console.log(twoSum(numbers2, 23));
