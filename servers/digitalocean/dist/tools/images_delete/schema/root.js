import { z } from "zod";
export const inputParams = {
    "image_id": z.number().int().describe("A unique number that can be used to identify and reference a specific image.")
};
