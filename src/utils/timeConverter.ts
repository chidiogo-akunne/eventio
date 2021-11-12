import dayjs from "dayjs";

export const timeConverter = (date: Date) => {
  return dayjs(date).format("MMMM D, YYYY - h:mm A");
};
