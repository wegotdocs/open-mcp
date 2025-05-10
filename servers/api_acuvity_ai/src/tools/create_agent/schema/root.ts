import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "agentConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `agentConfig` to the tool, first call the tool `expandSchema` with \"/properties/agentConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>AgentConfig stores the configuration information for the acushield agent.</property-description>").optional(),
  "currentVersion": z.string().describe("The current version of the agent."),
  "hostname": z.string().describe("The name of the host where the agent is runnning."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "isAPEXReachable": z.boolean().describe("True if the apex is reachable.").optional(),
  "isAPEXTrusted": z.boolean().describe("True if the apex is trusted.").optional(),
  "managedCAState": z.boolean().describe("The state of the managed CA.").optional(),
  "managedInterfaces": z.array(z.string()).describe("The list of managed interfaces.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "ping": z.string().datetime({ offset: true }).describe("The last ping recorded for the agent."),
  "principal": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `principal` to the tool, first call the tool `expandSchema` with \"/properties/principal\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describe the principal.</property-description>"),
  "start": z.string().datetime({ offset: true }).describe("The start time for the agent."),
  "status": z.enum(["Alive","Stopped"]).describe("The status of the agent."),
  "systemProxyManagementState": z.boolean().describe("The state of the system proxy management.").optional()
}