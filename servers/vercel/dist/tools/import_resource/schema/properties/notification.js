import { z } from "zod";
export const inputParams = {
    "level": z.enum(["info", "warn", "error"]),
    "title": z.string(),
    "message": z.string().optional(),
    "href": z.string().url().optional()
};
