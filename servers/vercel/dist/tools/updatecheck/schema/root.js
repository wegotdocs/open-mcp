import { z } from "zod";
export const inputParams = {
    "deploymentId": z.string().describe("The deployment to update the check for."),
    "checkId": z.string().describe("The check being updated"),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "name": z.string().max(100).describe("The name of the check being created").optional(),
    "path": z.string().max(255).describe("Path of the page that is being checked").optional(),
    "status": z.enum(["running", "completed"]).describe("The current status of the check").optional(),
    "conclusion": z.enum(["canceled", "failed", "neutral", "succeeded", "skipped"]).describe("The result of the check being run").optional(),
    "detailsUrl": z.string().describe("A URL a user may visit to see more information about the check").optional(),
    "output": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `output` to the tool, first call the tool `expandSchema` with \"/properties/output\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The results of the check Run</property-description>").optional(),
    "externalId": z.string().describe("An identifier that can be used as an external reference").optional()
};
