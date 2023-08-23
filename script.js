//Select All Filter buttons and filterable_card
const filterButton = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
//Define the filter function
const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // Iterate over each filterable card

  filterableCards.forEach((card) => {
    //Add "hide" class to hide the card initially
    card.classList.add("hide");

    //check if the card matches the selected filter or "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

// Add click Event listener to each filter button
filterButton.forEach((button) => button.addEventListener("click", filterCards));
