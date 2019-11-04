$(function (){
    console.log("HELLO");
    $.ajax({
        url:'/',
        type:'GET',
        success:function(data){
            console.log(data);
        }
        }
    );

    
});