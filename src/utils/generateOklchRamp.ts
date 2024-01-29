import Color from "colorjs.io"

export const generateOklchRamp = (centralColor: string): string[] => {
  const color = new Color(centralColor)
  const ramp: string[] = []
  const lightnessOffset = 1 / 11
  const chromaOffset = (1 / 5) * color.oklch.c

  // Generate lighter shades.
  for (let i = 1; i < 5; i++) {
    const newColor = color.clone()

    newColor.oklch.l = color.oklch.l + i * lightnessOffset
    newColor.oklch.c = color.oklch.c - i * chromaOffset

    ramp.unshift(newColor.display({ format: "hex" }))
  }

  ramp.push(centralColor.toString())

  // Generate darker shades.
  for (let i = 1; i < 5; i++) {
    const newColor = color.clone()

    newColor.oklch.l = color.oklch.l - i * lightnessOffset
    newColor.oklch.c = color.oklch.c - i * chromaOffset

    ramp.push(newColor.display({ format: "hex" }))
  }

  return ramp
}
