function webScraper(link, source) {
    var XMLReq = new XMLHttpRequest();

    XMLReq.open( "GET", link, true);
    XMLReq.onreadystatechange = function() {
        if(XMLReq.readyState == 4 && XMLReq.status == 200) {
            html = new DOMParser().parseFromString(XMLReq.responseText, 'text/html');
            
            if(source == "boxnovel") {

            }
        }
    }
    XMLReq.send();
}