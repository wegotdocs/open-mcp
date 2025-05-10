import { z } from "zod"

export const inputParamsSchema = {
  "DNSMonitorEnabled": z.boolean().describe("If enabled, the agent will monitor DNS traffic.").optional(),
  "DNSMonitorPolicy": z.enum(["Warn","Enforce"]).describe("What action to take if the DNS monitor cannot start when enabled. Enforce will\nstop the agent with an error, while Warn will post a log and continue on.").optional(),
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "allowedPauseInterval": z.string().describe("An administrator can set this for users to pause enforcement for this interval.\nA value of 0s means that users are not allowed to pause the enforcement.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the agent configuration.").optional(),
  "disableManagedCA": z.boolean().describe("If disabled, the agent will rely on the CA already installed and trusted on the\nsystem.").optional(),
  "disableSystemProxyManagement": z.boolean().describe("If disabled, the system proxy needs to be configured manually.").optional(),
  "disableURLDiscovery": z.boolean().describe("If disabled, the agent will stop reporting the visited domains.").optional(),
  "enablePause": z.boolean().describe("If enabled, the agent will have the ability to pause enforcement.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "listeningPort": z.string().describe("The port use by the agent to proxy the traffic."),
  "name": z.string().describe("The name of the agent configuration."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "pacName": z.string().describe("The name of the PAC configuration to use.").optional(),
  "pingInterval": z.string().describe("The ping interval at which acushield should check in with the backend.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional(),
  "useDynamicPort": z.boolean().describe("If system proxy management is enabled and this flag is enabled, the system\ncan take another port, different that the listeningPort.").optional()
}