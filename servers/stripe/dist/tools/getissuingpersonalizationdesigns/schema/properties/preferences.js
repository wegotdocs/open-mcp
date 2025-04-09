import { z } from "zod";
export const inputParams = {
    "is_default": z.boolean().optional(),
    "is_platform_default": z.boolean().optional()
};
