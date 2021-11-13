import dayjs from "dayjs";

//function used to format/convert date
export const timeConverter = (date: Date) => {
  return dayjs(date).format("MMMM D, YYYY - h:mm A");
};
