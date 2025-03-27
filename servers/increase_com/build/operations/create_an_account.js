import { z } from "zod";
export const toolName = `create_an_account`;
export const toolDescription = `Create an Account`;
export const baseUrl = `https://api.increase.com`;
export const path = `/accounts`;
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
export const inputParams = z.object({ "body": z.object({ "entity_id": z.string().describe("The identifier for the Entity that will own the Account.").optional(), "informational_entity_id": z.string().describe("The identifier of an Entity that, while not owning the Account, is associated with its activity. Its relationship to your group must be `informational`.").optional(), "name": z.string().min(1).max(200).describe("The name you choose for the Account.") }).optional() }).shape;
