import { z } from "zod";
export const toolName = `getnetworkalertshistory`;
export const toolDescription = `Return the alert history for this network`;
export const baseUrl = `https://api.meraki.com/api/v1`;
export const path = `/networks/{networkId}/alerts/history`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "networkId": z.string() }).optional(), "query": z.object({ "perPage": z.number().int().describe("The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.").optional(), "startingAfter": z.string().describe("A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.").optional(), "endingBefore": z.string().describe("A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.").optional() }).optional() }).shape;
