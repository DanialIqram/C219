$(document).ready(() => {
    const profilePicture = $(".profile-picture");
    const onlineButton = $("#online");
    const offlineButton = $("#offline");

    onlineButton.click(() => {
        onlineButton.addClass("active");
        offlineButton.removeClass("active");
        profilePicture.addClass("online-bubble");
    })

    offlineButton.click(() => {
        offlineButton.addClass("active");
        onlineButton.removeClass("active");
        profilePicture.removeClass("online-bubble");
    })
})