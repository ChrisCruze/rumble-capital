(function countClassNames() {
    let classNameArray = document.getElementsByTagName('article');
    let chrisContributionCounter = 0;
    let omarContributionCounter = 0;
    let corneliusContributionCounter = 0;
    let totalCounter;
    for (let i = 0; i < classNameArray.length; i++) {

        for (let j = 0; j < classNameArray[i].classList.length; j++) {
            if (classNameArray[i].classList[j].toLowerCase() == "corneliusteam") {
                corneliusContributionCounter++;
            }
            else if (classNameArray[i].classList[j].toLowerCase() == "omarteam") {
                omarContributionCounter++;
            }
            else if (classNameArray[i].classList[j].toLowerCase() == "christeam") {
                chrisContributionCounter++;
            }
        }
    }
    totalCounter = chrisContributionCounter + omarContributionCounter + corneliusContributionCounter;
    document.getElementById("totalContributorCount").innerHTML = totalCounter;
    document.getElementById("totalCorneliusCount").innerHTML = corneliusContributionCounter;
    document.getElementById("totalOmarCount").innerHTML = omarContributionCounter;
    document.getElementById("totalChrisCount").innerHTML = chrisContributionCounter;
})()
