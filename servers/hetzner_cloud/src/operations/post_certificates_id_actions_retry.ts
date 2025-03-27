import { z } from "zod"

export const toolName = `post_certificates_id_actions_retry`
export const toolDescription = `Retry Issuance or Renewal`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/certificates/{id}/actions/retry`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Certificate") }).optional() }).shape