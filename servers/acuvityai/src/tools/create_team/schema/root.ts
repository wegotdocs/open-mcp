import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the team.").optional(),
  "disabled": z.boolean().describe("Set the team to be disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the team."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "subject": z.array(z.array(z.string())).describe("A tag expression that identifies user(s).").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "weight": z.number().int().describe("Weight of the team. It is used if multiple teams match for a user. In that case\nthe team with the higher weight will be used.").optional()
}