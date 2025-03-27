import { z } from "zod"

export const toolName = `parameters_account_oauth_clients_clientid_`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/oauth-clients/{clientId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape