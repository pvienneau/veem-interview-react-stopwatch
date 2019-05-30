## Getting Started

1. `npm run install`
2. `npm start`

Application will load at `http://localhost:3000`.

## Instructions

The goal of this exercise is to build out a stopwatch. We will build this out incrementally. The goal isn't to complete all steps, but rather being able to demonstrate the abilities requested by each step.

A small mock up is included in the root directory (`design.png`) in order to guide you with the visual styling.

![Design screenshot](https://github.com/patrickvienneau/veem-interview-react-stopwatch/blob/master/design.png)

Note that a SCSS color palette matching this design is offered to you, as well as fontawesome icons in order to offer you the necessary icons and colors to fulfill the design. When you will run the application for the first time, demo components will be visible to you in order to show you this information as you may use these during the development of this application. You can remove these components from the render.

## Expectations
It is not expected that you will be able to complete all steps of this exercise in the time you have. The main objective of this exercise is to allow you to demonstration your abilities in various facets of SPA development in React.

Having said that, it's expected that your code will demonstrate the following traits:
- Scalability
- Re-usability
- Simplicity
- Readability

## Steps
1. **Styling** Style both the general layout of the application/page and the missing control buttons. Note that the controls' functionality is not the focus at this point.

The layout has the following requirements:
- Consider the stopwatch to be the sole functional module on the page. Therefore, make sure that it's always centered on the screen, both horizontally and vertically.

Buttons will require the following properties and behaviours:
- Each will render a unique icon. Consider that the play button turns into a stop button when the stopwatch is running.
- Based on the button, its coloring will be different. You can use the SCSS color variables for this.
- Don't forget to include a hover state and disabled state to each button

2. **Basic State Management** Now that we are rendering buttons, let's tie those into our Stopwatch component and handle user interactions and state management. The following behaviours should be accounted for:
- When I click on the **play** button, the timer should start incrementing. This should also turn the **play** button into a **stop** button.
- When I click on the **stop** button, the timer should stop running and the time should reset itself.
- When I click on the **pause** button, the time should stop running but the time should remain. Clicking on the **play** button again should continue incrementing the timer.
- I should not be able to interact with the **pause** button unless the stopwatch is running.
- The **lap** button should always be disabled.

3. **Complex State Management** Now that we have the basic functionality of a stopwatch, let's work on implementing laps.
- I should not be able to interact with the **lap** button unless the stopwatch is running.
- Clicking on the **lap** button should save the time of the last lap. The lap time is considered to be the time since the start of the previous lap or the start of the timer, whichever came last.
- When I click on the **stop** button, it should reset the laps. Clicking on the **pause** button should not reset the laps.
- Providing the number of laps to the `Clock` component will display the lap count for you.

4. **Display Formatting** Let's write our own `Clock` component.
- Delete the `Clock.jsx` component (you can keep the `.scss` file)
- Recreate the component in order to display the correctly hour/minute/seconds based on the total number of seconds provided via props.
- Make sure that each value representing the number of hours, minutes and seconds should always display two digits.
