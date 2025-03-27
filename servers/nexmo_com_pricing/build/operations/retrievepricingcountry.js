import { z } from "zod";
export const toolName = `retrievepricingcountry`;
export const toolDescription = `Retrieve outbound pricing for a specific country.`;
export const baseUrl = `https://rest.nexmo.com/account`;
export const path = `/get-pricing/outbound/{type}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "type": z.string().describe("The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.") }).optional(), "query": z.object({ "api_key": z.string().describe("Your Nexmo API key."), "api_secret": z.string().describe("Your Nexmo API secret."), "country": z.string().describe("A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.") }).optional() }).shape;
