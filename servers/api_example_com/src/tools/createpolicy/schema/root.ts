import { z } from "zod"

export const inputParamsSchema = {
  "mode": z.enum(["NEW","CHILD","COPY"]).describe("Policy creation mode").optional(),
  "templatePolicyId": z.number().int().describe("Template Policy identifier").optional(),
  "parentPolicyId": z.number().int().describe("Parent Policy identifier").optional(),
  "name": z.string().describe("Name").optional(),
  "description": z.string().describe("Description").optional(),
  "nodeClass": z.enum(["WINDOWS_SERVER","WINDOWS_WORKSTATION","LINUX_WORKSTATION","MAC","ANDROID","APPLE_IOS","APPLE_IPADOS","VMWARE_VM_HOST","VMWARE_VM_GUEST","HYPERV_VMM_HOST","HYPERV_VMM_GUEST","LINUX_SERVER","MAC_SERVER","CLOUD_MONITOR_TARGET","NMS_SWITCH","NMS_ROUTER","NMS_FIREWALL","NMS_PRIVATE_NETWORK_GATEWAY","NMS_PRINTER","NMS_SCANNER","NMS_DIAL_MANAGER","NMS_WAP","NMS_IPSLA","NMS_COMPUTER","NMS_VM_HOST","NMS_APPLIANCE","NMS_OTHER","NMS_SERVER","NMS_PHONE","NMS_VIRTUAL_MACHINE","NMS_NETWORK_MANAGEMENT_AGENT"]).describe("Node Class").optional(),
  "enabled": z.boolean().describe("Policy Enabled Flag").optional()
}