$(document).ready(() => {
    $('.bookmark[data-toggle="tooltip"]').tooltip();

    $(".card-bookmark").each((i, obj) => {
        let target = obj.getAttribute("target");
        $("#" + target).css("display", "none");
    })

    $(".card-bookmark").click((e) => {
        let target = $(e.target).attr("target");
        let filled = $(e.target).attr("filled");
        if (target) {
            if (filled == "yes") {
                $("#" + target).css("display", "none");
            } else {
                $("#" + target).css("display", "block");
            }
        }
    })

    $(".remove-bookmark").click((e) => {
        let target = $(e.target).attr("target");
        if (target) {
            $("#bookmark-" + target).attr("filled", "no");
            $("#bookmark-" + target).attr("src", "images/bookmark.svg");
            $("#" + target).slideUp();
        }
    })
})