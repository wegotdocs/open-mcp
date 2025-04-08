import { z } from "zod";
export const toolName = `getavatarimagebyowner`;
export const toolDescription = `Get avatar image by owner`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/universal_avatar/view/type/{type}/owner/{entityId}`;
export const method = `get`;
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
    "query": [
        "size",
        "format"
    ],
    "header": [],
    "path": [
        "type",
        "entityId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "type": z.enum(["issuetype", "project", "priority"]).describe("The icon type of the avatar."),
    "entityId": z.string().describe("The ID of the project or issue type the avatar belongs to."),
    "size": z.enum(["xsmall", "small", "medium", "large", "xlarge"]).describe("The size of the avatar image. If not provided the default size is returned.").optional(),
    "format": z.enum(["png", "svg"]).describe("The format to return the avatar image in. If not provided the original content format is returned.").optional()
};
