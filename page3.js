(function () {
    
    
    window.onload = function () {
        console.log(randomJSON(["hi", "hello"]));
        
        processJSON();  
    };

    function randomJSON(json) {
        let randomIndex = Math.floor(Math.random() * json.length); 
        return json[randomIndex];
    }

    function processJSON() {
        // JSON object properties:
        // name
        // short desc
        // link to source
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let a = document.createElement("a");
        
        div.classList.add("card");
        img.classList.add("card-img-top");
        div2.classList.add("card-body");
        h5.classList.add("card-title");
        p.classList.add("card-text");
        a.classList.add("btn"); 
        a.classList.add("btn-primary");
        
        div.style.width = "18rem";
        
        h5.innerText = "Card Title";
        p.innerText = "Card content";
        
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(a);
        
        $("content").appendChild(div);
        
        
        
    }
    
    function $(id) {
        return document.getElementById(id);
    }

})();