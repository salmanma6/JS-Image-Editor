window.addEventListener("keydown",changebackground);
function changebackground()
{
    console.log("hey im changing background");
    var imglink=document.querySelector('.imagelink').value;
    console.log(imglink);
    if(imglink!="")
    {
    document.querySelector('.back').src=imglink;
    }
    else{
        return;
    }
}
function changeb(val){
    console.log("hey im changing background blur"+val);
    document.querySelector('.back').style.filter=`blur(${val}px)`;
}
function changes(val){
    console.log("hey im changing scale"+val);
    document.querySelector('.image').style.transform=`scale(${val})`;
}
function changex(val){
    console.log("hey im changing X position"+val);
    document.querySelector('.image').style.left=`${val}%`;
}
function changey(val){
    console.log("hey im changing Y position"+val);
    document.querySelector('.image').style.top=`${val}%`;
}
