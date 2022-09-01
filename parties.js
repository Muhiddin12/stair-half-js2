let airingMain = document.querySelector('.airing-main')
let airingUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1'
fetch(airingUrl)
    .then((value) => value.json())
    .then((anotherAiring) => {
        console.log(anotherAiring)
        let airingArray = anotherAiring.results.slice(0, 10)
        let airingCont = document.createElement('div')
        airingCont.className = 'airing-cont';
        for (let i = 0; i < airingArray.length; i++) {
            console.log(airingArray)

            let airingItem = document.createElement('div')
            airingItem.className = 'airing-item'
            airingItem.id = `friend${i+1}`;
            let airingItemImage = document.createElement('div')
            airingItemImage.className = 'airing-item-image'
            let itemImage = document.createElement('img')
            itemImage.src = `https://image.tmdb.org/t/p/original/${airingArray[i].poster_path}`
            let airingItemBody = document.createElement('div')
            airingItemBody.className = 'airing-item-body'
            let h2Body = document.createElement('h2')
            h2Body.textContent = airingArray[i].original_title;
            let divAiring = document.createElement('div')
            divAiring.className = 'airingDiv'
            let viewAiring = document.createElement('p')
            viewAiring.id = `view`;
            viewAiring.textContent = airingArray[i].overview.slice(0, 200);
            let pBody = document.createElement('p')
            pBody.textContent = airingArray[i].release_date;
            let spanBody = document.createElement('span')
            spanBody.textContent = `Rating : ${airingArray[i].vote_average}`;
            divAiring.appendChild(pBody)
            divAiring.appendChild(spanBody)
            airingItemBody.appendChild(h2Body)
            airingItemBody.appendChild(divAiring)
            airingItemBody.appendChild(viewAiring)
            airingItemImage.appendChild(itemImage)
            airingItem.appendChild(airingItemImage)
            airingItem.appendChild(airingItemBody)
            airingCont.appendChild(airingItem)
            airingMain.appendChild(airingCont)
        }
    }
    )

        // scroll   Arrow Button

        const scrollBtn = document.querySelector('.arrow');

        if(scrollBtn) {
            window.addEventListener('scroll', () => {
                if(pageYOffset > (window.innerHeight * 1.2)) {
                    scrollBtn.style.display = 'flex';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        }
        

                //   Buttton Moon
        
        let moonIcon = document.querySelector('.iconMoonInTwoF img');
        
        moonIcon.onclick = function(){
            document.body.classList.toggle('dark-theme');
            if(document.body.classList.contains('dark-theme')){
                moonIcon.src = './image/sun.png';
            } else {
                moonIcon.src = './image/moon.png';
            }
        }

// Mobile version Hamburger

let menu = document.querySelector('#side-menu')
let sideBar = document.querySelector('.first-section')
let sidebarCount = 0;

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  sideBar.classList.toggle('active');
  if(sidebarCount === 0) {
    sidebarCount++
    document.querySelector('.navbarF').style.backgroundColor = 'var(--first-color)';
  } else {
    sidebarCount--
    document.querySelector('.navbarF').style.backgroundColor = `var(--navColor-color)`;
  }
  
};

          //   Mobile  Moon
let moonIconT = document.querySelector('.iconMoonInTwoT img');

moonIconT.onclick = function(){
document.body.classList.toggle('dark-theme');
if(document.body.classList.contains('dark-theme')){
moonIconT.src = './image/sun.png';
} else {
moonIconT.src = './image/moon.png';
}
}
        