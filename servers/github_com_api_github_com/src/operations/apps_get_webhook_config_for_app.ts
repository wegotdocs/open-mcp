import { z } from "zod"

export const toolName = `apps_get_webhook_config_for_app`
export const toolDescription = `Get a webhook configuration for an app`
export const baseUrl = `https://api.github.com`
export const path = `/app/hook/config`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape