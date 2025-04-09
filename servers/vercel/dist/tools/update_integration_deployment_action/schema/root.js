import { z } from "zod";
export const inputParams = {
    "deploymentId": z.string(),
    "integrationConfigurationId": z.string(),
    "resourceId": z.string(),
    "action": z.string(),
    "status": z.enum(["running", "succeeded", "failed"]).optional(),
    "statusText": z.string().optional(),
    "outcomes": z.array(z.object({ "kind": z.literal("resource-secrets"), "secrets": z.array(z.object({ "name": z.string(), "value": z.string() }).strict()) }).strict()).optional()
};
