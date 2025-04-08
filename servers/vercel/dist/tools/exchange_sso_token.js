import { z } from "zod";
export const toolName = `exchange_sso_token`;
export const toolDescription = `SSO Token Exchange`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/integrations/sso/token`;
export const method = `post`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "code",
        "state",
        "client_id",
        "client_secret",
        "redirect_uri"
    ]
};
export const flatMap = {};
export const inputParams = {
    "code": z.string().describe("The sensitive code received from Vercel"),
    "state": z.string().describe("The state received from the initialization request").optional(),
    "client_id": z.string().describe("The integration client id"),
    "client_secret": z.string().describe("The integration client secret"),
    "redirect_uri": z.string().describe("The integration redirect URI").optional()
};
