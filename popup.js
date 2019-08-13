document.addEventListener("DOMContentLoaded", function(event){
    var b = document.getElementById('trackCopy');
    b.addEventListener('click', copyStringToClipboardA, false);

      function copyStringToClipboardA () {
        // Create new element
        var el = document.createElement('input');
        // Set value (string to be copied)
        el.value = document.getElementById("trackEvent").value;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
     }
});

document.addEventListener("DOMContentLoaded", function(event){
  var c = document.getElementById('identifyCopy');
  c.addEventListener('click', copyStringToClipboardB, false);

    function copyStringToClipboardB () {
      // Create new element
      var el = document.createElement('input');
      // Set value (string to be copied)
      el.value = document.getElementById("identifyEvent").value;
      // Set non-editable to avoid focus and move outside of view
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px'};
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      // Copy text to clipboard
      document.execCommand('copy');
      // Remove temporary element
      document.body.removeChild(el);
   }
});
