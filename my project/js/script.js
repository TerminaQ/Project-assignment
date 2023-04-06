$(function(){
    $("#about-button").click(function() {
        $('.about-text h2').html('<h2>Text</h2>')
        $('.about-inner h1').html('<h1>My new text</h1>')
        $('.about-inner img').remove()
        $('.about-item-1').prepend('<img src="../my project/image/port-1.jpg" width=110px>')
        $('.about-item-2').prepend('<img src="../my project/image/port-1.jpg" width=110px>')
    });
});

$(function(){
    $("#video-button").click(function() {
       let about = $(".modal");

       if (about.css("display") === "none") {
         about.css("display", "block");
       } else {
           about.css("display", "none");
       }
    });

    $('.modal-close').click(function() {
        $('.modal').css("display", "none");
    })
}); 