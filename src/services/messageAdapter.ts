import { MessageService } from "../application/ports";

export const useMessageService = (): MessageService => {
  return {
    notify: (msg: string) => window.alert(msg),
  };
};
