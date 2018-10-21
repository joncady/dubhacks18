function getSessions () {
    let arrayOfSessions = new Array();
    for (let i = 0; i < 5; i++) {
        arrayOfSessions.push(sessionStorage.getItem("feeling" + i).toLowerCase());
    }    
    for (let i = 0; i < 5; i++) {
        arrayOfSessions.push(sessionStorage.getItem("interest" + i).toLowerCase());
    }
    return arrayOfSessions;
}

function goHome() {
    sessionStorage.clear();
    window.location.href="landing.html";
}

function randomIndex(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(randomIndex);
    return randomIndex;
}

function cleanGaming(articles) {
    console.log(articles);
    let index = randomIndex(articles);
    let object = { description: articles[index].description,
        name: articles[index].title,
        picture: articles[index].urlToImage 
    };
    return object;
}