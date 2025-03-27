import { z } from "zod";
export const toolName = `actions_get_allowed_actions_organization`;
export const toolDescription = `Get allowed actions and reusable workflows for an organization`;
export const baseUrl = `https://api.github.com`;
export const path = `/orgs/{org}/actions/permissions/selected-actions`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape;
