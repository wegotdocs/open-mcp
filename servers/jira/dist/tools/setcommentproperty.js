import { z } from "zod";
export const toolName = `setcommentproperty`;
export const toolDescription = `Set comment property`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/comment/{commentId}/properties/{propertyKey}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "commentId",
        "propertyKey"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "commentId": z.string().describe("The ID of the comment."), "propertyKey": z.string().describe("The key of the property. The maximum length is 255 characters.") }).shape;
