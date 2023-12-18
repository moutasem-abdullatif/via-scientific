booleanParser = (value) => (!!value && value === 'true' ? true : false);

withStats = (geneExpr) => {
  function renderResult(stats) {
    return { mean: stats?.mean ?? 0, meadian: stats?.median ?? 0, variance: stats?.variance ?? 0 };
  }
  return renderResult();
};

module.exports = {
  booleanParser,
  withStats,
};
