import { z } from "zod";
export const toolName = `post_updateaccountholderstate`;
export const toolDescription = `Update payout or processing state`;
export const baseUrl = `https://cal-test.adyen.com/cal/services/Account/v6`;
export const path = `/updateAccountHolderState`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "X-API-Key",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-API-Key"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "accountHolderCode",
        "disable",
        "reason",
        "stateType"
    ]
};
export const flatMap = {};
export const inputParams = {
    "accountHolderCode": z.string().describe("The code of the Account Holder on which to update the state."),
    "disable": z.boolean().describe("If true, disable the requested state.  If false, enable the requested state."),
    "reason": z.string().describe("The reason that the state is being updated.\n>Required if the state is being disabled.").optional(),
    "stateType": z.enum(["LimitedPayout", "LimitedProcessing", "LimitlessPayout", "LimitlessProcessing", "Payout", "Processing"]).describe("The state to be updated.\n>Permitted values are: `Processing`, `Payout`")
};
