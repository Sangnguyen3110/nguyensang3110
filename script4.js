$(document).ready(function(){
    $("#HTML").click(function(){
        $("#HTML").css("background-color" , "red")
        $("#content").text("Html viết tắt HyperText Markup Language");
        $("#PHP,#CSS,#Jquery").css("background-color", "#css");
    })
    $("#CSS").click(function(){
        $("#CSS").css("background-color" , "green")
        $("#content").text("Thay đổi cách hiện thị mặc định của thẻ HTML ");
        $("#PHP,#CSS,#Jquery").css("background-color", "#css");
    })
    $("#Jquery").click(function(){
        $("#Jquery").css("background-color" , "Blue")
        $("#content").text("Jquery là một thư viện của Javascript");
        $("#PHP,#CSS,#Jquery").css("background-color", "#css");
    })
    $("#PHP").click(function(){
        $("#PHP").css("background-color" , "aqua")
        $("#content").text("PHP là một ngôn ngữ lập trình phía server");
        $("#PHP,#CSS,#Jquery").css("background-color", "#css");
    })
})