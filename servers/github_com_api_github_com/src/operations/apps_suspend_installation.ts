import { z } from "zod"

export const toolName = `apps_suspend_installation`
export const toolDescription = `Suspend an app installation`
export const baseUrl = `https://api.github.com`
export const path = `/app/installations/{installation_id}/suspended`
export const method = `put`
export const security = []

export const inputParams = z.object({ "path": z.object({ "installation_id": z.number().int().describe("The unique identifier of the installation.") }).optional() }).shape