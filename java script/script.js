$(document).ready(function(){
    $("input:radio[name=image]").click(function(){
        var value = $(this).val();
        var image_name;
        if(value == "1"){
            image_name = "./photo/1.png"
        }
        else{
            if(value == '2'){
                image_name = "./photo/2.png";
            }else{
                image_name = "./photo/3.png";
            }
        }
        $('#formula').attr('src', image_name);
        
    })
})