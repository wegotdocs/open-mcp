import { z } from "zod";
export const inputParams = {
    "created": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `created` to the tool, first call the tool `expandSchema` with \"/properties/created\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.</property-description>").optional(),
    "ending_before": z.string().max(5000).describe("A pagination cursor to fetch the previous page of the list. The value must be a ForwardingRequest ID.").optional(),
    "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
    "limit": z.number().int().describe("A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.").optional(),
    "starting_after": z.string().max(5000).describe("A pagination cursor to fetch the next page of the list. The value must be a ForwardingRequest ID.").optional()
};
