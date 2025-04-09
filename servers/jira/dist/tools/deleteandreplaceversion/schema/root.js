import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the version."),
    "customFieldReplacementList": z.array(z.object({ "customFieldId": z.number().int().describe("The ID of the custom field in which to replace the version number.").optional(), "moveTo": z.number().int().describe("The version number to use as a replacement for the deleted version.").optional() }).strict().describe("Details about the replacement for a deleted version.")).describe("An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.").optional(),
    "moveAffectedIssuesTo": z.number().int().describe("The ID of the version to update `affectedVersion` to when the field contains the deleted version.").optional(),
    "moveFixIssuesTo": z.number().int().describe("The ID of the version to update `fixVersion` to when the field contains the deleted version.").optional()
};
