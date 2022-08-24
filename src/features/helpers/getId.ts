export const getId = (id: number) =>
  `#${'0'.repeat(3 - id.toString().length)}${id}`
