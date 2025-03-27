import { z } from "zod";
export const toolName = `post_comments`;
export const toolDescription = `Create comment`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/comments`;
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
export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "body": z.object({ "item": z.object({ "id": z.string().describe("The ID of the item"), "type": z.enum(["file", "comment"]).describe("The type of the item that this comment will be placed on.") }).describe("The item to attach the comment to.").optional(), "message": z.string().describe("The text of the comment.\n\nTo mention a user, use the `tagged_message`\nparameter instead."), "tagged_message": z.string().describe("The text of the comment, including `@[user_id:name]`\nsomewhere in the message to mention another user, which\nwill send them an email notification, letting them know\nthey have been mentioned.\n\nThe `user_id` is the target user's ID, where the `name`\ncan be any custom phrase. In the Box UI this name will\nlink to the user's profile.\n\nIf you are not mentioning another user, use `message`\ninstead.").optional() }).optional() }).shape;
