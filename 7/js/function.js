const checkStr = 'Hello world!';
const requiredLength = 18;
const checkLength = (string, length) => string.length === length;
checkLength(checkStr,requiredLength);

const checkPhrase = 'Лёша на полке клопа нашёл';

const checkPalyndrom = (string) => {
  const correction = string.replaceAll(' ', '').toLowerCase();
  let newPhrase = '';

  for (let i = correction.length - 1; i >= 0; i--) {
    newPhrase += correction[i];
  }

  const palyndromCheck = correction === newPhrase;

  return palyndromCheck;
};
checkPalyndrom(checkPhrase);
