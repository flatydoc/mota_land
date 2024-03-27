import { sendApi } from ".";

export const send = (data: any) => {
  return sendApi.post("/mail/send", data);
};
