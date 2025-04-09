import { z } from "zod";
export const inputParams = {
    "thread_id": z.string().describe("The ID of the thread to which this message belongs."),
    "message_id": z.string().describe("The ID of the message to delete.")
};
