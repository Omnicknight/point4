let box = document.querySelector('.box');
let moveBy = 200;
let moved = parseInt(box.style.marginLeft) || 0;


// do {
//     box.style.marginLeft = ++moved + 'px';
// } while (moved <= moveBy -1);

// while(moved < moveBy) 
// {
//     box.style.marginLeft = ++ moved + 'px';
// }    
// for(let number = 1, isUserHappy = true; isUserHappy; number++) {
//     isUserHappy = confirm('Are you happy that number is' + number + '?');
// }

for (var i = 1; i < 10; i++) {
    if (!(i % 2)) break;
    console.log(i);
}