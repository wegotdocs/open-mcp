import { z } from "zod"

export const toolName = `parameters_account_payments_paymentid_`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/payments/{paymentId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape