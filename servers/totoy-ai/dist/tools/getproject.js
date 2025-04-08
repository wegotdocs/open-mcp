import { z } from "zod";
export const toolName = `getproject`;
export const toolDescription = `Retrieves a Project.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/projects/{project_id}`;
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
    "path": [
        "project_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Project` created in Totoy.")
};
