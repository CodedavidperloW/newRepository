const keyboard = {
    elements: {
        main:null,              //the keyboard
        keysContainer: null,    //the keys
        keys: []                //the buttons
    },

    eventHandlers: {            //callback functions
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",              //current value of keyboard
        capsLock: false,        //code tells keyboard if it is in caps lock or not
    },


    init(){
        //Creates main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        //setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");

    },

    _createKeys(){


    },

    _triggerEvent(handlerName){
        console.log("Event Triggered! Event Name: "+ handlerName);
    }

    _toggleCapsLock(){
        console.log("Caps Lock Toggled!");
    }

    open(initialValue, oninput, onclose){

    }

    close(){

    }
};

window.addEventListener("DOMContentLoaded", function (){
    keyboard.init();
})





}