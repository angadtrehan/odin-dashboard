const menuExpand = document.querySelector("span.menu");
const bodyContainer = document.querySelector(".playground");
const dashMenu = document.querySelector(".dash-menu");
let expanded = true;

menuExpand.addEventListener('click', () => {
    console.log('Span was clicked');

    if (expanded) {
        bodyContainer.style.gridColumn = "1/3";
        dashMenu.style.display = "none";
        menuExpand.style.rotate = "180deg";
    } else {
        bodyContainer.style.gridColumn = "2/3";
        dashMenu.style.display = "";
        menuExpand.style.rotate = "0deg";
    }
    expanded = !expanded;
});