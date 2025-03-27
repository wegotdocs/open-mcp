import { z } from "zod";
export const toolName = `_getglobalalerts`;
export const toolDescription = `Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GlobalAlerts/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "includestreaming": z.boolean().describe("Determines whether Streaming Alerts are included in results").optional() }).optional() }).shape;
