# effective-train
For this project I was taked with creating a password generator. It needed to generate a password between 8-128 characters long, must include uppercase, lowercase, numbers, and special characters.
I started with defining my variabled using arrays to assign the values for all uppercase, lowercase, numbers, and special characters. And the variabled where defined to be global variabled. following that 

Following the Variables, I worked on the prompts which are located at the bottom of the script file. I used a prompt only for the first questions to allow the user to enter the length of their password, and to avoid user error of, for example, have 'eighteen' entered instead of '18', or number not in the specified range i used a conditional statment that if any of these errors were to occur, then the user would be prompted to select within the set requirements.

Following that section I procceded to work on the generate password section which is right above the prompts section. To make sure that the password generate the entered length, and is randomized i used a for loop with Math.floor to round down to avoid decimals and Math.random to ramdomize the index elements of the number,lowercase letters, and upper case letters that are going to be included in the password. This is to ensure distinction and uniqueness with every password generates, and that once a password is generate its not all the letters, number, special characters, etc in and ordered row, which would not be unique or secure.


Finally was the write password, which was given so not much work needed to be done


deployed link: https://brichardson117.github.io/refactored-bassoon/




# refactored-bassoon
