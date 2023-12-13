/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return [];
}
// function calculateTotalSpentByCategory(transactions) {

//   let result=[];
//   let temp=[]
//   transactions.map(transaction=>{
//     if(temp.includes(transaction.category)){
//       result=[
//         ...result,//i want to update here,add code to update
//       ]
//     }
//     else{
//       result=[...result,{
//         [transaction.category]: transaction.price}]
//     }




//     result.map(category=>{
//       const itemName = Object.keys(category)[0]; // 

//   if (itemName === transaction.category) {
//      return [...result,//update here]
//   }
//   else{

//   }
//     })



// // const updatedValue = category[itemName] + transaction.price;
// //     return { [itemName]: updatedValue };

//   })

//   return result;
// }

module.exports = calculateTotalSpentByCategory;
