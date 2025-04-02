import { z } from "zod";
export const toolName = `createlogdrain`;
export const toolDescription = `Creates a new Integration Log Drain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v2/integrations/log-drains`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "name",
        "projectIds",
        "secret",
        "deliveryFormat",
        "url",
        "sources",
        "headers",
        "environments"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "name": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("The name of the log drain"), "projectIds": z.array(z.string().regex(new RegExp("^[a-zA-z0-9_]+$"))).min(1).max(50).optional(), "secret": z.string().regex(new RegExp("^[A-z0-9_ -]+$")).max(100).describe("A secret to sign log drain notification headers so a consumer can verify their authenticity").optional(), "deliveryFormat": z.enum(["json", "ndjson", "syslog"]).describe("The delivery log format").optional(), "url": z.string().url().regex(new RegExp("^(https?|syslog\\\\+tls|syslog)://")).describe("The url where you will receive logs. The protocol must be `https://` or `http://` when type is `json` and `ndjson`, and `syslog+tls:` or `syslog:` when the type is `syslog`."), "sources": z.array(z.enum(["static", "lambda", "build", "edge", "external", "firewall"])).min(1).optional(), "headers": z.record(z.string()).describe("Headers to be sent together with the request").optional(), "environments": z.array(z.enum(["preview", "production"])).min(1).optional() }).shape;
