import { z } from "zod"

export const toolName = `searchvideos`
export const toolDescription = `Search videos`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/search/videos`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "search": z.string().describe("String to search. If the user can make a remote URI search, and the string is an URI then the PeerTube instance will fetch the remote object and add it to its database. Then, you can use the REST API to fetch the complete video information and interact with it.\n"), "categoryOneOf": z.any().superRefine((x, ctx) => {
    const schemas = [z.number().int().describe("category id of the video (see [/videos/categories](#operation/getCategories))"), z.array(z.number().int().describe("category id of the video (see [/videos/categories](#operation/getCategories))"))];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
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
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
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
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
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
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
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
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }).describe("language id of the video (see [/videos/languages](#operation/getLanguages)). Use `_unknown` to filter on videos that don't have a video language").optional(), "nsfw": z.enum(["true","false"]).describe("whether to include nsfw videos, if any").optional(), "isLocal": z.boolean().describe("**PeerTube >= 4.0** Display only local or remote videos").optional(), "include": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(4), z.literal(8)]).describe("**PeerTube >= 4.0** Include additional videos in results (can be combined using bitwise or operator)\n- `0` NONE\n- `1` NOT_PUBLISHED_STATE\n- `2` BLACKLISTED\n- `4` BLOCKED_OWNER\n- `8` FILES\n").optional(), "privacyOneOf": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).describe("privacy id of the video (see [/videos/privacies](#operation/getPrivacyPolicies))").optional(), "uuids": z.any().describe("Find videos with specific UUIDs").optional(), "hasHLSFiles": z.boolean().describe("**PeerTube >= 4.0** Display only videos that have HLS files").optional(), "hasWebtorrentFiles": z.boolean().describe("**PeerTube >= 4.0** Display only videos that have WebTorrent files").optional(), "skipCount": z.enum(["true","false"]).describe("if you don't need the `total` in the response"), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "searchTarget": z.enum(["local","search-index"]).describe("If the administrator enabled search index support, you can override the default search target.\n\n**Warning**: If you choose to make an index search, PeerTube will get results from a third party service. It means the instance may not yet know the objects you fetched. If you want to load video/channel information:\n  * If the current user has the ability to make a remote URI search (this information is available in the config endpoint),\n  then reuse the search API to make a search using the object URI so PeerTube instance fetches the remote object and fill its database.\n  After that, you can use the classic REST API endpoints to fetch the complete object or interact with it\n  * If the current user doesn't have the ability to make a remote URI search, then redirect the user on the origin instance or fetch\n  the data from the origin instance API\n").optional(), "sort": z.enum(["name","-duration","-createdAt","-publishedAt","-views","-likes","-match"]).describe("Sort videos by criteria (prefixing with `-` means `DESC` order):\n").optional(), "startDate": z.string().datetime({ offset: true }).describe("Get videos that are published after this date").optional(), "endDate": z.string().datetime({ offset: true }).describe("Get videos that are published before this date").optional(), "originallyPublishedStartDate": z.string().datetime({ offset: true }).describe("Get videos that are originally published after this date").optional(), "originallyPublishedEndDate": z.string().datetime({ offset: true }).describe("Get videos that are originally published before this date").optional(), "durationMin": z.number().int().describe("Get videos that have this minimum duration").optional(), "durationMax": z.number().int().describe("Get videos that have this maximum duration").optional() }).optional() }).shape