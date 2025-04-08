import { z } from "zod";
export const toolName = `import_resource`;
export const toolDescription = `Import Resource`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}`;
export const method = `put`;
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
        "integrationConfigurationId",
        "resourceId"
    ],
    "cookie": [],
    "body": [
        "productId",
        "name",
        "status",
        "metadata",
        "billingPlan",
        "notification",
        "secrets"
    ]
};
export const flatMap = {};
export const inputParams = {
    "integrationConfigurationId": z.string(),
    "resourceId": z.string(),
    "productId": z.string(),
    "name": z.string(),
    "status": z.enum(["ready", "pending", "suspended", "resumed", "uninstalled", "error"]),
    "metadata": z.record(z.any()).optional(),
    "billingPlan": z.object({ "id": z.string(), "type": z.enum(["prepayment", "subscription"]), "name": z.string(), "paymentMethodRequired": z.boolean().optional() }).catchall(z.any()).optional(),
    "notification": z.object({ "level": z.enum(["info", "warn", "error"]), "title": z.string(), "message": z.string().optional(), "href": z.string().url().optional() }).optional(),
    "secrets": z.array(z.object({ "name": z.string(), "value": z.string(), "prefix": z.string().optional() }).strict()).optional()
};
