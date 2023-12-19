const Omics = require('../models/omics.model');
const createError = require('http-errors');
const { booleanParser, withStats } = require('../helpers/functions');

/* GET multiple genes */
const getByGenes = async (req, res, next) => {
  const geneNames = req.body.geneNames;

  // check if geneNames is set
  if (!!geneNames && geneNames.length > 0) {
    try {
      // found = query result, missing = all geneNames not found in the DB
      const results = await Omics.find({ gene: { $in: geneNames } });
      const missings = geneNames.filter((geneName) => !results.some((r) => r.gene === geneName));
      if (missings.length) {
        next(createError(404, 'Not all values were found', { properties: { results, missings } }));
      } else {
        res.status(200).json({ results });
      }
    } catch (error) {
      next(createError(500, 'something went wrong'));
      res.status(500).json({ error: { code: 500, description: 'something went wrong' } });
    }
  } else {
    next(createError(400, 'check your request body!'));
  }
};

/* GET a single gene */
const getByGene = async (req, res, next) => {
  const singleGene = req.params.singleGene;
  const getStats = booleanParser(req.query.withStats);
  const getOutliers = booleanParser(req.query.withOutliers);

  // check if Gene is set
  if (!!singleGene) {
    try {
      const result = await Omics.find({ gene: singleGene });
      if (!!result && result.length) {
        res.status(200).send({ results: getStats ? withStats(result[0], getOutliers) : result[0] });
      } else {
        next(createError(404, 'Gene not found!'));
      }
    } catch (error) {
      next(createError(500, 'Something went wrong!'));
    }
  } else {
    next(createError(400, 'check your request body!'));
  }
};

module.exports = {
  getByGenes,
  getByGene,
};
