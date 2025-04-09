import { z } from "zod";
export const inputParams = {
    "pa_id": z.string().describe("A unique identifier for a partner attachment.")
};
