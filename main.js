$(document).ready(function () {
  $("#reg-user-form").submit(function (event) {
    event.preventDefault();
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    var formData = {
      user_email: $("#user_email").val(),
      user_pass: $("#user_pass").val(),
    };

    // process the form
    $.ajax({
      type: "POST", // define the type of HTTP verb we want to use (POST for our form)
      url: "validate_form.php", // the url where we want to POST
      data: formData, // our data object
      dataType: "html", // what type of data do we expect back from the server
      encode: true,
    })
      // using the done promise callback
      .done(function (message) {
        $("#email-msg").html(message);
        console.log(message);
      })

      .fail(function (xhr, status, errorThrown) {
        $("#email-msg").html(
          '<div class="alert alert-danger" role="alert">Houston, we have a problem.</div>'
        );
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        //console.dir(xhr);
      });

    // stop the form from submitting the normal way and refreshing the page
  });
});
