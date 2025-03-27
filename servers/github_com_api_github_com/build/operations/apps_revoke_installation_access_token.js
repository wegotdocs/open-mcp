import { z } from "zod";
export const toolName = `apps_revoke_installation_access_token`;
export const toolDescription = `Revoke an installation access token`;
export const baseUrl = `https://api.github.com`;
export const path = `/installation/token`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({}).shape;
