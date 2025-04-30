import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("Name of the token. As token contents are hidden after creation, name allows a\nway to delete it."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "provider": z.string().describe("Name of the provider this token is used with."),
  "token": z.string().describe("token to authenticate with the provider."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}