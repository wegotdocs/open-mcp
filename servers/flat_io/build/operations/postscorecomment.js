import { z } from "zod";
export const toolName = `postscorecomment`;
export const toolDescription = `Post a new comment`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/scores/{score}/comments`;
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
export const inputParams = z.object({ "body": z.object({ "comment": z.string().describe("The comment text that can includes mentions using the following format: `@[id:username]`.\n"), "context": z.object({ "measureUuids": z.array(z.string()).describe("The list of measure UUIds"), "partUuid": z.string().describe("The unique identifier (UUID) of the score part"), "staffIdx": z.number().describe("(Deprecated, use `staffUuid`) The identififer of the staff").optional(), "staffUuid": z.string().describe("The unique identififer (UUID) of the staff").optional(), "startDpq": z.number(), "startTimePos": z.number(), "stopDpq": z.number(), "stopTimePos": z.number() }).describe("The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).\n").optional(), "mentions": z.array(z.string()).describe("The list of user identifiers mentioned in this comment").optional(), "rawComment": z.string().describe("A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.\n").optional(), "replyTo": z.string().describe("When the comment is a reply to another comment, the unique identifier of the parent comment\n").optional(), "revision": z.string().describe("The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains \"last\", the API will automatically take the last revision created.\n").optional() }).describe("Creation of a comment").optional() }).shape;
