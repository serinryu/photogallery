/* 이미지 반복 */
function image_list(startnum) {
    var img_src;
    for(var i = 0; i < 11 ; i++){
        img_src = "'./assets/image/image" + (startnum+3*i) + ".jpg'";
        document.write("<div class='image-box'>");
        document.write('<a data-fancybox="gallery" href='+img_src+'data-sizes="480px, 800px">');
        document.write("<img src="+img_src+">");
        document.write('<div class="wrap"></div>');
        document.write('</a>');
        document.write('</div>');
    }
};


/* 햄버거 바 (모바일) */
window.onload = function(){

const sidebarBox = document.querySelector('#box'),
    sidebarBtn = document.querySelector('#btn'),
    pageWrapper = document.querySelector('#page-wrapper');

sidebarBtn.addEventListener('click', event => {
        sidebarBtn.classList.toggle('active');
        sidebarBox.classList.toggle('active');
});

pageWrapper.addEventListener('click', event => {
        if (sidebarBox.classList.contains('active')) {
                sidebarBtn.classList.remove('active');
                sidebarBox.classList.remove('active');
        }
});

window.addEventListener('keydown', event => {
        if (sidebarBox.classList.contains('active')) {
                sidebarBtn.classList.remove('active');
                sidebarBox.classList.remove('active');
        }
});

}
