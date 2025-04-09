import { z } from "zod";
export const inputParams = {
    "description": z.string().describe("The API Key description").optional(),
    "apiKeyType": z.enum(["ADMIN", "INFERENCE"]).describe("The API Key type. Admin keys have full access to the API while inference keys are only able to call inference endpoints."),
    "expiresAt": z.union([z.literal(""), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}$")), z.string().regex(new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{3})?Z$"))]).describe("The API Key expiration date. If not provided, the key will not expire.").optional(),
    "consumptionLimit": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `consumptionLimit` to the tool, first call the tool `expandSchema` with \"/properties/consumptionLimit\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The API Key consumption limits for each epoch.</property-description>"),
    "signature": z.string().describe("The token, signed with the wallet's private key"),
    "token": z.string().describe("The token obtained from https://api.venice.ai/api/v1/api_keys/generate_web3_key"),
    "address": z.string().describe("The wallet's address")
};
