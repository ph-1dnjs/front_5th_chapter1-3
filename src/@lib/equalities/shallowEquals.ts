import { isObject } from "./utils";

export function shallowEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) {
    return true;
  }

  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
    return objA.every((value, key) => objB[key] === value);
  }

  if (isObject(objA) && isObject(objB)) {
    const entriesA = Object.entries(objA);
    const entriesB = Object.entries(objB);

    return (
      entriesA.length === entriesB.length &&
      entriesA.every(([key, value]) => {
        return objB[key] === value;
      })
    );
  }

  return false;
}
