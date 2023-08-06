let title = document.getElementById('title');
let author = document.getElementById('author');
let year = document.getElementById('year');
  const addButton = document.getElementById('addButton');
  const removeButton = document.getElementById('removeButton');
  const division = document.getElementById('division');


  addButton.addEventListener('click', function() {
    let text = title.value +" " + author.value + " " + year.value;

    // Check if the input is not empty
    if (text) {
      const divItem = document.createElement('p');
      divItem.textContent = text;

      divItem.addEventListener('mouseover', function() {
        divItem.style.backgroundColor = 'lightgrey';
        divItem.style.fontWeight = 'bold';
        divItem.style.transition = '.5s'
        
      });

      divItem.addEventListener('mouseout', function() {
        divItem.style.backgroundColor = '';
        divItem.style.fontWeight = '';
      });

      division.appendChild(divItem);
      title.value = '';
      author.value = '';
      year.value = '';
    }
  });

  removeButton.addEventListener('click', function() {
    const divItems = division.getElementsByTagName('p');

    if (divItems.length > 0) {
        division.removeChild(divItems[divItems.length - 1]);
    }
  });