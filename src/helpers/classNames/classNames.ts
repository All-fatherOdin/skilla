type Modes = Record<string, boolean | string>

export function classNames (cls: string, modes: Modes = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(el => !!el),
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value))
      .map(([cls, _]) => cls)
  ].join(" ").trim()
}
