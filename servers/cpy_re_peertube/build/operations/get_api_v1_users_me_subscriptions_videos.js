import { z } from "zod";
export const toolName = `get_api_v1_users_me_subscriptions_videos`;
export const toolDescription = `List videos of subscriptions of my user`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/subscriptions/videos`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "categoryOneOf": z.any().superRefine((x, ctx) => {
            const schemas = [z.number().int().describe("category id of the video (see [/videos/categories](#operation/getCategories))"), z.array(z.number().int().describe("category id of the video (see [/videos/categories](#operation/getCategories))"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).describe("category id of the video (see [/videos/categories](#operation/getCategories))").optional(), "isLive": z.boolean().describe("whether or not the video is a live").optional(), "tagsOneOf": z.any().superRefine((x, ctx) => {
            const schemas = [z.string(), z.array(z.string()).max(5)];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).describe("tag(s) of the video").optional(), "tagsAllOf": z.any().superRefine((x, ctx) => {
            const schemas = [z.string(), z.array(z.string())];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).describe("tag(s) of the video, where all should be present in the video").optional(), "licenceOneOf": z.any().superRefine((x, ctx) => {
            const schemas = [z.number().int().describe("licence id of the video (see [/videos/licences](#operation/getLicences))"), z.array(z.number().int().describe("licence id of the video (see [/videos/licences](#operation/getLicences))"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).describe("licence id of the video (see [/videos/licences](#operation/getLicences))").optional(), "languageOneOf": z.any().superRefine((x, ctx) => {
            const schemas = [z.string().describe("language id of the video (see [/videos/languages](#operation/getLanguages))"), z.array(z.string().describe("language id of the video (see [/videos/languages](#operation/getLanguages))"))];
            const errors = schemas.reduce((errors, schema) => ((result) => result.error ? [...errors, result.error] : errors)(schema.safeParse(x)), []);
            if (schemas.length - errors.length !== 1) {
                ctx.addIssue({
                    path: ctx.path,
                    code: "invalid_union",
                    unionErrors: errors,
                    message: "Invalid input: Should pass single schema",
                });
            }
        }).describe("language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language").optional(), "nsfw": z.enum(["true", "false"]).describe("whether to include nsfw videos, if any").optional(), "isLocal": z.boolean().describe("**PeerTube >= 4.0** Display only local or remote videos").optional(), "include": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8)]).describe("**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)\n- `0` NONE\n- `1` NOT_PUBLISHED_STATE\n- `2` BLACKLISTED\n- `4` BLOCKED_OWNER\n- `8` FILES\n").optional(), "privacyOneOf": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe("privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))").optional(), "hasHLSFiles": z.boolean().describe("**PeerTube >= 4.0** Display only videos that have HLS files").optional(), "hasWebtorrentFiles": z.boolean().describe("**PeerTube >= 4.0** Display only videos that have WebTorrent files").optional(), "skipCount": z.enum(["true", "false"]).describe("if you don't need the `total` in the response"), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.enum(["name", "-duration", "-createdAt", "-publishedAt", "-views", "-likes", "-trending", "-hot", "-best"]).describe("Sort videos by criteria (prefixing with `-` means `DESC` order):\n  * `hot` - Adaptation of Reddit \"hot\" algorithm taking into account video views, likes, dislikes and comments and publication date\n  * `best` - Same than `hot`, but also takes into account user video history\n  * `trending` - Sort videos by recent views (\"recent\" is defined by the admin)\n  * `views` - Sort videos using their `views` counter\n  * `publishedAt` - Sort by video publication date (when it became publicly available)\n").optional() }).optional() }).shape;
