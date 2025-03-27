import { z } from "zod";
export const toolName = `get_bulkjobs_v4_deviceuploads`;
export const toolDescription = `Gets the bulk upload job IDs for a project`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/bulkjobs/v4/deviceUploads`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "limit": z.number().int().gte(1).lte(100).describe("The number of items to return per page"), "type": z.enum(["create", "delete"]).describe("Type of bulk job (either `create` or `delete`)").optional(), "status": z.any().superRefine((x, ctx) => {
            const schemas = [z.enum(["pending", "ongoing", "completed", "failed", "cancelled", "acknowledged"]).describe("Status of the bulk upload."), z.array(z.enum(["pending", "ongoing", "completed", "failed", "cancelled", "acknowledged"]).describe("Status of the bulk upload."))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).optional() }).optional() }).shape;
