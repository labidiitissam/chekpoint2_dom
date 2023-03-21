let img =document.querySelector('.img');
let container = document.querySelector('.container');
var myButton = document.getElementById('group');
function phones(phone) {
    img.src = phone;;
}
function colors(color) {
    container.style.background = color;
}
window.onscroll = function () {
'use strict';
if (window.pageXOffset >= 400){
    myButton.style.display = 'block';

} else {
     myButton.style.display = 'none';
}
};
myButton.onclick = function(){
'use strict';
window.scrollTo(0,0);


}