type StackObject<T> = {
  push: (item: T) => number,
  pop: () => T | undefined,
  peek: () => T | undefined
}

function Stack<T>(): StackObject<T> {
  const items: T[] = [];

  return {
    push: (item: T) => items.push(item),
    pop: () => items.pop(),
    peek: () => items[items.length - 1]
  };
}

export default Stack;
