let Body = {
    setColor : function setColor(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor : function setBackgroundColor(backgroundColor){
        document.querySelector('body').style.backgroundColor=backgroundColor;
    }
}
let Link = {
    setColor : function setColor(color){
        var aList = document.querySelectorAll('a');
        for(let i = 0; i < aList.length; i++){
            aList[i].style.color=color;
        }
    },
}
function dayNightBtn(mine){
    if(mine.value === 'night'){
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Link.setColor('powderblue');
        mine.value='day';
    }else{
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Link.setColor('blue');
        mine.value='night';
    }
}