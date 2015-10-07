﻿var firstGet = true;

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
        url: "http://localhost:5299/api/jack/all",
        success: function (data) {
            vm.jackDevices(data);
            if (firstGet) {
                firstGet = false;
                ko.applyBindings(vm);
            };            
        }
    });
};