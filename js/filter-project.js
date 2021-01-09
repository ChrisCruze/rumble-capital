// dropdown clicked
$(".filter-projects-dropdown a").on("click", function(e) {
    // preventing default behaviour of a tag
    e.preventDefault();
    // getting name of this selected item from dropdown
    var selectedName = $(this).find('.dropdown_name').text();
    // setting name of button = name of selected item from dropdown
    $(".filter-projects-btn").text(selectedName);
    // hiding all the projects.
    // IMPORTANT: If new owner is added as class and in dropdown then it's name should be added here
    $(".Cornelius,.Omar,.Chris, .Rumble, .Podcasts").fadeOut();
    // if show all pressed then show all
    if (selectedName == "Show All") {
        $(".Cornelius, .Omar, .Chris, .Rumble, .Podcasts").slideToggle();
    } else {
        // showing the selected owners
        $("." + selectedName).slideToggle();
    }
});


// dropdown clicked
$(".filter-contributor-dropdown a").on("click", function (e) {
    // preventing default behaviour of a tag
    e.preventDefault();
    // getting name of this selected item from dropdown
    var selectedNameC = String($(this).find('.dropdown_name_contributor').text());
    // setting name of button = name of selected item from dropdown
    $(".filter-projects-btn-cont").text(selectedNameC);
    // hiding all the projects.
    selectedNameC = selectedNameC.toLowerCase();
    // IMPORTANT: If new owner is added as class and in dropdown then it's name should be added here
    $(".corneliusTeam,.CorneliusTeam,.omarTeam,.chrisTeam").fadeOut();
    $(".Cornelius,.cornelius,.Omar,.Chris, .Rumble, .Podcasts").fadeOut();
    // if show all pressed then show all
    if (selectedNameC == "total") {
        $(".corneliusTeam,.CorneliusTeam,.omarTeam,.chrisTeam").slideToggle();
    }
    else if (selectedNameC == 'cornelius') {
        $(".corneliusTeam,.CorneliusTeam").slideToggle();
    }
    else {
        // showing the selected owners
        selectedNameC = selectedNameC + "Team";
        $("." + selectedNameC).slideToggle();
    }
});
