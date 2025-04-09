export { inputParams } from "./schema/root.js";
export const toolName = `getactivitylogs`;
export const toolDescription = `Get activity logs`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/activity_logs`;
export const method = `get`;
export const security = [
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
        "events",
        "start_time",
        "end_time",
        "limit",
        "order"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
