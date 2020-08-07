export const COLUMN_SIZE = 42;
export const GUTTER_SIZE = 28;

export function columnsToPx(columns) {
  return `${COLUMN_SIZE * columns + GUTTER_SIZE * (columns - 1)}px`;
}

export function spacing(size) {
  return `${size * 4}px`;
}
