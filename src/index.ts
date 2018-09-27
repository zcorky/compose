/**
 * Compose single-argument functions from left to right.
 * @param {...Function} fns The functions to compose.
 * @returns {Function} A Function obtailed by composing the argument functions
 * from left to right. For example,
 *  compose(
 *    map,
 *    filter,
 *    sort,
 * ) is identical to doing
 *    (...args) => sort(filter(map(...args))) 
 */
export function compose<R>(...fns: Function[]): (...args: any[]) => R {
  if (fns.length == 0) return args => args;

  if (fns.length === 1) return fns[0] as (...args: any[]) => R;

  return fns.reduce((a, b) => (...args) => b(a(...args))) as (...args: any[]) => R;
}

export default compose;