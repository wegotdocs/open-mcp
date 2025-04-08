import { z } from "zod";
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
export const inputParams = {
    "description": z.string().describe("The API Key description").optional(),
    "apiKeyType": z.enum(["ADMIN", "INFERENCE"]).describe("The API Key type. Admin keys have full access to the API while inference keys are only able to call inference endpoints."),
    "expiresAt": z.union([z.literal(""), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$"))]).describe("The API Key expiration date. If not provided, the key will not expire.").optional(),
    "consumptionLimit": z.object({ "vcu": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("VCU limit"), "usd": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("USD limit") }).describe("The API Key consumption limits for each epoch."),
    "signature": z.string().describe("The token, signed with the wallet's private key"),
    "token": z.string().describe("The token obtained from https://api.venice.ai/api/v1/api_keys/generate_web3_key"),
    "address": z.string().describe("The wallet's address")
};
