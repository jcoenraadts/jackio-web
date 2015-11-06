var firstGet = true;
//var url = "http://localhost:5299/api/jack/all";
var url = "http://api.jack.io/api/jack/all";

var vm = {
    jackDevices: ko.observableArray()
};

initViewModel();

setInterval(function () {
    getJackDeviceData();
}, 30000);

function initViewModel() {
    //get the data
    getJackDeviceData();
};

function getJackDeviceData() {
    $.ajax({
        url: url,
        success: ajaxSuccess,            
        fail: ajaxFail
    });
};

function ajaxSuccess(data) {
    vm.jackDevices(data);
    if (firstGet) {
        firstGet = false;
        ko.applyBindings(vm);
    };
};

function ajaxFail(data) {
    console.log("AJAX Failed, trying new url");
    url = "http://api.jack.io/api/jack/all";
};
