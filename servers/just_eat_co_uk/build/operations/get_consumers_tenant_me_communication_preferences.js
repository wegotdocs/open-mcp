import { z } from "zod";
export const toolName = `get_consumers_tenant_me_communication_preferences`;
export const toolDescription = `Get communication preferences`;
export const baseUrl = `https://uk.api.just-eat.io`;
export const path = `/consumers/{tenant}/me/communication-preferences`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "tenant": z.string().describe("Request tenant.") }).optional() }).shape;
