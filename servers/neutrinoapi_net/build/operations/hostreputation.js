import { z } from "zod";
export const toolName = `hostreputation`;
export const toolDescription = `Host Reputation`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/host-reputation`;
export const method = `get`;
export const security = [
    {
        "key": "api-key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api-key"
    },
    {
        "key": "user-id",
        "value": "<mcp-env-var>USER_ID</mcp-env-var>",
        "in": "header",
        "envVarName": "USER_ID",
        "schemeType": "apiKey",
        "schemeName": "user-id"
    }
];
export const inputParams = z.object({ "query": z.object({ "host": z.string().describe("An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists"), "list-rating": z.number().int().describe("Only check lists with this rating or better"), "zones": z.string().describe("Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values").optional() }).optional() }).shape;
