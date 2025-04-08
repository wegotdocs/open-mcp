import { z } from "zod";
export const toolName = `genai_list_models`;
export const toolDescription = `List Available Models`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/models`;
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
    "query": [
        "usecases",
        "public_only",
        "page",
        "per_page"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "usecases": z.array(z.enum(["MODEL_USECASE_UNKNOWN", "MODEL_USECASE_AGENT", "MODEL_USECASE_FINETUNED", "MODEL_USECASE_KNOWLEDGEBASE", "MODEL_USECASE_GUARDRAIL", "MODEL_USECASE_REASONING"])).describe("Include only models defined for the listed usecases.\n\n - MODEL_USECASE_UNKNOWN: The use case of the model is unknown\n - MODEL_USECASE_AGENT: The model maybe used in an agent\n - MODEL_USECASE_FINETUNED: The model maybe used for fine tuning\n - MODEL_USECASE_KNOWLEDGEBASE: The model maybe used for knowledge bases (embedding models)\n - MODEL_USECASE_GUARDRAIL: The model maybe used for guardrails\n - MODEL_USECASE_REASONING: The model usecase for reasoning").optional(),
    "public_only": z.boolean().describe("Only include models that are publicly available.").optional(),
    "page": z.number().int().describe("Page number.").optional(),
    "per_page": z.number().int().describe("Items per page.").optional()
};
