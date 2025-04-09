import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the issue type."),
    "x": z.number().int().describe("The X coordinate of the top-left corner of the crop region.").optional(),
    "y": z.number().int().describe("The Y coordinate of the top-left corner of the crop region.").optional(),
    "size": z.number().int().describe("The length of each side of the crop region.")
};
