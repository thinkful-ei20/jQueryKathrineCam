'use strict';

/*
When a user selects one of the thumbnail images using the mouse or keyboard:
-that image should be displayed in the full-size image container at the top. 
Updating the image should also update its alt attribute. 
*/

// console.log('jqueryDrills.js OPERATIONAL');



function handleClick() {
  // click even that console logs the target img
  $('.thumbnail').click(event => {
    // targetImg = the target of the event, cloned(deep copy)
    const targetImg = $(event.currentTarget).clone();
    // selectedImageOnly = deep clone of event target .find it's input
    let selectedImageOnly = $(targetImg).find('input');
    // imgSrc = deep clone of event targets input element's src attribute
    let imgSrc = $(selectedImageOnly).attr('src');
    // altSrc = deep clone of event targets input element's alt attribute
    let altSrc = $(selectedImageOnly).attr('alt');

    // the container element's updated img attribute is mutated to imgSrc
    $('.hero img').attr('src', imgSrc);
    // the container element's updated img's alt attribute is mutated
    $('.hero img').attr('alt', altSrc);
  });
}

$(handleClick);


