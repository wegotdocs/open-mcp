import { z } from "zod";
export const toolName = `put_restaurants_tenant_restaurantid_customerclaims_id_restaurant`;
export const toolDescription = `Add reason and comments to the response`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/restaurants/{tenant}/{restaurantId}/customerclaims/{id}/restaurantresponse/justification`;
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
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Two letter code indicating the tenant"), "restaurantId": z.string().describe("Just Eat restaurant identifier"), "id": z.string().describe("Claim identifier") }).optional(), "header": z.object({ "Content-Type": z.string().describe("Indicates the representation of the request body the client is sending (including version)") }).optional(), "body": z.object({ "comments": z.string().nullable().describe("Comment from the restaurant owner in case they rejected at least one of the items and want to type their own rejection reason").optional(), "reason": z.enum(["AlreadyRefunded", "ItemReplaced", "PartialRefundRequired", "WasNotMissing", "WillRedeliver", "OrderWasHot", "OrderWasOnTime", "OrderWasPacked", "FoodWasIntact", "AddExtraItem", "Other"]).describe("One of the predefined reasons").optional() }).nullable().describe("The reason of the claim rejection and optional comments from the restaurant").optional() }).shape;
