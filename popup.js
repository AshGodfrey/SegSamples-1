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

  //By default the JavaScript tab is open as its the most commonly used tab
  document.getElementById('JavaScript').style.display = "block";

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
  var androidIdentify = document.getElementById('androidIdentifyCopy');
  var androidTrack = document.getElementById('androidTrackCopy');
  var androidGroup = document.getElementById('androidGroupCopy');
  var androidAlias = document.getElementById('androidAliasCopy');

  androidScreen.addEventListener('click', () => copyStringToClipboard("androidScreenEvent"), false);
  androidIdentify.addEventListener('click', () => copyStringToClipboard("androidIdentifyEvent"), false);
  androidTrack.addEventListener('click', () => copyStringToClipboard("androidTrackEvent"), false);
  androidGroup.addEventListener('click', () => copyStringToClipboard("androidGroupEvent"), false);
  androidAlias.addEventListener('click', () => copyStringToClipboard("androidAliasEvent"), false);

  //Payload Examples
  var androidPayloadScreen = document.getElementById('androidScreenCopyPayload');
  var androidPayloadIdentify = document.getElementById('androidIdentifyCopyPayload');
  var androidPayloadTrack = document.getElementById('androidTrackCopyPayload');

  androidPayloadScreen.addEventListener('click', () => copyStringToClipboard("androidScreenPayload"), false);
  androidPayloadIdentify.addEventListener('click', () => copyStringToClipboard("androidIdentifyPayload"), false);
  androidPayloadTrack.addEventListener('click', () => copyStringToClipboard("androidTrackPayload"), false);


  //************iOS************\\
  //Event Examples
  var iosScreen = document.getElementById('iosScreenCopy');
  var iosIdentify = document.getElementById('iosIdentifyCopy');
  var iosTrack = document.getElementById('iosTrackCopy');
  var iosGroup = document.getElementById('iosGroupCopy');
  var iosAlias = document.getElementById('iosAliasCopy');

  iosScreen.addEventListener('click', () => copyStringToClipboard("iosScreenEvent"), false);
  iosIdentify.addEventListener('click', () => copyStringToClipboard("iosIdentifyEvent"), false);
  iosTrack.addEventListener('click', () => copyStringToClipboard("iosTrackEvent"), false);
  iosGroup.addEventListener('click', () => copyStringToClipboard("iosGroupEvent"), false);
  iosAlias.addEventListener('click', () => copyStringToClipboard("iosAliasEvent"), false);

  //************Node.js************\\
  //Event Examples
  var nodejsPage = document.getElementById('nodeJsPageCopy');
  var nodejsIdentify = document.getElementById('nodeJsIdentifyCopy');
  var nodejsTrack = document.getElementById('nodeJsTrackCopy');
  var nodejsGroup = document.getElementById('nodeJsGroupCopy');
  var nodejsAlias = document.getElementById('nodeJsAliasCopy');

  nodejsPage.addEventListener('click', () => copyStringToClipboard("nodejsPageEvent"), false);
  nodejsIdentify.addEventListener('click', () => copyStringToClipboard("nodejsIdentifyEvent"), false);
  nodejsTrack.addEventListener('click', () => copyStringToClipboard("nodejsTrackEvent"), false);
  nodejsGroup.addEventListener('click', () => copyStringToClipboard("nodejsGroupEvent"), false);
  nodejsAlias.addEventListener('click', () => copyStringToClipboard("nodejsAliasEvent"), false);

  //************Java************\\
  //Event Examples
  var javaPage = document.getElementById('javaPageCopy');
  var javaScreen = document.getElementById('javaScreenCopy');
  var javaIdentify = document.getElementById('javaIdentifyCopy');
  var javaTrack = document.getElementById('javaTrackCopy');
  var javaGroup = document.getElementById('javaGroupCopy');
  var javaAlias = document.getElementById('javaAliasCopy');


  javaPage.addEventListener('click', () => copyStringToClipboard("javaPageEvent"), false);
  javaScreen.addEventListener('click', () => copyStringToClipboard("javaScreenEvent"), false);
  javaIdentify.addEventListener('click', () => copyStringToClipboard("javaIdentifyEvent"), false);
  javaTrack.addEventListener('click', () => copyStringToClipboard("javaTrackEvent"), false);
  javaGroup.addEventListener('click', () => copyStringToClipboard("javaGroupEvent"), false);
  javaAlias.addEventListener('click', () => copyStringToClipboard("javaAliasEvent"), false);
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
    document.getElementById('JavaScript').style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("mobileButton").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('Mobile').style.display = "block";
    document.getElementById("mobileButton").click();
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("server").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('Server').style.display = "block";
    document.getElementById("server").click();
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("usefulLinks").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('links').style.display = "block";

    document.getElementById("usefulLinks").click();
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("q3button").addEventListener("click", openPage, false);

  function openPage() {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById('q3').style.display = "block";
  }
});


//Search box logic
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("searchbar").addEventListener("keyup", search_events);

  function search_events() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('events');
    let y = document.getElementsByClassName('linkheader');

    if (input.length !== 0) {
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
      }
      for (i = 0; i < x.length; i++) {
        if (!x[i].innerText.toLowerCase().includes(input)) {
          x[i].style.display = "none";
        }
      }
    } else {
      for (a = 0; a < y.length; a++) {
        y[a].style.display = "block";
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    }
  }
});

//Dropdown logic mobile
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("switch-field").addEventListener("change", radioChanged);

  function radioChanged() {
    let selectedValue = document.querySelector('input[name="switch-one"]:checked').value;
    if (selectedValue === 'android') {
      document.getElementById('ios-display').style.display = 'none';
      document.getElementById('android-display').style.display = 'initial';
    }
    else if (selectedValue === 'ios') {
      document.getElementById('android-display').style.display = 'none';
      document.getElementById('ios-display').style.display = 'initial';
    }
  }
});

//Dropdown logic server
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("switch-fieldServer").addEventListener("change", radioChanged);

  function radioChanged() {
    let selectedValue = document.querySelector('input[name="switch-a"]:checked').value;
    if (selectedValue === 'java') {
      document.getElementById('nodejs-display').style.display = 'none';
      document.getElementById('java-display').style.display = 'initial';
    }
    else if (selectedValue === 'nodejs') {
      document.getElementById('java-display').style.display = 'none';
      document.getElementById('nodejs-display').style.display = 'initial';
    }
  }
});

//Event Builder
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("eventBuilder").addEventListener("click", eventBuilder);

  function eventBuilder() {
    let eventNameTextBox = document.getElementById('eventName');
    let eventName = document.getElementById('eventName').value
    let actualEvent = document.getElementById('muhCode').value
    let x = document.querySelector("#muhCode > code")
    let eventDropDown = document.getElementById('dropDownSelectEventType').value
    eventDropDown = eventDropDown.toLowerCase();

    let properties = document.getElementById('container')
    numberOfPropertie = properties.children.length;
    var props = new Array();

    for (i = 0; i < numberOfPropertie; i++) {
      if (properties.children[i].value != null) {
        props.push(properties.children[i].value);
      }
    }

    var filteredProps = props.filter(Boolean);
    //analytics.page("Home", {prop1: "test1", prop2:"test2"});
    //analytics.identify("97980cfea0067", { name: "Peter Gibbons", email: "peter@initech.com"});
    //analytics.track("Registered", { plan: "Pro Annual", accountType: "Facebook" });
    //analytics.group("0e8c78ea9d97a7b8185e8632", { name: "Initech", industry: "Technology"});
    //analytics.alias("507f191e81");
    let input = document.getElementById('dropDownSelectEventType').value
    input = input.toLowerCase();

    let messagePage = "analytics.page(\"" + eventName + "\"" + ", \{";
    let messagePageNoProps = "analytics.page(\"" + eventName + "\");";
    let messageIdentify = "analytics.identify(\"" + eventName + "\"" + ", \{";
    let messageIdentifyNoTraits = "analytics.identify(\"" + eventName + "\");";
    let messageTrack = "analytics.track(\"" + eventName + "\"" + ", \{";
    let messageTrackNoProperties = "analytics.track(\"" + eventName + "\");";
    let messageGroup = "analytics.group(\"" + eventName + "\"" + ", \{";
    let messageGroupNoTraits = "analytics.group(\"" + eventName + "\");";
    let messageAlias = "analytics.alias(\"" + eventName + "\"";

    if (input == "page") {
      if (filteredProps.length == 0) {
        x.innerHTML = messagePageNoProps;
      }
      else if (filteredProps.length > 0) {
        for (let index = 0; index < filteredProps.length; index += 2) {
          messagePage += ` ${filteredProps[index]}:"${filteredProps[index + 1]}",`;
          submessage = messagePage.substring(0, messagePage.length - 1)
          x.innerHTML = submessage + "});";
        }
      }
    }
    else if (input == "identify") {
      if (filteredProps.length == 0) {
        x.innerHTML = messageIdentifyNoTraits;
      }
      for (let index = 0; index < filteredProps.length; index += 2) {
        messageIdentify += ` ${filteredProps[index]}:"${filteredProps[index + 1]}",`;
        submessage = messageIdentify.substring(0, messageIdentify.length - 1)
        x.innerHTML = submessage + "});";
      }
    }
    else if (input == "track") {
      if (eventName == "") {
        eventNameTextBox.style.borderColor = "red";
      }
      else if (eventName != "") {
        x.innerHTML = messageTrackNoProperties;
        eventNameTextBox.style.borderColor = "unset";
      }
      for (let index = 0; index < filteredProps.length; index += 2) {
        messageTrack += ` ${filteredProps[index]}:"${filteredProps[index + 1]}",`;
        submessage = messageTrack.substring(0, messageTrack.length - 1)
        x.innerHTML = submessage + "});";
      }
    }
    else if (input == "group") {
      if (eventName == "") {
        eventNameTextBox.style.borderColor = "red";
      }
      else if (eventName != "") {
        x.innerHTML = messageGroupNoTraits;
        eventNameTextBox.style.borderColor = "unset";
      }
      for (let index = 0; index < filteredProps.length; index += 2) {
        messageGroup += ` ${filteredProps[index]}:"${filteredProps[index + 1]}",`;
        submessage = messageGroup.substring(0, messageGroup.length - 1)
        x.innerHTML = submessage + "});";
      }
    }
    else if (input == "alias") {
      if (eventName == "") {
        eventNameTextBox.style.borderColor = "red";
      }
      else if (eventName != "") {
        eventNameTextBox.style.borderColor = "unset";
        x.innerHTML = messageGroupNoTraits;
        x.innerHTML = messageAlias + "});";
      }
    }
  }

});

//Event Property Builder
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("fillDetail").addEventListener("click", addFields);

  function addFields() {
    var number = document.getElementById("member").value;
    var container = document.getElementById("container");
    let dropdownVal = document.getElementById('dropDownSelectEventType').value
    container.style.display = "inline-block";
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    for (i = 0; i < number; i++) {
      var input = document.createElement("input");
      var input1 = document.createElement("input");
      input.type = "text";
      input1.type = "text";
      input.placeholder = "name";
      input1.placeholder = "value";
      container.appendChild(input);
      container.appendChild(input1);
      container.appendChild(document.createElement("br"));
    }
  }
});

//Dropdown logic
document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("dropDownSelectEventType").addEventListener("change", search_events);

  function search_events() {
    let input = document.getElementById('dropDownSelectEventType').value
    let eventNameTextBox = document.getElementById('eventName');
    input = input.toLowerCase();
    let properties = document.getElementById('container')

    if (input == "identify" || input == "group") {
      document.getElementById('member').placeholder = "Number of traits";
      document.getElementById('fillDetail').innerText = "Add Traits"
      document.getElementById('member').style.display = "inline-block";
      document.getElementById('fillDetail').style.display = "inline-block"
      eventNameTextBox.style.borderColor = "initial";

    }
    else if (input == "page" || input == "track") {
      document.getElementById('member').placeholder = "Number of properties";
      document.getElementById('fillDetail').innerText = "Add Properties"
      document.getElementById('member').style.display = "inline-block";
      document.getElementById('fillDetail').style.display = "inline-block"
      eventNameTextBox.style.borderColor = "initial";
    }
    else if (input == "alias") {
      document.getElementById('member').style.display = "none";
      document.getElementById('fillDetail').style.display = "none"
      eventNameTextBox.style.borderColor = "initial";
    }
    if (input == "page") {
      eventNameTextBox.placeholder = "Page name";
    }
    else if (input == "identify") {
      eventNameTextBox.placeholder = "User id"
    }
    else if (input == "track") {
      eventNameTextBox.placeholder = "Event name"
    }
    else if (input == "group") {
      eventNameTextBox.placeholder = "Group id"
    }
    else if (input == "alias") {
      eventNameTextBox.placeholder = "Previous id"
      properties.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("eventBuilderJsCopy").addEventListener("click", copyEventBuilderCode, false);

  let x = document.querySelector("#muhCode > code");

  function copyEventBuilderCode() {
    ss = x.innerText;

    copyStringToClipboard(ss);
  }

  function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
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
});