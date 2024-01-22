// this is just a function to flush an array without creating a new one
export function flushInPlace<T>(input: (T | null | undefined)[]): T[] {
  for (let idx = 0; idx < input.length; idx += 1) {
    const value = input[idx];
    if (typeof value === "undefined" || value === null) {
      input.splice(idx, 1);
      // -1 current index since we just removed "this" item so we will have to reprocess the same index
      idx -= 1;
    }
  }
  return input as T[];
}
