let text;
switch(new Date().getDay()){
    case 1:
    case 2:
    case 3:
        text="Đầu Tuần";
        break;
    case 5:
    case 6:
    case 0:
        text="Cuối tuần";
        break;
        default:
            text="Tôi ko biết";
            break;
}
document.getElementById("demo").innerHTML=text;