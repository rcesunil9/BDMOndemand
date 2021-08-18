/**
 *  Calculates the markup between cost and retail price
 *  @param {cost} cost
 *  @param {retailPrice} retailPrice
 *  @return {markup}
 */
export const CalculateMarkup = (cost, retailPrice) => {
  const markup = (retailPrice - cost) / cost;
  return markup;
};
/**
 *  Calculates the markup percentage between cost and retail price
 *  @param {cost} cost
 *  @param {retailPrice} retailPrice
 *  @returns {markupPercentage}
 */
export const CalculateMarkupPercent = (cost, retailPrice) => {
  const markupPercentage = CalculateMarkup(cost, retailPrice);
  return markupPercentage * 100;
};
/**
 *  Calculates the retail price based on cost and markup
 *  @param {cost} cost
 *  @param {markup} markup
 *  @returns {retailPrice}
 */
export const CalculateRetailPriceByMarkup = (cost, markup) => {
  const retailPrice = parseFloat(cost) + parseFloat(cost * markup);
  return retailPrice;
};
/**
 *  Calculates the retail price based on cost and markup percantage
 *  @param {cost} cost
 *  @param {markupPercentage} markupPercentage
 *  @returns {retailPrice}
 */
export const CalculateRetailPriceByMarkupPercent = (cost, markupPercentage) => {
  const retailPrice =
    parseFloat(cost) + parseFloat(cost * markupPercentage) / 100;
  return retailPrice;
};
/**
 *  Calculates the margin between cost and retail pric
 *  @param {cost} cost
 *  @param {retailPrice} retailPrice
 *  @returns {margin}
 */
export const CalculateMargin = (cost, retailPrice) => {
  const margin = parseFloat((retailPrice - cost) / retailPrice);
  return margin;
};
/**
 *  Calculates the margin percentage between cost and retail price
 *  @param {cost} cost
 *  @param {retailPrice} retailPrice
 *  @returns {marginPercentage}
 */
export const CalculateMarginPercent = (cost, retailPrice) => {
  const marginPercentage = CalculateMargin(cost, retailPrice);
  return marginPercentage * 100;
};
/**
 *  Calculates the retail price based on cost and margin
 *  @param {cost} cost
 *  @param {margin} margin
 *  @returns {retailPrice}
 */
export const CalculateRetailPriceByMargin = (cost, margin) => {
  const retailPrice = cost / (1 - margin);
  return retailPrice;
};
/**
 *  Calculates the retail price based on cost and margin percantage
 *  @param {cost} cost
 *  @param {marginPercentage} marginPercentage
 *  @returns {retailPrice}
 */
export const CalculateRetailPriceByMarginPercent = (cost, marginPercentage) => {
  const retailPrice = cost / (1 - marginPercentage / 100);
  return retailPrice;
};
/**
 *  Calculates markup for given margin
 *  @param {margin} cost
 *  @returns {markup}
 */
export const CaluculateMarkupByMargin = (margin) => {
  const marginPercent = margin / 100
  const markupPercentage = marginPercent / (1 - marginPercent) * 100
  return markupPercentage
};
/**
 *  Calculates margin for given markup
 *  @param {margin} cost
 *  @returns {markup}
 */
export const CaluculateMarginByMarkup = (markup) => {
  const markupPercent = markup / 100
  const marginPercentage = markupPercent / (1 + markupPercent) * 100
  return marginPercentage
}