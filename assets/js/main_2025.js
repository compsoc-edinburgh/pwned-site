function bytes(length) {
    let hexLine = '';
    for (let i = 0; i < length; i++) {
        hexLine += '0x' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') + ' ';
    }
    return hexLine;
}

var byte_count = 0;

document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});

    VANTA.TRUNK({
        el: "#particles-js",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        spacing: 3.00,
        chaos: 5,
        backgroundColor: 0x292a2d,
        color: 0x996D02,
    });

    var overflow = document.getElementById("overflow");

    window.addEventListener('scroll', function () {
        setTimeout(() => {
            memLeak(5);
        }, !1);
    });


    function memLeak(num) {
        if (window.scrollY + window.innerHeight > document.body.offsetHeight - 100) {
            if (byte_count >= 100) {
                document.getElementById("segfault").style.visibility = "visible";
                return;
            }
            byte_count += 1;
            for (var i = 0; i < num; i++) {
                overflow.innerHTML += bytes(25);
            }
        }
    }

}, !1);
