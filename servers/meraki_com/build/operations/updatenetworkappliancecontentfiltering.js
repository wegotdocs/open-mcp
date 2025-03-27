import { z } from "zod";
export const toolName = `updatenetworkappliancecontentfiltering`;
export const toolDescription = `Update the content filtering settings for an MX network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/appliance/contentFiltering`;
export const method = `put`;
export const security = [
    {
        "key": "X-Cisco-Meraki-API-Key",
        "value": "<mcp-env-var>X_CISCO_MERAKI_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_CISCO_MERAKI_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Cisco-Meraki-API-Key"
    }
];
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "body": z.object({ "allowedUrlPatterns": z.array(z.string()).describe("A list of URL patterns that are allowed").optional(), "blockedUrlCategories": z.array(z.string()).describe("A list of URL categories to block").optional(), "blockedUrlPatterns": z.array(z.string()).describe("A list of URL patterns that are blocked").optional(), "urlCategoryListSize": z.enum(["fullList", "topSites"]).describe("URL category list size which is either 'topSites' or 'fullList'").optional() }).optional() }).shape;
