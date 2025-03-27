import { z } from "zod";
export const toolName = `groupv2_abdicatefoundership`;
export const toolDescription = `An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.`;
export const baseUrl = `https://www.bungie.net/Platform`;
export const path = `/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "founderIdNew": z.number().int().describe("The new founder for this group. Must already be a group admin."), "groupId": z.number().int().describe("The target group id."), "membershipType": z.number().int().describe("Membership type of the provided founderIdNew.") }).optional() }).shape;
