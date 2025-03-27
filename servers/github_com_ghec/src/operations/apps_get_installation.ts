import { z } from "zod"

export const toolName = `apps_get_installation`
export const toolDescription = `Get an installation for the authenticated app`
export const baseUrl = `https://github.com`
export const path = `/app/installations/{installation_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "installation_id": z.number().int().describe("The unique identifier of the installation.") }).optional() }).shape