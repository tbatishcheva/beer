export default function toggle(collection, item) {
  const result = [...collection];
  const idx = result.indexOf(item);
  if (idx !== -1) {
    result.splice(idx, 1);
  } else {
    result.push(item);
  }

  return result;
}
