import { z } from "zod";
export const inputParams = {
    "includeCollapsedFields": z.boolean().describe("Include collapsed fields for fields that have non-unique names.").optional(),
    "projectIds": z.array(z.number().int()).describe("List of project IDs used to filter the visible field details returned.").optional()
};
