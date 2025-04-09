export { inputParams } from "./schema/root.js";
export const toolName = `getimages`;
export const toolDescription = `Render images of file nodes`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/images/{file_key}`;
export const method = `get`;
export const security = [
    {
        "key": "X-Figma-Token",
        "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "X_FIGMA_TOKEN",
        "schemeType": "apiKey",
        "schemeName": "X-Figma-Token"
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
        "ids",
        "version",
        "scale",
        "format",
        "svg_outline_text",
        "svg_include_id",
        "svg_include_node_id",
        "svg_simplify_stroke",
        "contents_only",
        "use_absolute_bounds"
    ],
    "header": [],
    "path": [
        "file_key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
