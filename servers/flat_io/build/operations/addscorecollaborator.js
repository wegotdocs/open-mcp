import { z } from "zod";
export const toolName = `addscorecollaborator`;
export const toolDescription = `Add a new collaborator`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/scores/{score}/collaborators`;
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
export const inputParams = z.object({ "body": z.object({ "aclAdmin": z.boolean().describe("`True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document\n"), "aclRead": z.boolean().describe("`True` if the related user can read the score. (probably true if the user has a permission on the document).\n"), "aclWrite": z.boolean().describe("`True` if the related user can modify the score.\n"), "group": z.string().describe("The unique identifier of a Flat group").optional(), "user": z.string().describe("The unique identifier of a Flat user").optional(), "userEmail": z.string().describe("Fill this field to invite an individual user by email.\n").optional(), "userToken": z.string().describe("Token received in an invitation to join the score.\n").optional() }).describe("Add a collaborator to a resource.").optional() }).shape;
