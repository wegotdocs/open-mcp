import { z } from "zod";
export const inputParams = {
    "sessionReferrer": z.string().describe("Session referrer").optional(),
    "landingPage": z.string().describe("Session landing page").optional(),
    "pageBeforeConversionPage": z.string().describe("Referrer to the signup page").optional(),
    "utm": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `utm` to the tool, first call the tool `expandSchema` with \"/properties/attribution/properties/utm\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
};
