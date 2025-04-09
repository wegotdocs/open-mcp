import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the version."),
    "moveFixIssuesTo": z.string().describe("The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional(),
    "moveAffectedIssuesTo": z.string().describe("The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.").optional()
};
