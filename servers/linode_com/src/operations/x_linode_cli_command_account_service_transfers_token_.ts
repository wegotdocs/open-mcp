import { z } from "zod"

export const toolName = `x_linode_cli_command_account_service_transfers_token_`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/service-transfers/{token}`
export const method = `x-linode-cli-command`
export const security = []

export const inputParams = z.object({}).shape