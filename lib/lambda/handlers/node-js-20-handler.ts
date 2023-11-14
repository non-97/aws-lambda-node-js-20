export const handler = async (): Promise<void | Error> => {
  const months = ["Mar", "Jan", "Feb", "Dec"];

  console.log(`Sorted months : ${months.toSorted()}`);
  console.log(`Original months : ${months}`);

  return;
};
