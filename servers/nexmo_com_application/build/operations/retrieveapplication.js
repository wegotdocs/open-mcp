import { z } from "zod";
export const toolName = `retrieveapplication`;
export const toolDescription = `Retrieve Application`;
export const baseUrl = `https://api.nexmo.com/v1/applications`;
export const path = `/{app_id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "api_key": z.string().describe("You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)"), "api_secret": z.string().describe("You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)") }).optional(), "path": z.object({ "app_id": z.string().describe("The ID allocated to your application by Nexmo.") }).optional() }).shape;
