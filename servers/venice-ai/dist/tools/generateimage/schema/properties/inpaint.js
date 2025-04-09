import { z } from "zod";
export const inputParams = {
    "strength": z.number().int().gte(0).lte(100).describe("Strength of the inpainting."),
    "source_image_base64": z.string().describe("Base64 encoded source image to inpaint."),
    "mask": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mask` to the tool, first call the tool `expandSchema` with \"/properties/inpaint/properties/mask\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
};
