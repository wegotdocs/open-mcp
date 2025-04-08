import { z } from "zod";
export const toolName = `setlocale`;
export const toolDescription = `Set locale`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/mypreferences/locale`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "locale"
    ]
};
export const flatMap = {};
export const inputParams = {
    "locale": z.string().describe("The locale code. The Java the locale format is used: a two character language code (ISO 639), an underscore, and two letter country code (ISO 3166). For example, en\\_US represents a locale of English (United States). Required on create.").optional()
};
