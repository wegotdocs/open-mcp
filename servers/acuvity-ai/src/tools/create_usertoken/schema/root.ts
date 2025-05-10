import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "claims": z.array(z.string()).describe("The list of claims delivered in the token.").readonly().optional(),
  "clientType": z.enum(["None","WebExtension","Acushield","Acuctl"]).describe("the client type of the user token.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "email": z.string().describe("The email of the user who requested the token.").readonly().optional(),
  "expirationDate": z.string().datetime({ offset: true }).describe("Tells when the token will expire.").readonly().optional(),
  "machineID": z.string().describe("ID of the source machine that initiated the creation of the token.").optional(),
  "name": z.string().describe("Name of the token is specified while creating the token."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "sourceIP": z.string().describe("The source IP of the request that initiated the creation of the token.").readonly().optional(),
  "token": z.string().describe("The generated token. It won't be stored.").optional(),
  "tokenID": z.string().describe("The ID of the associated token.").readonly().optional(),
  "transient": z.boolean().describe("If true, the token will not be stored and will only be revocable if you keep\ntrack of the token ID yourself. Also, the validity will be capped and the token\nwon't be long lived.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "validity": z.string().describe("Configures the validity of the token.").optional()
}