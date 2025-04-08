export const toolName = `projects_list_resources_default`;
export const toolDescription = `List Default Project Resources`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/projects/default/resources`;
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
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {};
