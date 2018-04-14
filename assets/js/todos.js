//check of todos
$("ul").on("click", "li", function() {
    //check if li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});

//click on X  to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //stops it from bubbling to other customElements.define.
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event) {
    if (event.which === 13) {
        //taking new todo text from input
        let todoText = $(this).val()
        $(this).val(""); //clear the input 
        //creating new li and add to the list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function() {
    $("input[type = 'text']").fadeToggle();
})