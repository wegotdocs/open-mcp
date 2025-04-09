import { z } from "zod"

export const inputParams = {
  "dashboardId": z.number().int().describe("The ID of the dashboard."),
  "color": z.string().describe("The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.").optional(),
  "ignoreUriAndModuleKeyValidation": z.boolean().describe("Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.").optional(),
  "moduleKey": z.string().describe("The module key of the gadget type. Can't be provided with `uri`.").optional(),
  "position": z.string().optional(),
  "title": z.string().describe("The title of the gadget.").optional(),
  "uri": z.string().describe("The URI of the gadget type. Can't be provided with `moduleKey`.").optional()
}