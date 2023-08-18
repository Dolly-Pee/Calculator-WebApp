# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

This project was very challenging but it helped in solidifying my javaScript skills by allowing me implement what i have learnt sofar and consulting online sources for some helps i needed.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![mobile view for the first theme](./images/1.%20Screenshot%202023-08-17%20at%2017-32-52%20Frontend%20Mentor%20Calculator%20app.png)
![mobile view for the second theme](./images/2.%20Screenshot%202023-08-17%20at%2017-30-57%20Frontend%20Mentor%20Calculator%20app.png)
![mobile view for the third theme](./images/3.%20Screenshot%202023-08-17%20at%2017-31-06%20Frontend%20Mentor%20Calculator%20app.png)
![desktop view for the third theme](./images/4.%20Screenshot%202023-08-17%20at%2017-31-25%20Frontend%20Mentor%20Calculator%20app.png)
![desktop view for the second theme](./images/5.%20Screenshot%202023-08-17%20at%2017-31-37%20Frontend%20Mentor%20Calculator%20app.png)
![desktop view for the first theme](./images/6.%20Screenshot%202023-08-17%20at%2017-31-46%20Frontend%20Mentor%20Calculator%20app.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I started with my mark-up then styled it with css, before going into the javaScript to enable different themes,
when i was done with that, i launched into the most daunting and challenging part which is programming the mathematical functionalities using javaScript.

The project is a success but i believe i can still do better than this which i am presently working on.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I have learnt alot of new things like..:
1) how to make an input with type 'text' display only numbers with javaScript.
2) deleting numbers one after the other using javaScript.
3) adding comma to a lengthy number in the appropriate place (after three digits).
4) the better use of array.
5) A very good use of Grid Layout

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.grid-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-gap: 1em;
    grid-column-gap: 1em;
}

@media (width > 365px) {
    .grid-row {
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }
}
```
```js
// INPUTING ONLY NUMBERS IN AN INPUT BOX OF TYPE TEXT.

inputbox.addEventListener('input', function (event) {
    var splitValue = inputbox.value.split('');
    var charactersToFilter = 0;
    var filteredSplitValue =
        splitValue.map(function (character) {
            if (!digitPeriodRegExp.test(character)) {
                charactersToFilter++;
                return '';
            }

            return character;
        });

    inputbox.value = filteredSplitValue.join('');

    var charactersBeforeSelectionStart = filteredSplitValue.slice(0,
        inputbox.selectionStart);
    var filteredCharactersBeforeSelectionStart = charactersBeforeSelectionStart.filter(function (character) {
        return !character;
    });

    var totalFilteredCharactersBeforeselectionStart = filteredCharactersBeforeSelectionStart.length;
    var newSelectionStart = inputbox.selectionStart - totalFilteredCharactersBeforeselectionStart;

    inputbox.selectionStart = newSelectionStart;
    inputbox.selectionEnd = inputbox.selectionStart;

}, false);
// DELETING NUMBERS ONE AFTER THE OTHER.

if (buttons[i] === del) {

    for (let i = 0; i < inputbox.value.length; i++) {
      let deleteNumber = inputbox.value;
      deleteNumber = deleteNumber.toString()
      deleteNumber = deleteNumber.slice(0, deleteNumber.length - 1);
      inputbox.value = deleteNumber;
      initialNumbers = [];
    }
}

// ADDING COMA TO A NUMBER IN THE APPROPRIATE PLACE.
inputbox.value = parseFloat(initialNumbers[0]).toLocaleString();


```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I will like to venture into React js in the nearest js but before that i really think i should do more of javaScript projects for now.

### Useful resources

stackOverflow was very useful for me.

## Author

- Website - [Work In Progress]()
- Frontend Mentor - [@Dolly-Pee](https://www.frontendmentor.io/profile/Dolly-Pee)
- Twitter - [@precimyte](https://twitter.com/Precimyte)


## Acknowledgments

Hat-Tip to Destiny my course-Mate, we brainStorm on some of the problems encountered together.