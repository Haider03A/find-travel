const showAndHiddenEle = (eleForHidden, eleStatusCB) => {
    const eleStatus = eleForHidden.dataset.show === 'true';
    eleForHidden.dataset.show = !eleStatus;
    eleStatusCB(eleStatus)
};

const menuIcon = document.querySelector("header > nav > .menu-icon");
const menu = document.querySelector("header > nav > .menu");
const menulinks = document.querySelectorAll(".menu .nav ul li");
const menuConfig = document.querySelectorAll(".menu .config ul li");
const menuSocial = document.querySelectorAll(".menu .social ul li");

menuIcon.addEventListener('click', function () {
    showAndHiddenEle(menu, status => {
        this.dataset.open = !status;
        const anim = eles => {
            eles.forEach((link, i) => {
                if (!status) {
                    link.style.animation = `translate-link .4s forwards ${i * 0.1}s`;
                } else {
                    link.style.animation = null;
                }
            });
        };
        anim(menulinks);
        anim(menuConfig);
        anim(menuSocial);

    });

});