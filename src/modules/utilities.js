const changeSymbolTo = (symbol) => {
  const tempSymbols = document.querySelectorAll('.temp-symbol');
  tempSymbols.forEach((tempSymbol) => (tempSymbol.textContent = `°${symbol}`));
};

const convertTempTo = (unit, value) =>
  unit === 'F'
    ? (value * 1.8 + 32).toFixed(2)
    : ((value - 32) * 0.5556).toFixed(2);

export default { changeSymbolTo, convertTempTo };
