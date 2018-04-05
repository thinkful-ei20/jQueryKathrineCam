'use strict';

function fizzbuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}

function fizzbuzzer(total) {
  const results = [];
  for (let i = 1; i <= total; i++) {
    results.push(fizzbuzz(i));
  }
  return results;
}

function resultsToHtml(results) {
  return results.map(result => {
    let fizzBuzzClass = '';
    if (typeof result === 'string') {
      fizzBuzzClass = result;
    }

    return `
      <div class="fizz-buzz-item ${fizzBuzzClass}">
        <span>${result}</span>
      </div>    
    `;
  });
}

function main() {
  // When DOM ready...
  $('form').on('submit', event => {
    event.preventDefault();
    const number = $('#number-choice').val();
    const fizzResults = fizzbuzzer(number);
    // [ 1, 2, 'fizz', 4, 'buzz' ]
    const html = resultsToHtml(fizzResults);
    // [ '<div>1</div>', '<div>fizz</div>' ]
    $('.js-results').html(html);
    $('#number-choice').val('');
  });

}

$(main);