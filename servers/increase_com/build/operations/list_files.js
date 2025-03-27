import { z } from "zod";
export const toolName = `list_files`;
export const toolDescription = `List Files`;
export const baseUrl = `https://api.increase.com`;
export const path = `/files`;
export const method = `get`;
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
export const inputParams = z.object({ "query": z.object({ "cursor": z.string().describe("Return the page of entries after this one.").optional(), "limit": z.number().int().gte(0).describe("Limit the size of the list that is returned. The default (and maximum) is 100 objects.").optional(), "created_at.after": z.string().datetime({ offset: true }).describe("Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.before": z.string().datetime({ offset: true }).describe("Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_after": z.string().datetime({ offset: true }).describe("Return results on or after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "created_at.on_or_before": z.string().datetime({ offset: true }).describe("Return results on or before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.").optional(), "purpose.in": z.array(z.enum(["check_image_front", "check_image_back", "form_1099_int", "form_ss_4", "identity_document", "increase_statement", "other", "trust_formation_document", "digital_wallet_artwork", "digital_wallet_app_icon", "entity_supplemental_document"])).describe("Return results whose value is in the provided list. For GET requests, this should be encoded as a comma-delimited string, such as `?in=one,two,three`.").optional() }).optional() }).shape;
