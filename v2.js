

const facebookOpen = document.getElementById("report-facebook");
// getElementById: Finds one specific element using its unique id attribute.
//getElementsByClassName: Finds all elements that share the same class name.
//getElementsByName: Finds all elements that share the same name attribute (mostly used for form inputs).
//getElementsByTagName: Finds all elements of a specific HTML tag type (like all <h1> or <p> tags).

function facebookLink() {
    // facebookLink() function, the parentheses are empty because the function doesn't need any outside information to do its job
   window.open("https://www.facebook.com/help/contact/209046679279097", "_blank");
    // chrome.tabs.create({ url: "https://www.facebook.com/help/contact/209046679279097"});
    // built-in messenger system Google created so your extension can tell the browser, "Hey Chrome, go open a new tab for me."
}
facebookOpen.addEventListener("click", facebookLink);



const reportButtons = document.querySelectorAll(".report-btn");
// the script first needs to find the right HTML elements = JavaScript uses CSS Selectors to do this
// . means "look for a class name.
// #submit-form" (ID Selector): The hashtag # means "look for a unique ID.
// "button" (Element Selector) : looks for element

// QUERY METHODS 
// document.querySelector()	Finds only the very first element that matches the selector.
// document.querySelectorAll()	Finds every single element that matches the selector.

function reportClick(event) {
    // JavaScript is looping through a list of multiple data-link(s). 
    // It needs the event variable as a placeholder to hold "the link I am looking at right now."
    const targetUrl = event.currentTarget.getAttribute("data-link");
    //event: info about the event - the action
    //currentTarget: just chose this specific one 
    //event.currentTarget - together
    //get Attribute: to grab specific value of specific attribute
    if(targetUrl) {
        window.open(targetUrl, "_blank");
    }
}

// reportOpen.addEventListener("click", reportClick);

reportButtons.forEach(function(event1) {
    event1.addEventListener("click", reportClick);
});
