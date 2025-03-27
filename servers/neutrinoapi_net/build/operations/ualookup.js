import { z } from "zod";
export const toolName = `ualookup`;
export const toolDescription = `UA Lookup`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/ua-lookup`;
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
export const inputParams = z.object({ "query": z.object({ "ua": z.string().describe("The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'"), "ua-version": z.string().describe("For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData").optional(), "ua-platform": z.string().describe("For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData").optional(), "ua-platform-version": z.string().describe("For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData").optional(), "ua-mobile": z.string().describe("For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData").optional(), "device-model": z.string().describe("For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL").optional(), "device-brand": z.string().describe("This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER").optional() }).optional() }).shape;
