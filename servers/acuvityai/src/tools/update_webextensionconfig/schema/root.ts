import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowProxySettings": z.boolean().describe("Allows the web extension to set the proxy settings of the employee's browser.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the webextension configuration.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "name": z.string().describe("The name of the webextension configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "refreshWebExtensionConfigInterval": z.number().int().describe("Defines the refresh interval in minutes for the configuration of the deployed\nweb extensions.").optional(),
  "reportVisitedURLsInterval": z.number().int().describe("Define the interval in minutes between two reports of the visited URLs.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}