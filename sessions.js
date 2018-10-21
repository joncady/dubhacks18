function getSessions () {
    let arrayOfSessions = new Array();
    for (let i = 0; i < 5; i++) {
        arrayOfSessions.push(sessionStorage.getItem("feeling" + i));
    }    
    for (let i = 0; i < 5; i++) {
        arrayOfSessions.push(sessionStorage.getItem("interest" + i));
    }
    return arrayOfSessions;
}