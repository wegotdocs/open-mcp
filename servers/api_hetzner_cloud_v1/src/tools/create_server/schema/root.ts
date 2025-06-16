import { z } from "zod"

export const inputParamsSchema = {
  "automount": z.boolean().describe("Auto-mount Volumes after attach").optional(),
  "datacenter": z.string().describe("ID or name of Datacenter to create Server in (must not be used together with location)").optional(),
  "firewalls": z.array(z.object({ "firewall": z.number().int().describe("ID of the Firewall") })).describe("Firewalls which should be applied on the Server's public network interface at creation time").optional(),
  "image": z.string().describe("ID or name of the Image the Server is created from"),
  "labels": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `labels` to the tool, first call the tool `expandSchema` with \"/properties/labels\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User-defined labels (`key/value` pairs) for the Resource.\nFor more information, see \"[Labels](#labels)\".\n</property-description>").optional(),
  "location": z.string().describe("ID or name of Location to create Server in (must not be used together with datacenter)").optional(),
  "name": z.string().describe("Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123)"),
  "networks": z.array(z.number().int()).describe("Network IDs which should be attached to the Server private network interface at the creation time").optional(),
  "placement_group": z.number().int().describe("ID of the Placement Group the server should be in").optional(),
  "public_net": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `public_net` to the tool, first call the tool `expandSchema` with \"/properties/public_net\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Public Network options</property-description>").optional(),
  "server_type": z.string().describe("ID or name of the Server type this Server should be created with"),
  "ssh_keys": z.array(z.string()).describe("SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time").optional(),
  "start_after_create": z.boolean().describe("This automatically triggers a [Power on a Server-Server Action](#server-actions-power-on-a-server) after the creation is finished and is returned in the `next_actions` response object.").optional(),
  "user_data": z.string().describe("Cloud-Init user data to use during Server creation. This field is limited to 32KiB.").optional(),
  "volumes": z.array(z.number().int()).describe("Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.").optional()
}