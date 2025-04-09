import { z } from "zod";
export const inputParams = {
    "active": z.boolean(),
    "action": z.enum(["deny", "log"])
};
