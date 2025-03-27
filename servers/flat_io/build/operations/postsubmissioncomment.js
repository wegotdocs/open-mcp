import { z } from "zod";
export const toolName = `postsubmissioncomment`;
export const toolDescription = `Add a feedback comment to a submission`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes/{class}/assignments/{assignment}/submissions/{submission}/comments`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "comment": z.string().describe("The comment text") }).describe("Creation of a assignment submission comment").optional() }).shape;
