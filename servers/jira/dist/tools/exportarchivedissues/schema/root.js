import { z } from "zod";
export const inputParams = {
    "archivedBy": z.array(z.string()).describe("List archived issues archived by a specified account ID.").optional(),
    "archivedDateRange": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `archivedDateRange` to the tool, first call the tool `expandSchema` with \"/properties/archivedDateRange\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>List issues archived within a specified date range.</property-description>").optional(),
    "issueTypes": z.array(z.string()).describe("List archived issues with a specified issue type ID.").optional(),
    "projects": z.array(z.string()).describe("List archived issues with a specified project key.").optional(),
    "reporters": z.array(z.string()).describe("List archived issues where the reporter is a specified account ID.").optional()
};
