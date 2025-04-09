import { z } from "zod";
export const inputParams = {
    "model": z.string().describe("The model to delete")
};
