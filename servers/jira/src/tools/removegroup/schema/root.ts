import { z } from "zod"

export const inputParamsSchema = {
  "groupname": z.string().optional(),
  "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupname` parameter.").optional(),
  "swapGroup": z.string().describe("As a group's name can change, use of `swapGroupId` is recommended to identify a group.  \nThe group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter.").optional(),
  "swapGroupId": z.string().describe("The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter.").optional()
}