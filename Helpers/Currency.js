export const ConvertToShortenNumber = (inputNumber, currencyIcon) => {
  const SI_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
  let sign = "";
  if (inputNumber < 0) {
    inputNumber = Math.round(Math.abs(inputNumber));
    sign = "-";
  }
  const tier = (Math.log10(inputNumber) / 3) | 0;
  if (tier === 0) {
    return sign + (currencyIcon ? currencyIcon : "") + inputNumber.toString();
  }

  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = inputNumber / scale;

  return sign + (currencyIcon ? currencyIcon : "") + scaled.toFixed(2) + suffix;
};
