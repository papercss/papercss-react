export default function classNames(
  ...classes: Array<string | undefined | false>
) {
  return classes.filter(Boolean).join(" ");
}
