const CAD_USD_EURO_EXCHANGE = [40.56, 63.96, 56.21];

export function Part1() {
  /* 
    The objectives here are 
      - to convert the component Part1 to be a default export arrow function called Part1Answer (use const instead of function keyword).
      - Just copy the return statement as is in the new function. 
      - The answers to the following are written in the new arrow function:
        - to destructure the userAgent and language key from the navigator object
        - to destructure the console.log() function into log() only
        - to destructure the CAD_USD_EURO_EXCHANGE into 3 variables: 
          cadFx, usdFx, and euroFx (in that exact order in the array)
            - tip: use let instead of const
        - to swap the values of usdFx and euroFx without using new variable names
        - use the created log function to log cadFx, usdFx, and euroFx in this format:
          "1 Canadian Dollar to PHP is 40.56, 1 US Dollar to PHP is 56.21, 1 Euro to PHP is 63.96"
            -tip: use string interpolation instead of having multiple parameters in the log function.
  */

  const userAgent = navigator.userAgent;
  const language = navigator.language;

  const log = console.log;

  const cadFx = CAD_USD_EURO_EXCHANGE[0];
  const usdFx = CAD_USD_EURO_EXCHANGE[1];
  const euroFx = CAD_USD_EURO_EXCHANGE[2];

  log(
    "1 Canadian Dollar to PHP is",
    cadFx,
    "1 US Dollar to PHP is ",
    usdFx,
    "1 Euro to PHP is",
    euroFx
  );

  return <>The output of this component is in console log</>;
}

// Answer

const Part1Answer = () => {
  const { userAgent, language } = navigator;
  const { log } = console;

  let [cadFx, usdFx, euroFx] = CAD_USD_EURO_EXCHANGE;

  [usdFx, euroFx] = [euroFx, usdFx];

  log(
    `1 Canadian Dollor to PHP is ${cadFx}, 1 US Dollor to PHP is ${usdFx}, 1 Euro to PHP is ${euroFx}`
  );

  return <>The output of this component is in console log</>;
};

export default Part1Answer;

//No need to edit this function, you will just import this later on.
export function Part2() {
  return <>Foo</>;
}
