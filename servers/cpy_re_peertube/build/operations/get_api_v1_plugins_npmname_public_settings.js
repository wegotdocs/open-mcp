import { z } from "zod";
export const toolName = `get_api_v1_plugins_npmname_public_settings`;
export const toolDescription = `Get a plugin's public settings`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/plugins/{npmName}/public-settings`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "npmName": z.string().describe("name of the plugin/theme on npmjs.com or in its package.json") }).optional() }).shape;
