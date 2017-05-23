$(document).ready(function () {
  var count = sessionStorage.getItem('count');

  function setFocus() {
    $('#burger-name').focus();
  }

  function loadImage() {
    if (count === '3') {
      $('#burger-img').attr('src', $('#burger-img').attr('sloth')).css('visibility', 'visible');
    } else {
      $('#burger-img').attr('src', $('#burger-img').attr('burger')).css('visibility', 'visible');
    }
    $('#add-btn').on('click', function () {
      if ($('#burger-name').val().trim() === '') {
        alert('Please insert a value');
      }
    });
  }

  $('#clear-btn').on('click', function () {
    sessionStorage.setItem('count', 0);
  });

  $(document).on('click', '.devour-btn', function () {
    if (count !== null) {
      count++;
    } else {
      count = 1;
    }
    sessionStorage.setItem('count', count);
  });

  loadImage();
  setFocus();
});
