'use strict';

// function main() {
 
// }

// $(main);

function createListItems(itemName) {
  return `<li>
            <span class="shopping-item">${itemName}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`;
}

function handleClick() {
  const addItemForm = $('#js-shopping-list-form');
  // console.log(addItemForm);
 
  $('form').submit(event => {
    // prevent default behavior
    event.preventDefault();
 
    // capture the input's value that is given by user
    const inputValue = $('.js-shopping-list-entry').val();
    // console.log(inputValue);

    // <ul> container element for list items to get created into
    let listContainer = $('.shopping-list');
    // Factory function that creates a list item based on the inputValue
    const listItem = createListItems(inputValue);

    // append the listItem to the DOM's ul: listContainer
    $(listContainer).append(listItem);
    // clear the submission form input box
    $('.js-shopping-list-entry').val('');
  });
}

$(handleClick);