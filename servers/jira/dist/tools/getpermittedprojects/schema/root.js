import { z } from "zod";
export const inputParams = {
    "permissions": z.array(z.string()).describe("A list of permission keys.")
};
