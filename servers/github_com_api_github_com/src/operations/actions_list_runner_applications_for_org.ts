import { z } from "zod"

export const toolName = `actions_list_runner_applications_for_org`
export const toolDescription = `List runner applications for an organization`
export const baseUrl = `https://api.github.com`
export const path = `/orgs/{org}/actions/runners/downloads`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape