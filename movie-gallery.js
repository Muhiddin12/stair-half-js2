let urlForMovieGallery = `https://api.themoviedb.org/3/tv/on_the_air?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1`
fetch(urlForMovieGallery)
  .then((value) => value.json())
  .then((response) => {
    console.log(response)
    let galleryCont = document.querySelector('.gallery-cont')
    let arrMovies = response.results.slice(0, 12);
    arrMovies.map((item) => {
      let galleryItem = document.createElement('div')
      galleryItem.className = 'gallery-item'
      let galleryItemCont = document.createElement('div')
      galleryItemCont.className = 'galley-item-cont'
      let galleryImage = document.createElement('div')
      galleryImage.className = 'gallery-image'
      let imageG = document.createElement('img')
      imageG.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`
      let galleryText = document.createElement('div')
      galleryText.className = 'gallery-text'
      let galleryRating = document.createElement('div')
      galleryRating.className = 'gallery-rating'
      let icon = document.createElement('i')
      icon.className = 'fa-solid fa-star'
      let ratingGalleryP = document.createElement('p')
      ratingGalleryP.textContent = item.vote_average;
      let galleryName = document.createElement('div')
      galleryName.className = 'gallery-name'
      let galleryNameh2 = document.createElement('h2')
      galleryNameh2.textContent = item.name;
      galleryName.appendChild(galleryNameh2)
      galleryRating.appendChild(icon)
      galleryRating.appendChild(ratingGalleryP)
      galleryText.appendChild(galleryRating)
      galleryText.appendChild(galleryName)
      galleryImage.appendChild(imageG)
      galleryItemCont.appendChild(galleryImage)
      galleryItemCont.appendChild(galleryText)
      galleryItem.appendChild(galleryItemCont)
      galleryCont.appendChild(galleryItem)
    })
  })