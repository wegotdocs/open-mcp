import { z } from "zod"

export const toolName = `actions_create_registration_token_for_org`
export const toolDescription = `Create a registration token for an organization`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}/actions/runners/registration-token`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape