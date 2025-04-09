export { inputParams } from "./schema/root.js";
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
