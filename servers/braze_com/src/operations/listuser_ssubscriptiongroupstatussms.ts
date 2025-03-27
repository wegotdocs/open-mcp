import { z } from "zod"

export const toolName = `listuser_ssubscriptiongroupstatussms`
export const toolDescription = `List User's  Subscription Group Status - SMS`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/subscription/status/get`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "subscription_group_id": z.string().describe("(Required) String\n\nThe `id` of your subscription group.").optional(), "external_id": z.string().describe("(Required*) String\n\nThe `external_id` of the user (must include at least one and at most 50 `external_ids`).\n\nOnly external_id or phone is accepted for SMS subscription groups\n").optional(), "phone": z.string().describe("(Required*) String\n\nThe phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.\n\nOnly external_id or phone is accepted for SMS subscription groups\n").optional() }).optional() }).shape