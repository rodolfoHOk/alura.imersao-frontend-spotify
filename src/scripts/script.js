function onClickDropDownButton() {
  document.getElementById('add_playlist_dropdown')
    .classList.toggle('show-dropdown-content');
}

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');
const resultList = document.getElementById('result-list');

const baseArtistCard = document.getElementById('base-artist-card');

document.addEventListener('input', () => {
  const searchTerm = searchInput.value;
  if (searchTerm === '') {
    resultPlaylists.classList.remove('hidden');
    resultArtist.classList.add('hidden');
    return;
  }

  requestApi(searchTerm);
});

function requestApi(searchTerm) {
  let url;
  if (searchTerm.trim() === "todos") {
    url = `http://localhost:3000/artists`;
  } else {
    url = `http://localhost:3000/artists?name=${searchTerm}`;
  }
  fetch(url)
    .then(response => response.json())
    .then(result => displayResults(result));
}

function displayResults(result) {
  resultPlaylists.classList.add('hidden');
  const artistName = baseArtistCard.querySelector('#artist-name');
  const artistImage = baseArtistCard.querySelector('#artist-img');
  const artistCategory = baseArtistCard.querySelector('#artist-category');
  
  let index = 0;
  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
    artistCategory.innerText = element.genre;
    const newCard = baseArtistCard;
    if (index == 0) {
      resultList.innerHTML = newCard.outerHTML;
    } else {
      resultList.innerHTML = resultList.innerHTML + newCard.outerHTML;
    }
    index++;
  });

  resultArtist.classList.remove("hidden");
}
