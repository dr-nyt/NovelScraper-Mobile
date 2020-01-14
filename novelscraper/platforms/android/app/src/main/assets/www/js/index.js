var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log(getNovelFromLibrary('novelLink'));
        if(getNovelFromLibrary('novelLink') == undefined) {
            console.log('nope');
        }
    }
};

app.initialize();

function testWebScrape() {
    var XMLReq = new XMLHttpRequest();

    XMLReq.open( "GET", "https://boxnovel.com/", true)
    XMLReq.onreadystatechange = function() {
        if(XMLReq.readyState == 4 && XMLReq.status == 200) {
            var html = new DOMParser().parseFromString(XMLReq.responseText, 'text/html');
            // console.log(html.getElementsByClassName('col-xs-12 col-md-6')[0].innerHTML);
        }
    }
    XMLReq.send();
}