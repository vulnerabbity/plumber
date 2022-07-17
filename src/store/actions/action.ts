export type PayloadDefiner<T> = (definer: T) => any

// S extends string to keep concrete string e.g. "My action"
export type Action<S extends string, T> = {
  type: S
  payload: T
}

// Overload to allow action without payload
export function makeAction<S extends string, T>(type: S): () => Action<S, T>

export function makeAction<S extends string, T>(
  type: S,
  payloadDefiner: PayloadDefiner<T>,
): (payload: T) => Action<S, T>

export function makeAction<S extends string, T>(
  type: S,
  _payloadDefiner?: PayloadDefiner<T>,
) {
  return function (payload: T) {
    return {
      type,
      payload,
    }
  }
}
