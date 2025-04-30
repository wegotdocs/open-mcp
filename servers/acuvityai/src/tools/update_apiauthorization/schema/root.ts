import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the authorization rule.").optional(),
  "disabled": z.boolean().describe("When disabled, an API Authorization has no effect.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the authorization rule."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "permissions": z.array(z.string()).describe("The individual permissions. Only works if role is Custom.").optional(),
  "role": z.enum(["Administrator","Application","Custom","Employee","Owner","Proxy","Trial","Viewer"]).describe("The role for the subjects.").optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies the authorized user(s).").optional(),
  "targetNamespaces": z.array(z.string()).describe("Defines the namespace or namespaces in which the permission for subject should\napply. If empty, the object's namespace will be used.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}