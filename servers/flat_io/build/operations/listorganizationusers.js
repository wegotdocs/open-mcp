import { z } from "zod";
export const toolName = `listorganizationusers`;
export const toolDescription = `List the organization users`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/users`;
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
export const inputParams = z.object({ "query": z.object({ "sort": z.string().describe("The order to sort the user list").optional(), "direction": z.enum(["asc", "desc"]).describe("Sort direction").optional(), "next": z.string().describe("An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional(), "previous": z.string().describe("An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional(), "role": z.array(z.enum(["user", "teacher", "admin"])).describe("Filter users by role").optional(), "q": z.string().describe("The query to search").optional(), "group": z.array(z.string()).describe("Filter users by group").optional(), "noActiveLicense": z.boolean().describe("Filter users who don't have an active license").optional(), "licenseExpirationDate": z.array(z.string()).describe("Filter users by license expiration date or `active` / `notActive`").optional(), "onlyIds": z.boolean().describe("Return only user ids").optional(), "limit": z.number().int().gte(1).lte(1000).describe("This is the maximum number of objects that may be returned") }).optional() }).shape;
