import { z } from "zod";
export const inputParams = {
    "idOrName": z.string().describe("The ID or name of the status.")
};
