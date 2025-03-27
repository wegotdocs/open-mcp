import { z } from "zod";
export const toolName = `get_consumers_tenant_me_communication_preferences_type_`;
export const toolDescription = `Get channel subscriptions for a given consumer's communication preference type`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/consumers/{tenant}/me/communication-preferences/{type}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant."), "type": z.literal("marketing").describe("The type of communication preferences.") }).optional() }).shape;
