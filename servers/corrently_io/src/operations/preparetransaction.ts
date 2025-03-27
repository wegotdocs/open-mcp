import { z } from "zod"

export const toolName = `preparetransaction`
export const toolDescription = `Prepare Transaction`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/stromkonto/prepareTransaction`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "account": z.string().describe("Stromkonto account address of sender").optional(), "signature": z.string().describe("Signature per Stromkonto setting (might be simple email confirmation link)").optional(), "to": z.string().describe("Stromkonto account address of reciever").optional(), "value": z.number().int().describe("Amount to transfer (in Watthours for electricity, or pcs for trees)").optional(), "variation": z.enum(["gsb","erzeugung","eigenstrom","co2","baeume"]).optional() }).optional() }).shape