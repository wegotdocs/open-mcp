import { z } from "zod";
export const inputParams = {
    "access_key": z.string().describe("The access key's ID.")
};
