    let screenWidth = window.innerWidth;
    const tdImg = document.querySelectorAll("td#tdImg");
    const productImage = document.querySelectorAll("img#productImage");
    const features = document.querySelectorAll("td#features");
    
    function Allign(){

    if(screenWidth<300){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 0;
            productImage[i].style.width = 44 + "vw";
            productImage[i].style.height = 44 + "vw";
            features[i].style.width = 43 + "vw";
        }
    }
    else if(screenWidth<400){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 2 + "vw";
            productImage[i].style.width = 46 + "vw";
            productImage[i].style.height = 46 + "vw";
            features[i].style.width = 41 + "vw";
        }
    }
    else if(screenWidth<500){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 4 + "vw";
            productImage[i].style.width = 48 + "vw";
            productImage[i].style.height = 48 + "vw";
            features[i].style.width = 37 + "vw";
        }
    }
    else if(screenWidth<600){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 6 + "vw";
            productImage[i].style.width = 50 + "vw";
            productImage[i].style.height = 50 + "vw";
            features[i].style.width = 32 + "vw";
        }
    }
    else if(screenWidth<700){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 8 + "vw";
            productImage[i].style.width = 51 + "vw";
            productImage[i].style.height = 51 + "vw";
            features[i].style.width = 28 + "vw";
        }
    }
    else if(screenWidth<800){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 10 + "vw";
            productImage[i].style.width = 49 + "vw";
            productImage[i].style.height = 49 + "vw";
            features[i].style.width = 26.5 + "vw";
        }
    }
    else if(screenWidth<900){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 12 + "vw";
            productImage[i].style.width = 47 + "vw";
            productImage[i].style.height = 47 + "vw";
            features[i].style.width = 25 + "vw";
        }
    }
    else if(screenWidth<1000){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 14 + "vw";
            productImage[i].style.width = 45 + "vw";
            productImage[i].style.height = 45 + "vw";
            features[i].style.width = 23.5 + "vw";
        }
    }
    else if(screenWidth<1100){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 5 + "vw";
            productImage[i].style.width = 25 + "vw";
            productImage[i].style.height = 25 + "vw";
            features[i].style.width = 17.5 + "vw";
        }
    }
    else if(screenWidth<1200){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 5 + "vw";
            productImage[i].style.width = 25 + "vw";
            productImage[i].style.height = 25 + "vw";
            features[i].style.width = 17.75 + "vw";
        }
    }
    else if(screenWidth<1300){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 5 + "vw";
            productImage[i].style.width = 25 + "vw";
            productImage[i].style.height = 25 + "vw";
            features[i].style.width = 18 + "vw";
        }
    }
    else if(screenWidth<1400){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 5 + "vw";
            productImage[i].style.width = 25 + "vw";
            productImage[i].style.height = 25 + "vw";
            features[i].style.width = 18 + "vw";
        }
    }
    else if(screenWidth<1500){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 16.5 + "vw";
            productImage[i].style.height = 16.5 + "vw";
            features[i].style.width = 12 + "vw";
        }
    }
    else if(screenWidth<1600){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 16.5 + "vw";
            productImage[i].style.height = 16.5 + "vw";
            features[i].style.width = 12.25 + "vw";
        }
    }
    else if(screenWidth<1700){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 16.5 + "vw";
            productImage[i].style.height = 16.5 + "vw";
            features[i].style.width = 12.5 + "vw";
        }
    }
    else if(screenWidth<1800){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 17 + "vw";
            productImage[i].style.height = 17 + "vw";
            features[i].style.width = 12 + "vw";
        }
    }
    else if(screenWidth<1900){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 17 + "vw";
            productImage[i].style.height = 17 + "vw";
            features[i].style.width = 12.5 + "vw";
        }
    }
    else if(screenWidth<2000){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 17 + "vw";
            productImage[i].style.height = 17 + "vw";
            features[i].style.width = 12.5 + "vw";
        }
    }
    else if(screenWidth<2100){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 2 + "vw";
            productImage[i].style.width = 12.5 + "vw";
            productImage[i].style.height = 12.5 + "vw";
            features[i].style.width = 9.5 + "vw";
        }
    }
    else if(screenWidth<2200){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 12 + "vw";
            productImage[i].style.height = 12 + "vw";
            features[i].style.width = 9 + "vw";
        }
    }
    else if(screenWidth<2300){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3 + "vw";
            productImage[i].style.width = 12 + "vw";
            productImage[i].style.height = 12 + "vw";
            features[i].style.width = 9 + "vw";
        }
    }
    else if(screenWidth<2400){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 3.5 + "vw";
            productImage[i].style.width = 11.5 + "vw";
            productImage[i].style.height = 11.5 + "vw";
            features[i].style.width = 9 + "vw";
        }
    }
    else if(screenWidth<2500){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 4 + "vw";
            productImage[i].style.width = 11 + "vw";
            productImage[i].style.height = 11 + "vw";
            features[i].style.width = 9 + "vw";
        }
    }
    else if(screenWidth<2601){
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 4.5 + "vw";
            productImage[i].style.width = 11 + "vw";
            productImage[i].style.height = 11 + "vw";
            features[i].style.width = 8.5 + "vw";
        }
    }
    else{
        for (let i = 0; i < tdImg.length; i++) {
            tdImg[i].style.paddingLeft = 70 + "px";
            productImage[i].style.width = 330 + "px";
            productImage[i].style.height = 330 + "px";
            features[i].style.width = 230 + "px";
        }
    }
}

$(window).on("resize", function() {
    return Allign();
}).resize();

$(window).bind('resize', function (e) {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function () {
        this.location.reload(false); /* false to get page from cache */
    }, 100);
});





var id = null;
function myFunction() {
    var list = document.getElementById("list");
    var x = document.getElementById("list");
    if (x.style.display === "block") {
        document.addEventListener('click', function myFunction2(event) {
            const list = document.getElementById('list');
            if (!list.contains(event.target)) {
                list.style.display = 'none';
            }
        }
        );
    }
    else {
        var pos = -260;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos == 96) {
                clearInterval(id);
            } else {
                pos++;
                list.style.top = pos + 'px';
                list.style.display = "block";
            }
        }
    }
}