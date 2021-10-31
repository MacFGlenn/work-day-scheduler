var currentDate = moment();
// var leadCl = $('lead');

document.getElementById('current-day').textContent = currentDate.format('dddd MMMM Do');

console.log(leadCl);
console.log(currentDate.calendar());