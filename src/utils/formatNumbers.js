export const formatToAbbreviated = (amount) => {
  if (amount < 1000) return amount.toString();

  const suffixes = [
    '',
    'K',
    'M',
    'B',
    'T',
    'Qa',
    'Qi',
    'Sx',
    'Sp',
    'Oc',
    'No',
    'Dc',
  ];
  const tier = Math.floor(Math.log10(amount) / 3);
  const suffix = suffixes[tier] || '';
  const scale = Math.pow(10, tier * 3);
  const scaled = amount / scale;

  return scaled.toFixed(2).replace(/\.00$/, '') + suffix;
};

export const formatScientific = (amount) => {
  return amount
    .toExponential(2)
    .replace(/e\+?/, 'e')
    .replace(/e-/, 'e-0')
    .replace(/e/g, ' x 10^');
};
