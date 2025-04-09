import { z } from "zod"

export const inputParams = {
  "schemeId": z.number().int().describe("The ID of the permission scheme to delete the permission grant from."),
  "permissionId": z.number().int().describe("The ID of the permission grant to delete.")
}