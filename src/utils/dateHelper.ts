export const formatDate = (unixTime: number): string => {
  const date = new Date(unixTime);

  const year = date.getUTCFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getUTCDate();

  return `${year} ${month} ${day}`;
};
