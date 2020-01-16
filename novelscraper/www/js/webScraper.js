// Gets the html from the link and returns it to the callback function
function webScraper(link, callback) {
    var XMLReq = new XMLHttpRequest();
    XMLReq.open( "GET", link, true);
    XMLReq.onreadystatechange = function() {
        if(XMLReq.readyState == 4 && XMLReq.status == 200) {
            html = new DOMParser().parseFromString(XMLReq.responseText, 'text/html');
            callback(html);
        }
    };
    XMLReq.send();
}