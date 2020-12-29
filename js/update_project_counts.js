






function project_lead_project_count_update(l,name){
	filtered_list = _.filter(l,function(D){
		const class_name = String($(D).attr('class'))
		return class_name.indexOf(name) > -1 })
	return filtered_list.length
}

function project_count_update_team(){
	const projects_list = $('article')
	$( ".dropdown-item" ).each(function( i ) {
		const dropdown_name = $( this ).find('.dropdown_name').html()
		const project_count = project_lead_project_count_update(projects_list,dropdown_name)
		console.log({dropdown_name,project_count})
		$( this ).find('.project_count').html(project_count)
	});

}

function update_project_count(){
	project_count_update_team()
	$('#project_count').html($('article').length)
}



// //
// var corneliusTeam = document.getElementsByClassName("corneliusTeam");
// var chrisTeam = document.getElementsByClassName("chrisTeam");
// var omarTeam = document.getElementsByClassName("omarTeam");
// var team = document.getElementsByClassName("Team");
// var podcasts = document.getElementsByClassName("podcasts");
// var corneliusTeamCount = document.getElementsByClassName("cornelius_team_count");
// var chrisTeamCount = document.getElementsByClassName("chris_team_count");
// var omarTeamCount = document.getElementsByClassName("omar_team_count");
// var teamCount = document.getElementsByClassName("team_count");
// var podcastCount = document.getElementsByClassName("podcasts_count");
// corneliusTeamCount.value = corneliusTeam.length;
// chrisTeamCount.value = chrisTeam.length;
// omarTeamCount.value = omarTeam.length;
// teamCount.value = team.length;
// podcastCount.value = podcasts.length;
//
// console.log(teamCount.value);
// console.log(corneliusTeamCount.value)
// console.log(chrisTeamCount.value);
// console.log(omarTeamCount.value);
// console.log(podcastsTeamCount.value);
// //
// function hello () {
// 	console.log("hello");
// 	corneliusTeamCount.value = corneliusTeam.length;
// 	chrisTeamCount.value = chrisTeam.length;
// 	omarTeamCount.value = omarTeam.length;
// 	teamCount.value = team.length;
// 	podcastCount.value = podcasts.length;
// }
