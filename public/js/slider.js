$(document).on("pagecreate", "#page1", function(){

    //EXAMPLE 1 - change highlight color based on slider value
    HighlightColor($("#theSlider1"));
    $("#theSlider1").on("change", function(){
        HighlightColor($(this));
    });
    function HighlightColor(slider){
        var theVal = slider.val();
        var color = "#0DB8B5";
        if (theVal < 20){
            color = "#D92727";
        } else if (theVal < 40){
            color = "#FC8F12";
        } else if (theVal < 60){
            color = "#FFE433";
        } else if (theVal < 80){
            color = "#6FCC43";
        }
        slider.closest(".ui-slider").find(".ui-slider-bg").css("background-color", color);
    }
});
