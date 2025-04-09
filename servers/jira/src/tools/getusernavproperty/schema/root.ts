import { z } from "zod"

export const inputParams = {
  "propertyKey": z.string().describe("The key of the user's property."),
  "accountId": z.string().max(128).describe("The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional()
}