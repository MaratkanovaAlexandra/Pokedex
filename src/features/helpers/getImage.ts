export const getImage = (sprites: { sprites: string }[]) =>
  JSON.parse(sprites[0].sprites).other['official-artwork'].front_default
