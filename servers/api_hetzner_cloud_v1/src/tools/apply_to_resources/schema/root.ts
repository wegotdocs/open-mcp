import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Firewall."),
  "apply_to": z.array(z.object({ "label_selector": z.object({ "selector": z.string().describe("Label selector | The selector.") }).describe("Configuration for type LabelSelector, required if type is `label_selector`").optional(), "server": z.object({ "id": z.number().int().lte(9007199254740991).describe("ID of the Server. | ID of the [Server](#servers). | ID of the Server") }).describe("ID of the Resource").optional(), "type": z.enum(["label_selector","server"]).describe("Type of the resource.") }).describe("Resource a Firewall should be applied to.")).describe("Resources to apply the [Firewall](#firewalls) to.\n\nExtends existing resources.\n")
}