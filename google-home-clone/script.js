const clearBtn = document.querySelector(".clear-btn");
const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keyup", function() {
    if(searchBar.value && clearBtn.style.visibility != "visible"){
        clearBtn.style.visibility = "visible"
    } else if(!searchBar.value) {
        clearBtn.style.visibility = "hidden"
    }
});

clearBtn.addEventListener("click", function() {
    searchBar.value = "";
    clearBtn.style.visibility = "hidden";
});

var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Logo = {
    setImage: function (mode) {
        if(mode === "dark") {
            document.querySelector(".logo-image").src = "images/logo-white.png";
        } else {
            document.querySelector(".logo-image").src = "images/logo.png";
        }
    }
}

var Header = {
    setButtonFontColor: function (color) {
        document.querySelector(".dark-light-btn").style.color = color;
    },

    setButtonBackgroundColor: function (color) {
        document.querySelector(".dark-light-btn").style.backgroundColor = color;
    },

    setLinkColor: function (color) {
        var links = document.querySelectorAll("header a");

        for(i = 0; i < links.length; i++) {
            links[i].style.color = color;
        }
    },

    setBtnColor: function (color) {
        document.querySelector(".google-app").style.color = color;
    }
}

var AdditionalBox = {
    setBoxBackgroundColor: function (color) {
        var links = document.querySelectorAll(".additional-box a");

        for(i = 0; i < links.length; i++) {
            links[i].style.backgroundColor = color;
        }
    },

    setBoxFontColor: function (color) {
        var links = document.querySelectorAll(".additional-box a");

        for(i = 0; i < links.length; i++) {
            links[i].style.color = color;
        }
    }
}

var Footer = {
    setBackgroundColor: function (color) {
        document.querySelector("footer").style.backgroundColor = color;
    },

    setCountryInfoColor: function (color) {
        document.querySelector(".country-info").style.color = color;
    },

    setInstructionColor: function (color) {
        var links = document.querySelectorAll(".instruction a");

        for(i = 0; i < links.length; i++) {
            links[i].style.color = color;
        }
    }
}

function darkLightHandler(self) { // 사진, 글자색 교체
    if(self.value === "dark") {
        Body.setBackgroundColor("rgb(50,54,57)");
        Logo.setImage(self.value);
        Header.setButtonFontColor("white");
        Header.setButtonBackgroundColor("rgb(62, 67, 71)");
        Header.setLinkColor("white");
        Header.setBtnColor("white");
        AdditionalBox.setBoxBackgroundColor("rgb(62, 67, 71)");
        AdditionalBox.setBoxFontColor("white");
        Footer.setBackgroundColor("rgb(62, 67, 71)");
        Footer.setCountryInfoColor("white");
        Footer.setInstructionColor("white");
        self.value = "light";
    } else if(self.value === "light") {
        Body.setBackgroundColor("white");
        Logo.setImage(self.value);
        Header.setButtonFontColor("black");
        Header.setButtonBackgroundColor("rgb(248,249,250)");
        Header.setLinkColor("black");
        Header.setBtnColor("rgb(95,99,104)");
        AdditionalBox.setBoxBackgroundColor("rgb(248,249,250)");
        AdditionalBox.setBoxFontColor("black");
        Footer.setBackgroundColor("rgb(242,242,242)");
        Footer.setCountryInfoColor("rgb(138,138,138)");
        Footer.setInstructionColor("rgb(138,138,138)");
        self.value = "dark";
    }
}