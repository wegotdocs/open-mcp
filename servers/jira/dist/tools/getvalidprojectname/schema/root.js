import { z } from "zod";
export const inputParams = {
    "name": z.string().describe("The project name.")
};
