const allLinks = document.querySelectorAll('a');

const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
   console.log(img.src);
}

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
   link.style.color = 'rgb(0, 108, 134)';
   link.style.textDecorationColor = 'magenta';
   link.style.textDecorationStyle = 'wavy';
}
