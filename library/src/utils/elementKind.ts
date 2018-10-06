export type ElementKind =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export function kindToClass(
  classDict: Record<ElementKind, string>,
  kind: ElementKind | undefined
): string {
  return kind ? classDict[kind] : "";
}
