import { z } from "zod";
export const inputParams = {
    "floating_ip": z.string().ip({ version: "v4" }).describe("A floating IP address.")
};
