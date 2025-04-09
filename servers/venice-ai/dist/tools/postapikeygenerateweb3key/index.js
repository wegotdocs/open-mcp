export { inputParams } from "./schema/root.js";
export const toolName = `postapikeygenerateweb3key`;
export const toolDescription = `/api/v1/api_keys/generate_web3_key`;
export const baseUrl = `https://api.venice.ai/api/v1`;
export const path = `/api_keys/generate_web3_key`;
export const method = `post`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "description",
        "apiKeyType",
        "expiresAt",
        "consumptionLimit",
        "signature",
        "token",
        "address"
    ]
};
export const flatMap = {};
