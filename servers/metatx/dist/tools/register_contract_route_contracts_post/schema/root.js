import { z } from "zod";
export const inputParams = {
    "blockchain": z.string(),
    "address": z.string(),
    "title": z.string().optional(),
    "description": z.string().optional(),
    "image_uri": z.string().optional()
};
