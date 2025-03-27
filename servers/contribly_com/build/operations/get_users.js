import { z } from "zod";
export const toolName = `get_users`;
export const toolDescription = `List users`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/users`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "assignment": z.string().describe("Restrict results to the users who have contributed to this assignment.").optional(), "country": z.string().describe("Restrict results to the users who have submitted a contribution with a public location located within this country.").optional(), "minimumContributions": z.number().describe("Restrict results to the users who have submitted at least this many contributions.").optional(), "linkedProfile": z.string().describe("Restrict results to the users who a linked profile of this type.").optional(), "ownedBy": z.string().describe("Restrict results to the users who are owned by of this owner.").optional(), "submittedBefore": z.string().datetime({ offset: true }).describe("Limit results to users who have submitted at least one contribution before this date time.").optional(), "submittedAfter": z.string().datetime({ offset: true }).describe("Limit results to users who have submitted at least one contribution after this date time.").optional(), "username": z.string().describe("Restrict results to the user with this username.").optional() }).optional() }).shape;
