var searchTags = [
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "Python",
    "Java",
    "iOS",
    "Swift",
    "React",
    "Web Design",
    "Web Development"
];

$(document).ready(()  => {
    $("#searchbox").autocomplete({
        source: searchTags
    })
})