$(document).ready(function () {
  var count = sessionStorage.getItem('count');

  if (count === '3') {
    $('#burger-img').hide();
    $('#sloth-img').show();
  } else {
    $('#burger-img').show();
    $('#sloth-img').hide();
  }

  $('#add-btn').on('click', function () {
    if ($('#burger-name').val().trim() === '') {
      alert('Please insert a value');
    }
  });

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
});
