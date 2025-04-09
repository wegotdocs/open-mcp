import { z } from "zod";
export const inputParams = {
    "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."),
    "issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created.")
};
