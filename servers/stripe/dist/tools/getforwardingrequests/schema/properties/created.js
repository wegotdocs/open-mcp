import { z } from "zod";
export const inputParams = {
    "gt": z.number().int().optional(),
    "gte": z.number().int().optional(),
    "lt": z.number().int().optional(),
    "lte": z.number().int().optional()
};
