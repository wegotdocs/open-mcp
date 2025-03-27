import { z } from "zod";
export const toolName = `post_oauth_live_session_token`;
export const toolDescription = `Obtain a live session token`;
export const baseUrl = `https://www.interactivebrokers.com/tradingapi/v1`;
export const path = `/oauth/live_session_token`;
export const method = `post`;
export const security = [
    {
        "key": "portal",
        "value": "<mcp-env-var>PORTAL</mcp-env-var>",
        "in": "header",
        "envVarName": "PORTAL",
        "schemeType": "apiKey",
        "schemeName": "portal"
    }
];
export const inputParams = z.object({ "body": z.object({ "diffie_hellman_challenge": z.string().describe("Challenge value calculated using the Diffie-Hellman prime and generated provided during the registration process. See the \"OAuth at Interactive Brokers\" document for more details. \n").optional(), "oauth_consumer_key": z.string().describe("The 25-character hexadecimal string that was obtained from Interactive Brokers during the OAuth consumer registration process.").optional(), "oauth_nonce": z.string().describe("A random string uniquely generated for each request.").optional(), "oauth_signature": z.string().describe("The signature for the request generated using the method specified in the oauth_signature_method parameter. See section 9 of the OAuth v1.0a specification for more details on signing requests.").optional(), "oauth_signature_method": z.string().describe("The signature method used to sign the request. Currently only 'RSA-SHA256' is supported.").optional(), "oauth_timestamp": z.string().describe("Timestamp expressed in seconds since 1/1/1970 00:00:00 GMT. Must be a positive integer and greater than or equal to any timestamp used in previous requests.").optional(), "oauth_token": z.string().describe("The request token obtained from IB via /request_token.").optional() }).optional() }).shape;
