import { z } from "zod"

export const toolName = `actions_get_github_actions_permissions_organization`
export const toolDescription = `Get GitHub Actions permissions for an organization`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/permissions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape