/**
 * Utilitários de formatação de moeda
 * Formata valores numéricos para o padrão BRL (Real brasileiro)
 */

/**
 * Formata um valor numérico para moeda BRL
 * @param {number} value - Valor a ser formatado
 * @returns {string} - Ex: "R$ 129,90"
 *
 * Aceita valores null/undefined/NaN e retorna "R$ 0,00" nesses casos
 */
export function formatPrice(value) {
  if (value === null || value === undefined || isNaN(value)) {
    value = 0;
  }
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata um valor com desconto aplicado
 * @param {number} value - Valor original
 * @param {number} discount - Valor do desconto
 * @returns {string} - Ex: "R$ 119,90"
 */
export function formatPriceWithDiscount(value, discount = 0) {
  const finalValue = Math.max(0, (value || 0) - (discount || 0));
  return formatPrice(finalValue);
}
