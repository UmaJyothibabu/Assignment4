# In post man use the url

http://localhost:3000/api/mail

# use POST operation

# in the body part give data as follow

{
"userMail":
"subject":
"body":
"Regards":
}

# example data

{
"userMail":"umakj1995@gmail.com",
"subject":"Testing nodemailer",
"body":"This is a mail send using nodemailer"
"Regards":"Uma"
}

# From mail id,password,port number shoulde be added to the .env file as

PORT=3000
EMAIL=
PASSWORD=
