import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "dataTypes": z.array(z.string()).describe("A list of all the data types which are associated to this data set.").optional(),
  "description": z.string().describe("Description of the custom data set.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}