import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "key": z.string().describe("Key of the storage."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "value": z.string().describe("Value of the storage.")
}