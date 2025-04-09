import { z } from "zod";
export const inputParams = {
    "description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(),
    "issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme."),
    "name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.")
};
