(function () {
    
    
    window.onload = function () {
        console.log(randomJSON(["hi", "hello"]));
    };

    function randomJSON(json) {
        let randomIndex = Math.floor(Math.random() * json.length); 
        return json[randomIndex];
    }

    function processJSON(entry) {
        // JSON object properties:
        // name
        // short desc
        // link to source
        
    }   

})();