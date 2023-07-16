const fetchCharacter = async () => {
  const loadingMessage = document.getElementById('loadingMessage');
  const characterInfo = document.getElementById('characterInfo');

  // Display loading message
  loadingMessage.style.display = 'block';

  try {
    // Fetch data from SWAPI
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();

    // Get a random character from the response
    const randomCharacterIndex = Math.floor(Math.random() * data.results.length);
    const randomCharacter = data.results[randomCharacterIndex];

    // Update the character info on the DOM
    characterInfo.innerHTML = `
      <h2>${randomCharacter.name}</h2>
      <p>Height: ${randomCharacter.height}</p>
      <p>Gender: ${randomCharacter.gender}</p>
      <p>Birth Year: ${randomCharacter.birth_year}</p>
    `;

    // Hide the loading message
    loadingMessage.style.display = 'none';
  } catch (error) {
    console.error('Error fetching data:', error);
    loadingMessage.textContent = 'Error fetching data.';
  }
};

// Add event listener to the fetch button
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchCharacter);
