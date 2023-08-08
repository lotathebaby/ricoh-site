const openNav = document.querySelector('.nav-open');
const closeNav = document.querySelector('.nav-close');
const mobileNav = document.querySelector('nav');
const searchBox = document.querySelector('.searchBox')

openNav.addEventListener('click', () => {
    mobileNav.style.display = "block"
    closeNav.style.display = "block"
    openNav.style.display = "none"
    searchBox.style.marginTop = "4em"
})

console.log(openNav)

closeNav.addEventListener('click', () => {
    mobileNav.style.display = "none"
    closeNav.style.display = "none"
    openNav.style.display = "block"
    searchBox.style.marginTop = "-8em"
})



const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 30)}em`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}
