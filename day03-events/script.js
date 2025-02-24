const myDiv = document.getElementById('div-id');

myDiv.addEventListener('mouseover', function () {
   myDiv.style.background = 'pink';
});
myDiv.addEventListener('mouseout', function () {
   myDiv.style.background = 'grey';
});
