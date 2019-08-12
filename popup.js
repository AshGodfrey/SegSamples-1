document.addEventListener("DOMContentLoaded", function(event){
    var b = document.getElementById('trackCopy');
    b.addEventListener('click', myFunction, false);

    function myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("trackEvent");
      
        /* Select the text field */
        copyText.select();
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }
});
