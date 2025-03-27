import { z } from "zod";
export const toolName = `voiceconversion`;
export const toolDescription = `Tell Nexmo if your voice call was successful`;
export const baseUrl = `https://api.nexmo.com/conversions`;
export const path = `/voice`;
export const method = `post`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    },
    {
        "key": "api_secret",
        "value": "<mcp-env-var>API_SECRET</mcp-env-var>",
        "in": "query",
        "envVarName": "API_SECRET",
        "schemeType": "apiKey",
        "schemeName": "api_secret"
    },
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    },
    {
        "key": "sig",
        "value": "<mcp-env-var>SIG</mcp-env-var>",
        "in": "query",
        "envVarName": "SIG",
        "schemeType": "apiKey",
        "schemeName": "sig"
    }
];
export const inputParams = z.object({ "query": z.object({ "message-id": z.string().describe("The ID you receive in the response to a request. * From the Verify API - use the `event_id` in the response to Verify Check. * From the SMS API - use the `message-id` * From the Text-To-Speech API - use the `call-id` * From the Text-To-Speech-Prompt API - use the `call-id`"), "delivered": z.union([z.literal(true), z.literal(false), z.literal(0), z.literal(1)]).describe("Set to _true_ if your user replied to the message you sent. Otherwise, set to _false_.\n**Note**: for curl, use 0 and 1."), "timestamp": z.string().describe("When the user completed your call-to-action (e.g. visited your website, installed your app) in [UTC±00:00](https://en.wikipedia.org/wiki/UTC%C2%B100:00) format: _yyyy-MM-dd HH:mm:ss_.\nIf you do not set this parameter, Nexmo uses the time it receives this request.") }).optional() }).shape;
