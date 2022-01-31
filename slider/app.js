let img = document.getElementById('img');
let pre = document.getElementById('pre');
let next = document.getElementById('next');
let photo = ['01.jpg', '02.jpg', '03.jpg'];
let count = 0;
next.addEventListener('click', function() {
    count++;
    if (count >= photo.length) {
        count = 0;
        img.src = photo[count];
    } else {
        img.src = photo[count];
    };
});
pre.addEventListener('click', function() {
    count--;
    if (count < 0) {
        count = photo.length - 1;
        img.src = photo[count];
    } else {
        img.src = photo[count];
    };
});