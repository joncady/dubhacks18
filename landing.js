
//
// -- your description of what this file does here --
//

(function() {
  "use strict";

  let feelings = [];

  /**
   *  Initializes the page when the window is loaded
   */
  window.addEventListener("load", initialize);

  function initialize() {
    let buttons = qsa(".col");
    $("next-btn").addEventListener("click", saveSession);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", selected);
    }
  }

  function saveSession() {
    let include = qs("h1").innerText;
    console.log(include);
    if (include.includes("feeling")) {
      for (let i = 0; i < feelings.length; i++) {
        sessionStorage.setItem("feeling" + i, feelings[i]);
      }
      window.location.href="interests.html";
    } else {
      for (let i = 0; i < feelings.length; i++) {
        sessionStorage.setItem("interest" + i, feelings[i]);
      }
      window.location.href="main.html";
    }
  }

  function selected() {
    if (this.classList.contains("selected")) {
    	this.classList.remove("selected");
    	if (feelings.length == 5) {
    		$("next-btn").classList.add("hidden");
    	}
    	let index = feelings.indexOf(this.innerText);
			if (index > -1) {
  			feelings.splice(index, 1);
  		}
    } else {
    	if (feelings.length < 5) {
    		this.classList.add("selected");
      	feelings.push(this.innerText);
    	}
    	if (feelings.length == 5) {
    		$("next-btn").classList.remove("hidden");
    	}
    }
  }

  /**
   *  Make sure to always add a descriptive comment above
   *  every function detailing what it's purpose is
   *  @param {variabletype} someVariable This is a description of someVariable, including, perhaps, preconditions.
   *  @returns A description of what this function is actually returning
   */
  function exampleFunction2(someVariable) {
    /* SOME CODE */
    return something;
  }

  /* ------------------------------ Helper Functions  ------------------------------ */
  // Note: You may use these in your code, but do remember that your code should not have
  // any functions defined that are unused.

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function $(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

})();