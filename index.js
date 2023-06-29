// Code your solution here
const drivers2 = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching (array, name){
    return array.filter(element => element.toLowerCase() === name.toLowerCase())
  }

function fuzzyMatch(array, letters){
    return array.filter(element => element.slice(0,2).toLowerCase() === letters.toLowerCase())    
}

function matchName(array, name){
    return array.filter(element => element.name === name)
}