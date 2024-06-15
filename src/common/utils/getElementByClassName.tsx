export function getElementsByClassName(className: string) {
  return Array.from(document.getElementsByClassName(className)) as HTMLElement[];
}