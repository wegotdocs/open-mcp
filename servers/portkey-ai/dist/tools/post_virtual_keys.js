import { z } from "zod";
export const toolName = `post_virtual_keys`;
export const toolDescription = `Create a Virtual Key`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/virtual-keys`;
export const method = `post`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "name",
        "provider",
        "key",
        "note",
        "apiVersion",
        "resourceName",
        "deploymentName",
        "workspace_id",
        "deploymentConfig",
        "usage_limits",
        "rate_limits"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "name": z.string().optional(), "provider": z.enum(["openai", "azure-openai", "ai21", "anthropic", "anyscale", "azure-openai", "bedrock", "cohere", "deepinfra", "fireworks-ai", "google", "groq", "hugging-face", "jina", "lingyi", "mistral-ai", "monsterapi", "moonshot", "nomic", "novita-ai", "open-ai", "openrouter", "palm", "perplexity-ai", "predibase", "reka-ai", "segmind", "stability-ai", "together-ai", "vertex-ai", "workers-ai", "zhipu"]).optional(), "key": z.string().optional(), "note": z.string().nullable().optional(), "apiVersion": z.string().nullable().optional(), "resourceName": z.string().nullable().optional(), "deploymentName": z.string().nullable().optional(), "workspace_id": z.string().uuid().describe("optional, needed when using organisation admin API keys").optional(), "deploymentConfig": z.array(z.object({ "apiVersion": z.string(), "alias": z.string().optional(), "is_default": z.boolean().optional(), "deploymentName": z.string() })).optional(), "usage_limits": z.object({ "credit_limit": z.number().int().gte(1).describe("Credit Limit. Used for tracking usage"), "alert_threshold": z.number().int().gte(1).describe("Alert Threshold. Used for alerting when usage reaches more than this"), "periodic_reset": z.literal("monthly").describe("Reset the usage periodically.").optional() }).optional(), "rate_limits": z.object({ "type": z.literal("requests").optional(), "unit": z.literal("rpm").optional(), "value": z.number().int().optional() }).optional() }).shape;
