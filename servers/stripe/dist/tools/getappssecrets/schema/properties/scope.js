import { z } from "zod";
export const inputParams = {
    "type": z.enum(["account", "user"]),
    "user": z.string().max(5000).optional()
};
