import { z } from "zod"

export const toolName = `subaccountedit`
export const toolDescription = `Edit a subaccount`
export const baseUrl = `https://apirest.isendpro.com/cgi-bin`
export const path = `/subaccount`
export const method = `put`
export const security = []

export const inputParams = z.object({ "body": z.object({ "keyid": z.string().describe("Clé API"), "subAccountAddCredit": z.string().describe("montant du crédit à ajouter").optional(), "subAccountCountryCode": z.string().optional(), "subAccountEdit": z.enum(["setPrice","addCredit","setRestriction"]).describe("action à réaliser soit setPrice pour définir un prix ou addCredit pour ajouter du credit ou setRestriction modifier la restriction stop /"), "subAccountKeyId": z.string().describe("keyid du sous-compte").optional(), "subAccountPrice": z.string().optional(), "subAccountRestrictionStop": z.enum(["0","1"]).optional(), "subAccountRestrictionTime": z.enum(["0","1"]).optional() }).optional() }).shape