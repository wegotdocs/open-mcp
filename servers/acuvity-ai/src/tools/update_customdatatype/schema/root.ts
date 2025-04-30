import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the custom data type.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "matches": z.array(z.string()).describe("A list of RE2 regular expressions used for data detection. Each expression can\ninclude zero or one capturing group. If no capturing group is present, detection\npositions will be determined based on the entire captured portion of the data.\nIf a single capturing group is included, the detection positions will correspond\nto the part defined by that group. However, if more than one capturing group is\nfound, the system will return a validation error. Additionally, extra\nvalidations are performed to ensure that the regular expressions are not overly\ncomplex, preventing any negative impact on detection engine performance.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}