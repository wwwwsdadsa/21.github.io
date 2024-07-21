let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "123.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '你知道嘛，不知不觉，我们在一起两个月啦<我很想你，我们总会有磕磕绊绊，不见面的日子里，要好好照顾自己，我会一直陪着你的。<遇见你<是我最幸运的事<柔软的暖风有轻拂一下<遥远的星星有闪烁一下<我也有心动<且不止一下'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },100);  
}, 5500);  
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
