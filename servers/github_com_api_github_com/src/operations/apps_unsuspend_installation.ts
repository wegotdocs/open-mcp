import { z } from "zod"

export const toolName = `apps_unsuspend_installation`
export const toolDescription = `Unsuspend an app installation`
export const baseUrl = `https://api.github.com`
export const path = `/app/installations/{installation_id}/suspended`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "installation_id": z.number().int().describe("The unique identifier of the installation.") }).optional() }).shape