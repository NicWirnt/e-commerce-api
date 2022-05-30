# user validation process

receive user data from frontend
server side validation
if not valide
response with invalid message
else
encrypt password
store in the db
create unique url for email address validation and send that unique url to the client.

## once client receives the email, they will folllw the link that should redirect to our frontend pages where we get the unique key part of the url and call server to verify that code

in server:
receive the unique email validating code
check if the code is valid and exist in database
if not
respond invalid request message
if exists
update user status from inactive to active in the database
send email confirmation to user saying the account is active
responds successfull request message to the client tab
