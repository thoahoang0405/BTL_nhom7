let inputHeader =document.getElementById('input-form');
inputHeader.addEventListener('mouseover',keo_dai);
function keo_dai()
{
    inputHeader.style.width="400px";
    inputHeader.style.transitionTimingFunction="linear";
    inputHeader.style.transitionDuration="0.3s";
}
inputHeader.addEventListener('mouseleave',thu_ngan);
function thu_ngan()
{
    inputHeader.style.width="300px";
}
 let click_btn =document.getElementById('explore');
 click_btn.addEventListener('click',explore_click)
 explore_click()
 {
     
 }