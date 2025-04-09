import { z } from "zod";
export const inputParams = {
    "priority": z.number().int().nullable(),
    "target": z.string().max(255).nullable(),
    "params": z.string().nullable().optional()
};
