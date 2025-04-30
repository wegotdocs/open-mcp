import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("Name of the PAC config. A special name is 'default'. The default pac will be the\none that APEX returns if nothing else is configured."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "providers": z.array(z.string()).describe("The list of providers to activate for that PAC config."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}