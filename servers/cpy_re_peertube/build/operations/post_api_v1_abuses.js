import { z } from "zod";
export const toolName = `post_api_v1_abuses`;
export const toolDescription = `Report an abuse`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/abuses`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "account": z.object({ "id": z.number().int().describe("Account id to report").optional() }).optional(), "comment": z.object({ "id": z.string().optional() }).optional(), "predefinedReasons": z.array(z.enum(["violentOrAbusive", "hatefulOrAbusive", "spamOrMisleading", "privacy", "rights", "serverRules", "thumbnails", "captions"])).max(8).describe("Reason categories that help triage reports").optional(), "reason": z.string().min(2).max(3000).describe("Reason why the user reports this video"), "video": z.object({ "endAt": z.number().int().gte(0).describe("Timestamp in the video that marks the ending of the report").optional(), "id": z.string().optional(), "startAt": z.number().int().gte(0).describe("Timestamp in the video that marks the beginning of the report").optional() }).optional() }).optional() }).shape;
