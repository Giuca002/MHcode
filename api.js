
//var setText = document.getElementById("token");
//setText.innerHTML = "Hello";


document.addEventListener('DOMContentLoaded', function() {
    var api_button = document.getElementById('api_button');
    // onClick's logic below:
    api_button.addEventListener('click', function() {
        myFunction()

    });
});

function myFunction() {
    const tabs = browser.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];
    alert(tab)
  } 
  
