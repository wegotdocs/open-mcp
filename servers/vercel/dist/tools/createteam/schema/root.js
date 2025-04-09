import { z } from "zod";
export const inputParams = {
    "slug": z.string().max(48).describe("The desired slug for the Team"),
    "name": z.string().max(256).describe("The desired name for the Team. It will be generated from the provided slug if nothing is provided").optional(),
    "attribution": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `attribution` to the tool, first call the tool `expandSchema` with \"/properties/attribution\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Attribution information for the session or current page</property-description>").optional()
};
