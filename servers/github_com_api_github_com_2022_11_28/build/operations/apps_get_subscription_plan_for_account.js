import { z } from "zod";
export const toolName = `apps_get_subscription_plan_for_account`;
export const toolDescription = `Get a subscription plan for an account`;
export const baseUrl = `https://github.com`;
export const path = `/marketplace_listing/accounts/{account_id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "account_id": z.number().int().describe("account_id parameter") }).optional() }).shape;
