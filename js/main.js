const showAndHiddenEle = (eleForHidden, eleStatusCB = false) => {
    const eleStatus = eleForHidden.dataset.show === 'true';
    eleForHidden.dataset.show = !eleStatus;
    eleStatusCB &&
        eleStatusCB(eleStatus);
};

const menuIconHeader = document.querySelector("header > nav > .menu-icon");
const menu = document.querySelector("header > nav > .menu");
const menulinks = document.querySelectorAll(".menu .nav ul li");
const menuConfig = document.querySelectorAll(".menu .config ul li");
const menuSocial = document.querySelectorAll(".menu .social ul li");

const anim = (eles, status, ele, dely=0, time=0.4) => {

    if (eles) {
        eles.forEach((link, i) => {
            if (!status) {
                link.style.animation = `translate-link ${time}s forwards ${i * dely}s`;
            } else {
                link.style.animation = null;
            }
        });
    } else {
        if (!status) {
            ele.style.animation = `translate-link ${time}s forwards ${dely}s`;
        } else {
            ele.style.animation = null;
        }

        
    }

};

menuIconHeader.addEventListener('click', function () {
    showAndHiddenEle(menu, status => {
        this.dataset.open = !status;
        anim(menulinks, status, false, 0.1);
        anim(menuConfig, status, false, 0.1);
        anim(menuSocial, status, false, 0.1);

    });

});


const menuOpenSearch = document.querySelector(".search > button.settimg-config-icon");
const menuIconSearch = document.querySelector(".menu-settimg-config .icon-close .menu-icon");
const menuSearch = document.querySelector(".menu-settimg-config");

const iconClose = document.querySelector("div.menu-settimg-config > .icon-close");
const flBoxLocation = document.querySelector("div.menu-settimg-config > .location");
const flBoxCounters = document.querySelectorAll("div.menu-settimg-config > .counters");
const flBoxDates = document.querySelector("div.menu-settimg-config > .dates");
const butFindTour = document.querySelector("div.menu-settimg-config > .find-tour");

menuOpenSearch.addEventListener('click', _ => {
    showAndHiddenEle(menuSearch, status => {
        anim(false, status, flBoxLocation);
        anim(false, status, flBoxCounters[0], 0.1, .5);
        anim(false, status, flBoxCounters[1], 0.2, .5);
        anim(false, status, flBoxDates, 0.3, .5);
        anim(false, status, butFindTour, 0.4, .5);
    });
});

menuIconSearch.addEventListener('click', _ => {
    showAndHiddenEle(menuSearch, status => {
        anim(false, status, flBoxLocation);
        anim(false, status, flBoxCounters[0], 0.1, .5);
        anim(false, status, flBoxCounters[1], 0.2, .5);
        anim(false, status, flBoxDates, 0.3, .5);
        anim(false, status, butFindTour, 0.4, .5);
    });
});