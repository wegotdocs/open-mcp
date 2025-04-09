import { z } from "zod";
export const inputParams = {
    "thread_id": z.string().describe("The ID of the [thread](https://platform.openai.com/docs/api-reference/threads) to which this message belongs."),
    "message_id": z.string().describe("The ID of the message to retrieve.")
};
