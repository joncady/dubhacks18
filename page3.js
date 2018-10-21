(function () {
    
    window.onload = function () {      
        quoteGetter(); 
        getDog();
        getImageFromFolder("http://students.washington.edu/joncady/dubhacks/cars/cars.php", "Look at this sexy ", false);
        getImageFromFolder("http://students.washington.edu/joncady/dubhacks/memes/memes.php", "Consume this ", true);
    };

    function randomIndex(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        console.log(randomIndex);
        return randomIndex;
    }

    function processJSON(data) {
        // JSON object properties:
        // name
        // short desc
        // link to source
        
        console.log(data);

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
        
        h5.innerText = data.name;
        p.innerText = data.description;
        if (data.picture != null) {
            img.src = data.picture;
        }
        div.appendChild(img);
        div.appendChild(div2);
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(a);
        
        $("content").appendChild(div);
        
        
        
    }
    
    function quoteGetter( ) {
        let quote;
        fetch("https://talaikis.com/api/quotes/random/").then( function (response) {
            return response.json();
        })
        .then(function (data) {
            quote = { name: data.author, description: data.quote };
            processJSON(quote);
        });
    }    

    function getDog() {
        fetch("https://dog.ceo/api/breeds/image/random", { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            returnUsefulJSON(data);
        });
    }
    
    // Takes data object which has a property called "message" which is the url link to the
    // dog picture.
    function returnUsefulJSON(data) {
        // Example URL: https://images.dog.ceo/breeds/hound-ibizan/n02091244_743.jpg
        // 30th character is where the breed name starts.
        let breedName = "";
        let i = 30;
        while(data.message[i] != '/') {
            breedName += data.message[i];
            i++;
        }
        breedName = breedName.charAt(0).toUpperCase() + breedName.substr(1);     
        
        
        processJSON({
            name: breedName,
            description: "Hopefully this " + breedName + " cheers you up!",
            picture: data.message
        });
    }
    
    function getImageFromFolder(fetchURL, prompt, defaultInfo = true) {
        var images = new Array();
        fetch(fetchURL)
            .then(function(response) {
            return response.json();
        })
            .then(function(response) {
            let filename = "";
            let description = "";
            if (!defaultInfo) {
                filename = response[randomIndex(response)] + "";
                filename = filename.substr(55);
                filename = filename.replace(".jpg", "");
                filename = filename.replace(".JPG", "");
                description = prompt + filename + "!";
            }

            processJSON({
                name: filename,
                description: description, 
                picture: response[randomIndex(response)]
            });
        })
        
        
        
        
    }
    
    function $(id) {
        return document.getElementById(id);
    }

})();