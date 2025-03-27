import { z } from "zod"

export const toolName = `parameters_account_oauth_clients_clientid_thumbnail`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/oauth-clients/{clientId}/thumbnail`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape