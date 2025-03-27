import { z } from "zod";
export const toolName = `get_users_id_linked_type_`;
export const toolDescription = `Retrieve a users linked profile by type`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/users/{id}/linked/{type}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the user to return"), "type": z.string().describe("Type of the linked profile to fetch") }).optional() }).shape;
