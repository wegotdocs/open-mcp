import { z } from "zod";
export const toolName = `actions_set_github_actions_permissions_organization`;
export const toolDescription = `Set GitHub Actions permissions for an organization`;
export const baseUrl = `https://github.com`;
export const path = `/orgs/{org}/actions/permissions`;
export const method = `put`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "body": z.object({ "allowed_actions": z.enum(["all", "local_only", "selected"]).describe("The permissions policy that controls the actions and reusable workflows that are allowed to run.").optional(), "enabled_repositories": z.enum(["all", "none", "selected"]).describe("The policy that controls the repositories in the organization that are allowed to run GitHub Actions.") }).optional() }).shape;
