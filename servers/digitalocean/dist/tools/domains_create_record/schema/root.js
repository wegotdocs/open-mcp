import { z } from "zod";
export const inputParams = {
    "domain_name": z.string().describe("The name of the domain itself.")
};
