/**
 * @desc Allows appendChild to be called point free.
 * @param parentNode
 */
export const appendChild = parentNode => childNode => parentNode.appendChild(childNode);