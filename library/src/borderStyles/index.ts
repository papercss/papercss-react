import * as styles from "./styles.scss";
export * from "./styles.scss";

const sketchyBorders = [
  styles.border1,
  styles.border2,
  styles.border3,
  styles.border4,
  styles.border5,
  styles.border6,
];

export function borderRandom() {
  return sketchyBorders[Math.floor(Math.random() * 5)];
}
