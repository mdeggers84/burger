$(document).ready(function () {
  $('#add-btn').on('click', function () {
    if ($('#burger-name').val().trim() === '') {
      alert('Please insert a value');
    }
  });
});
