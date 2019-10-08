//Event Examples

function copyStringToClipboard(myInput) {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById(myInput).value;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

document.addEventListener("DOMContentLoaded", function (event) {

  //************AJS************\\
  //Event Examples
  var ajsPage = document.getElementById('pageCopy');
  var ajsIdentify = document.getElementById('identifyCopy');
  var ajsTrack = document.getElementById('trackCopy');
  var ajsGroup = document.getElementById('groupCopy');
  var ajsAlias = document.getElementById('aliasCopy');

  ajsPage.addEventListener('click', () => copyStringToClipboard("pageEvent"), false);
  ajsIdentify.addEventListener('click', () => copyStringToClipboard("identifyEvent"), false);
  ajsTrack.addEventListener('click', () => copyStringToClipboard("trackEvent"), false);
  ajsGroup.addEventListener('click', () => copyStringToClipboard("groupEvent"), false);
  ajsAlias.addEventListener('click', () => copyStringToClipboard("aliasEvent"), false);

  //Payload Examples
  var ajsPayloadTrack = document.getElementById('trackCopyPayload');
  var ajsPayloadIdentify = document.getElementById('identifyCopyPayload');
  var ajsPayloadPage = document.getElementById('pageCopyPayload');
  var ajsPayloadGroup = document.getElementById('groupCopyPayload');
  var ajsPayloadAlias = document.getElementById('aliasCopyPayload');

  ajsPayloadTrack.addEventListener('click', () => copyStringToClipboard("trackPayload"), false);
  ajsPayloadIdentify.addEventListener('click', () => copyStringToClipboard("identifyPayload"), false);
  ajsPayloadPage.addEventListener('click', () => copyStringToClipboard("pagePayload"), false);
  ajsPayloadGroup.addEventListener('click', () => copyStringToClipboard("groupPayload"), false);
  ajsPayloadAlias.addEventListener('click', () => copyStringToClipboard("aliasPayload"), false);

//************Android************\\
  //Event Examples
  var androidScreen = document.getElementById('androidScreenCopy');

  androidScreen.addEventListener('click', () => copyStringToClipboard("androidScreenEvent"), false);

  //Payload Examples
  var androidPayloadScreen = document.getElementById('androidScreenCopyPayload');

  androidPayloadScreen.addEventListener('click', () => copyStringToClipboard("androidScreenPayload"), false);

});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("javaScriptButton").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('Home').style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("androidButton").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('Android').style.display = "block";

    document.getElementById("androidButton").click();
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("searchbar").addEventListener("keyup", search_events);

function search_events() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('events'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerText.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="block";                  
      } 
  } 
} 
});
