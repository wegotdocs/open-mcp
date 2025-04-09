import { z } from "zod";
export const inputParams = {
    "idOrName": z.any().superRefine((x, ctx) => {
        const schemas = [z.string(), z.number().int()];
        const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
        if (schemas.length - errors.length !== 1) {
            ctx.addIssue({
                path: ctx.path,
                code: "invalid_union",
                unionErrors: errors,
                message: "Invalid input: Should pass single schema",
            });
        }
    }).describe("The unique project identifier or the project name"),
    "production": z.enum(["true", "false"]).describe("Filters only production domains when set to `true`.").optional(),
    "target": z.enum(["production", "preview"]).describe("Filters on the target of the domain. Can be either \\\"production\\\", \\\"preview\\\"").optional(),
    "customEnvironmentId": z.string().describe("The unique custom environment identifier within the project").optional(),
    "gitBranch": z.string().describe("Filters domains based on specific branch.").optional(),
    "redirects": z.enum(["true", "false"]).describe("Excludes redirect project domains when \\\"false\\\". Includes redirect project domains when \\\"true\\\" (default).").optional(),
    "redirect": z.string().describe("Filters domains based on their redirect target.").optional(),
    "verified": z.enum(["true", "false"]).describe("Filters domains based on their verification status.").optional(),
    "limit": z.number().describe("Maximum number of domains to list from a request (max 100).").optional(),
    "since": z.number().describe("Get domains created after this JavaScript timestamp.").optional(),
    "until": z.number().describe("Get domains created before this JavaScript timestamp.").optional(),
    "order": z.enum(["ASC", "DESC"]).describe("Domains sort order by createdAt").optional(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional()
};
