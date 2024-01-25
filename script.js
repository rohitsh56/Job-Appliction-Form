
const locationSuggestions = ['Mumbai', 'Noida','New Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];

// Function to display location suggestions
function showSuggestions(input) {
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';

  if (input.trim() !== '') {
    suggestionsContainer.style.display = 'block';

    const filteredSuggestions = locationSuggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(input.toLowerCase())
    );

    filteredSuggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.textContent = suggestion;
      suggestionElement.addEventListener('click', () => {
        document.getElementById('location').value = suggestion;
        suggestionsContainer.style.display = 'none';
      });
      suggestionsContainer.appendChild(suggestionElement);
    });
  } else {
    suggestionsContainer.style.display = 'none';
  }
}

// Close suggestions when clicking outside the input field
document.addEventListener('click', (event) => {
  const suggestionsContainer = document.getElementById('suggestions');
  if (!event.target.matches('#location') && !event.target.matches('#suggestions div')) {
    suggestionsContainer.style.display = 'none';
    suggestionsContainer.innerHTML = '';
  }
});


