import { z } from "zod";
export const inputParams = {
    "promptId": z.string().describe("The unique identifier of the prompt template to render")
};
