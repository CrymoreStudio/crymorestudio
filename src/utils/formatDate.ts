export default function formatDate(date: Date) {
  if (date.constructor.name === "String") {
    date = new Date(Date.parse(date));
  }
  return new Intl.DateTimeFormat("en-GB").format(date);
}
