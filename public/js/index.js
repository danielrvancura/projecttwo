$(document).ready(function() {
  $('.delete').click(function(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: $(this).attr('href')
    }).success(function(data){
      window.location.href = '/favorites';
    });
  });

// $('.edit').submit(function(e){
//   console.log('Submit');
//   e.preventDefault();
//   $.ajax({
//     url: $(this).attr("action"),
//     method: 'PUT',
//     data: {
//       name: $("#name").val()
//     }
//   }).success(function(data){
//     window.location.href = "/tags";
//   });
// });
});
