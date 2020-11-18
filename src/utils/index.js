export const sizes = ["B", "KB", "MB", "GB", "TB"];

export function toHumanlySize(size) {
  size = Number(size);
  var index = 0;
  while (size > 900) {
    size /= 1024;
    index += 1;
  }
  return Math.round(size * 100) / 100 + sizes[index];
}
