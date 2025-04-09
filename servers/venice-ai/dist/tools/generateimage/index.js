export { inputParams } from "./schema/root.js";
export const toolName = `generateimage`;
export const toolDescription = `/api/v1/image/generate`;
export const baseUrl = `https://api.venice.ai/api/v1`;
export const path = `/image/generate`;
export const method = `post`;
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
    "header": [
        "Accept-Encoding"
    ],
    "path": [],
    "cookie": [],
    "body": [
        "model",
        "prompt",
        "negative_prompt",
        "style_preset",
        "height",
        "width",
        "steps",
        "cfg_scale",
        "seed",
        "lora_strength",
        "safe_mode",
        "return_binary",
        "hide_watermark",
        "format",
        "embed_exif_metadata",
        "inpaint"
    ]
};
export const flatMap = {};
