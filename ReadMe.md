# Implement a login form using AJAX

This is a webpage made for my AJAX course at WF3 school.
The model I am using for my exercise is the website of Europcar (United States).
https://www.europcar.com/EBE/module/driver/AuthenticateDrivers1000.do?action=7

## What my form does

1. The form takes an email input. This input has the type _text_ because we want to validate the email using php and not the html.
2. The form sends the data to php via an AJAX request using the **post** method.
3. PHP takes the user email and verifies the format with a regex function. Depending on the result, the user will see a small message
4. on top of the email input box saying if the email is valid or not without reloading the entire page.
5. The password input is not used in this exercise.
