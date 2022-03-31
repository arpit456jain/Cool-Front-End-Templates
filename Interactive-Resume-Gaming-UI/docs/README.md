# Interactive Resume

## Background
This interactive resume was inspired by Robby Leonardi's [Interactive Resume][interactive], as well as JK Rowling's Wizarding World of Harry Potter. The interactive resume is meant to display a certain passion and skill for frontend development with extremely intuitive UX.

In this interactive resume, we'll follow Harry's first year and first confrontation with Voldemort. During the journey, skill level, education experience and work experience will be creatively displayed through certain elements, such as Quidditch hoops, various lengths of Devil's Snare, etc. Completion of Harry's final battle with Professor Quirrell and Voldemort will display an "Achievement Unlocked" banner that will announce my most recent accomplishment of graduating App Academy!

## Functionality & MVP

In this interactive resume, users simply need to press the down `arrow key` (intially) and enter `spacebar` at the end to send a spell at Quirrell/Voldemort in order to progress through Harry's journey.

### MVP Features
- [ ] Scrolling background
- [ ] Character entities/assets animation
- [ ] Accomplishments banner
- [ ] Background entities animation(Devil's Snare, Quidditch hoops)

In addition, the project will include:
- [ ] Production README
- [ ] Modal contact form with social media links

## Wireframes

The interactive resume is a single page scrolling animation with the centermost component being Harry. Pressing the down key (scrolling) scrolls through elements horizontally.

![Scene Wireframe][wireframe]

## Architecture & Technologies

This project will implement the following technologies:
- React.js or jQuery for DOM manipulation, animation and event listening.
- Easel.js/Tween.js for drawing assets/entities.
- Animate.css for css animations.
- Webpack to bundle scripts and files.

## Implementation Timeline

### Day 1

- [ ] Setup all necessary node modules and testing to make sure everything works.
- [ ] Decide between using React.js or jQuery for DOM manipulation and event listening.
- [ ] Set-up a large background like in rleonardi's example, and be able to scroll horizontally through the page with one action (down arrow).
- [ ] Start entity design with Easel or Tween.

### Day 2
- [ ] Finish designing and building entities.
- [ ] Add individual entities to background and foreground.

### Day 3
- [ ] Finish timing of animation
- [ ] Create modal contact form

#### Bonus Features

- [ ] Compatibility with different browsers and screen sizes. Including mobile devices.
- [ ] Add an additional year of Hogwarts(Chamber of Secrets).


[interactive]: www.rleonardi.com/interactive-resume/
[wireframe]: ./Scene.png
