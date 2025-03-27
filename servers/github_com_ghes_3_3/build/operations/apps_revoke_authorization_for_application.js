import { z } from "zod";
export const toolName = `apps_revoke_authorization_for_application`;
export const toolDescription = `Revoke an authorization for an application`;
export const baseUrl = `https://github.com`;
export const path = `/applications/{client_id}/tokens/{access_token}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "client_id": z.string().describe("The client ID of the GitHub app."), "access_token": z.string() }).optional() }).shape;
