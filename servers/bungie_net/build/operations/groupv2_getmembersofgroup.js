import { z } from "zod";
export const toolName = `groupv2_getmembersofgroup`;
export const toolDescription = `Get the list of members in a given group.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Members/`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "currentpage": z.number().int().describe("Page number (starting with 1). Each page has a fixed size of 50 items per page."), "memberType": z.number().int().describe("Filter out other member types. Use None for all members.").optional(), "nameSearch": z.string().describe("The name fragment upon which a search should be executed for members with matching display or unique names.").optional() }).optional(), "path": z.object({ "groupId": z.number().int().describe("The ID of the group.") }).optional() }).shape;
