import { z } from "zod";
export const toolName = `putfirewallconfig`;
export const toolDescription = `Put Firewall Configuration`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/security/firewall/config`;
export const method = `put`;
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
        "projectId",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "firewallEnabled",
        "managedRules",
        "crs",
        "rules",
        "ips"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.string(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "firewallEnabled": z.boolean(), "managedRules": z.record(z.union([z.any().refine((value) => !z.any().safeParse(value).success, "Invalid input: Should NOT be valid against schema"), z.object({ "active": z.boolean(), "action": z.enum(["log", "challenge", "deny"]).optional(), "ruleGroups": z.record(z.object({ "active": z.boolean().optional(), "action": z.enum(["log", "challenge", "deny"]).optional() }).strict()).optional() }).strict()])).optional(), "crs": z.object({ "sd": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "ma": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "lfi": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "rfi": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "rce": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "php": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "gen": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "xss": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "sqli": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "sf": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional(), "java": z.object({ "active": z.boolean(), "action": z.enum(["deny", "log"]) }).strict().optional() }).strict().optional(), "rules": z.array(z.object({ "id": z.string().optional(), "name": z.string().max(160), "description": z.string().max(256).optional(), "active": z.boolean(), "conditionGroup": z.array(z.object({ "conditions": z.array(z.object({ "type": z.enum(["host", "path", "method", "header", "query", "cookie", "target_path", "raw_path", "ip_address", "region", "protocol", "scheme", "environment", "user_agent", "geo_continent", "geo_country", "geo_country_region", "geo_city", "geo_as_number", "ja4_digest", "ja3_digest", "rate_limit_api_id"]), "op": z.enum(["re", "eq", "neq", "ex", "nex", "inc", "ninc", "pre", "suf", "sub", "gt", "gte", "lt", "lte"]), "neg": z.boolean().optional(), "key": z.string().optional(), "value": z.union([z.string(), z.array(z.string()).max(75), z.number()]).optional() }).strict()).max(65) }).strict()).max(25), "action": z.object({ "mitigate": z.object({ "action": z.enum(["log", "challenge", "deny", "bypass", "rate_limit", "redirect"]), "rateLimit": z.union([z.object({ "algo": z.enum(["fixed_window", "token_bucket"]), "window": z.number(), "limit": z.number(), "keys": z.array(z.string()), "action": z.union([z.enum(["log", "challenge", "deny", "rate_limit"]), z.null()]).optional() }).strict(), z.null()]).optional(), "redirect": z.union([z.object({ "location": z.string(), "permanent": z.boolean() }).strict(), z.null()]).optional(), "actionDuration": z.string().nullable().optional(), "bypassSystem": z.boolean().nullable().optional() }).strict().optional() }).strict() }).strict()).optional(), "ips": z.array(z.object({ "id": z.string().optional(), "hostname": z.string(), "ip": z.string(), "notes": z.string().optional(), "action": z.enum(["deny", "challenge", "log", "bypass"]) }).strict()).optional() }).shape;
