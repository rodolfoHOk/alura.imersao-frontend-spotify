function onClickDropDownButton() {
  document.getElementById('add_playlist_dropdown')
    .classList.toggle('show-dropdown-content');
}

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylists = document.getElementById('result-playlists');

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
  const url = `http://localhost:3000/artists?name=${searchTerm}`;
  fetch(url)
    .then(response => response.json())
    .then(result => displayResults(result));
}

function displayResults(result) {
  resultPlaylists.classList.add('hidden');
  const artistName = document.getElementById('artist-name');
  const artistImage = document.getElementById('artist-img');
  const artistCategory = document.getElementById('artist-category');
  
  result.forEach(element => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
    artistCategory.innerText = element.genre;
  });

  resultArtist.classList.remove("hidden");
}
