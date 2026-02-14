/* Chart */
new Chart(document.getElementById('loveChart'), {
    type: 'pie',
    data: {
        labels: ['You', 'Anyone Else'],
        datasets: [{
            data: [100, 0],
            backgroundColor: ['#ffffff', '#ff758c']
        }]
    },
    options: {
        plugins: {
            legend: { labels: { color: "white" } }
        }
    }
});

/* YES */
function acceptLove(){
    document.getElementById("successMessage").style.display="block";
}

/* NO Button */
const noBtn = document.getElementById("noBtn");
const proposalBox = document.getElementById("proposalBox");

function moveNoButton(){
    setTimeout(()=>{
        const maxX = proposalBox.clientWidth - noBtn.offsetWidth;
        const maxY = proposalBox.clientHeight - noBtn.offsetHeight;

        const randomX = Math.random()*maxX;
        const randomY = Math.random()*maxY;

        noBtn.style.left = randomX+"px";
        noBtn.style.top = randomY+"px";
    }, 200);
}

/* Desktop hover */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile touch */
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

/* Floating hearts */
setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="💖";
    heart.style.left=Math.random()*100+"%";
    heart.style.fontSize=(Math.random()*20+10)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),5000);
},500);

/* Autoplay fix for mobile */
document.addEventListener("click", ()=>{
    document.getElementById("bgMusic").play();
});

/* Floating mini hearts around hero */
setInterval(()=>{
    const heart = document.createElement("div");
    heart.innerHTML="💗";
    heart.style.position="absolute";
    heart.style.fontSize="20px";
    heart.style.left=Math.random()*100+"%";
    heart.style.top=Math.random()*100+"%";
    heart.style.opacity="0.7";
    heart.style.pointerEvents="none";
    document.querySelector(".hero").appendChild(heart);

    setTimeout(()=>heart.remove(),2000);
},800);
