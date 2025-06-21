var i = 0;
var id = 0;
var isLoading = false;

function move() {
    if (isLoading) {
        return;
    }

    const x = document.getElementById("num").value.trim();
    if (x === "" || isNaN(x)) {
        Swal.fire({
            icon: 'warning',
            title: 'hold on there bud',
            text: '🧠 enter a number so I can read your mind',
        });
        return;
    }

    if (id !== 0) {
        clearInterval(id);
        document.getElementById("readingTheMind").innerHTML = "";
    }

    document.getElementById("progressBarBox").style.display = "block";
    i = 1;
    var elem = document.getElementById("loadingBar")
    var width = 1;
    var id = setInterval(frame, 60);
    isLoading = true;
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            id = 0;
            isLoading = false;

            const explosion = document.getElementById("explosion");
            explosion.style.display = "block";

            setTimeout(() => {
                explosion.style.display = "none";
            }, 4000);
        } 
        else {
            width++;
            if (width == 2){
                document.getElementById("readingTheMind").innerHTML = "READING YOUR MIND RIGHT NOW..."
            }
            if (width == 20){
                document.getElementById("readingTheMind").innerHTML = "CONNECTING TO THE BRAIN VIA BLUETOOTH"
            }
            if (width == 50){   
                document.getElementById("readingTheMind").innerHTML = "ANALYZING THE PATTERNS OF THE BRAIN.."
            }
            if (width == 75){
                document.getElementById("readingTheMind").innerHTML = "CALCULATING 6.38E+32194382948193 POSSIBLE COMBINATIONS.."
            }
            if (width == 100){
                document.getElementById("readingTheMind").innerHTML = `YOU WERE THINKING OF THE NUMBER ${x}!!! 
                                                                        <img src="assets/exploding.png" width="20px">
                                                                        <img src="assets/thinking.png" width="20px">
                                                                        <img src="assets/surprised.png" width="20px">`
            }
            elem.style.width = width + "%";
        }
    }
}