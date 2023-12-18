booleanParser = (value) => (!!value && value === 'true' ? true : false);

withStats = (geneExpr, returnOutliers) => {
  const fields = ['exper_rep1', 'exper_rep2', 'exper_rep3', 'control_rep1', 'control_rep2', 'control_rep3'];
  const expressionValues = fields.map((col) => parseFloat(geneExpr[col]));
  // only used for identifying outliers
  let stdDev = 1;
  let zscores = [];
  let outliers = [];

  // find the mean
  function mean(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
  }

  // find the median
  function median(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
  }

  // find the variance
  function variance(arr, mean) {
    return arr.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / arr.length;
  }

  function std(variance) {
    return Math.sqrt(variance);
  }

  function zScores(arr, mean, std) {
    return arr
      .map((x) => {
        console.log(x, mean, std, 'x-mean =', x - mean, 'x-mean/std', (x - mean) / std);
        return (x - mean) / std;
      })
      .map((v) => +parseFloat(v).toFixed(2));
  }

  const m = mean(expressionValues);
  const med = median(expressionValues);
  const vari = variance(expressionValues, m);

  if (returnOutliers) {
    stdDev = std(vari);
    zscores = zScores(expressionValues, m, stdDev);
    outliers = fields.filter((zscore, index) => Math.abs(zscores[index]) > 3);
  }

  return { mean: m, meadian: med, variance: vari, outliers: returnOutliers ? outliers : undefined };
};

module.exports = {
  booleanParser,
  withStats,
};
