const message_cnt = document.getElementById('message');

message_cnt.addEventListener('click', () =>{
    alert('Le Service Contact va être disponible prochînement !! ')
})


const nav = document.querySelector('#home0')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navani')
    } else {
        nav.classList.remove('navani')
    }
}

