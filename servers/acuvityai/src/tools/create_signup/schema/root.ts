import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "email": z.string().describe("The email requesting the signup. This email can be considered valid and\nverified, as for the signup request to succeed, it must have been verified by\nsigning up with one of the oauth2 source we support.").readonly().optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "type": z.enum(["Employees","Apps"]).describe("The type of signup requested."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "verifiedBy": z.string().describe("The source of verification.").readonly().optional()
}