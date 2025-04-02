import { z } from "zod";
export const toolName = `updaterecord`;
export const toolDescription = `Update an existing DNS record`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/domains/records/{recordId}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "recordId"
    ],
    "cookie": [],
    "body": [
        "additionalProperties",
        "name",
        "value",
        "type",
        "ttl",
        "mxPriority",
        "srv",
        "https",
        "comment"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "recordId": z.string().describe("The id of the DNS record"), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "additionalProperties": z.any().optional(), "name": z.string().nullable().describe("The name of the DNS record").optional(), "value": z.string().nullable().describe("The value of the DNS record").optional(), "type": z.enum(["A", "AAAA", "ALIAS", "CAA", "CNAME", "HTTPS", "MX", "SRV", "TXT", "NS"]).nullable().describe("The type of the DNS record").optional(), "ttl": z.number().int().gte(60).lte(2147483647).nullable().describe("The Time to live (TTL) value of the DNS record").optional(), "mxPriority": z.number().int().nullable().describe("The MX priority value of the DNS record").optional(), "srv": z.object({ "target": z.string().max(255).nullable(), "weight": z.number().int().nullable(), "port": z.number().int().nullable(), "priority": z.number().int().nullable() }).strict().nullable().optional(), "https": z.object({ "priority": z.number().int().nullable(), "target": z.string().max(255).nullable(), "params": z.string().nullable().optional() }).strict().nullable().optional(), "comment": z.string().max(500).describe("A comment to add context on what this DNS record is for").optional() }).shape;
