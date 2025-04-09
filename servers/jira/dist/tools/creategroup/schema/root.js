import { z } from "zod";
export const inputParams = {
    "name": z.string().describe("The name of the group.")
};
