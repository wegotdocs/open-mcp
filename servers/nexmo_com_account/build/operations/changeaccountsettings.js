import { z } from "zod";
export const toolName = `changeaccountsettings`;
export const toolDescription = `Change Account Settings`;
export const baseUrl = `https://api.nexmo.com`;
export const path = `/account/settings`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("Your Vonage API key. You can find this in the [dashboard](https://dashboard.nexmo.com)"), "api_secret": z.string().describe("Your Vonage API secret. You can find this in the [dashboard](https://dashboard.nexmo.com)") }).optional() }).shape;
