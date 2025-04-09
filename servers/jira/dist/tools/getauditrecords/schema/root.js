import { z } from "zod";
export const inputParams = {
    "offset": z.number().int().describe("The number of records to skip before returning the first result.").optional(),
    "limit": z.number().int().describe("The maximum number of results to return.").optional(),
    "filter": z.string().describe("The strings to match with audit field content, space separated.").optional(),
    "from": z.string().describe("The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.").optional(),
    "to": z.string().describe("The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.").optional()
};
