# Tru Golf Take Home Challenge - Spencer Bangerter
First off, thank you for the time to speak with me. I enjoyed my conversation with you (assuming Clint is the one reading this, if not, well I look forward to talking to you at some point too)
I want to walk you through some of my high level decisions, and i left some code comments in some places in the code while creating this. 

I decided to start a whole applicaton from scratch using the following technology: \
React for the front end framework \
Redux for state management \
Styled Components for quick styling of components and to eliminate the need for strict class names and css files \
MUI for a base component library 

I decided to do things this way, as it would allow for a better end product in 2 days due to my experience with them as frameworks. 

## Process for design

I started by just wireframing everything together on the UI, and looking through the JSON files to understand the data that was being sent via the "API" call. 
I mocked up a basic api call to gather the data, and set it to redux for app state management. 
Once I had some basic wireframe and state set up, I went and more fully fleshed out the UI. I went through the E6 Connect Portal and found the documentation for it. I took inspiration (and the background image) from the color palette I saw there. 
I also used it for some of the definitions of the shot data points. 

I decided that a multi select filter option would be a good way for a user to compare like clubs, say a 5/6 iron to see yardage gapping, etc. 

## Things to look for

I tried to guesstimate a decent match to the color schemes on the E6 Connect software / Portal. 

You'll see that the dropdown selector for filtering clubs only shows clubs that were used in the current data set sent to the table. You can select any number of clubs from that list and see all of them. Clearing the filters can be done by clicking on the selected options, or by hitting "clear". 

When you select a single row of data that will pop open a modal showing you more detailed data about the shot in a nice card driven UI. Each card has a tooltip for shot data and what that data means. I selected the options I'd personally want to see if I was hitting off of a simulator. I added a calculation for Smash Factor, as well as Face to Path angle, though FPA will always show 0 since the JSON doesnt track the necessary points to make the calculations. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

