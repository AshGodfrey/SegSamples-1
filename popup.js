//Event Examples

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

function copyStringToClipboardB() {
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

function copyStringToClipboardC() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("pageEvent").value;
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

function copyStringToClipboardD() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("groupEvent").value;
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

function copyStringToClipboardE() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("aliasEvent").value;
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

//Event Payloads

function copyStringToClipboardTrackPayload() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("trackPayload").value;
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

function copyStringToClipboardIdentifyPayload() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("identifyPayload").value;
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

function copyStringToClipboardPagePayload() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("pagePayload").value;
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

function copyStringToClipboardGroupPayload() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("groupPayload").value;
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

function copyStringToClipboardAliasPayload() {
  // Create new element
  var el = document.createElement('input');
  // Set value (string to be copied)
  el.value = document.getElementById("aliasPayload").value; //just replace the string inside getElementId *HERE*
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


document.addEventListener("DOMContentLoaded", function(event){
//Event Examnples
    var b = document.getElementById('trackCopy');
    var c = document.getElementById('identifyCopy');
    var d = document.getElementById('pageCopy');
    var e = document.getElementById('groupCopy');
    var f = document.getElementById('aliasCopy');

    b.addEventListener('click', copyStringToClipboardA, false);
    c.addEventListener('click', copyStringToClipboardB, false)
    d.addEventListener('click', copyStringToClipboardC, false)
    e.addEventListener('click', copyStringToClipboardD, false)
    f.addEventListener('click', copyStringToClipboardE, false)

//Event Payloads
var trackPayloadVar = document.getElementById('trackCopyPayload');
var identifyPayloadVar = document.getElementById('identifyCopyPayload');
var pagePayloadVar = document.getElementById('pageCopyPayload');
var groupPayloadVar = document.getElementById('groupCopyPayload');
var aliasPayloadVar = document.getElementById('aliasCopyPayload');

trackPayloadVar.addEventListener('click', copyStringToClipboardTrackPayload, false);
identifyPayloadVar.addEventListener('click', copyStringToClipboardIdentifyPayload, false);
pagePayloadVar.addEventListener('click', copyStringToClipboardPagePayload, false);
groupPayloadVar.addEventListener('click', copyStringToClipboardGroupPayload, false);
aliasPayloadVar.addEventListener('click', copyStringToClipboardAliasPayload, false);
});

document.addEventListener("DOMContentLoaded", function(event){
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

document.addEventListener("DOMContentLoaded", function(event){
document.getElementById("newsButton").addEventListener("click", openPage, false);

function openPage(){
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById('News').style.display = "block";

  document.getElementById("newsButton").click();
}
});

