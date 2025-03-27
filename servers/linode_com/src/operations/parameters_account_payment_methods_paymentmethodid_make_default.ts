import { z } from "zod"

export const toolName = `parameters_account_payment_methods_paymentmethodid_make_default`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/payment-methods/{paymentMethodId}/make-default`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape