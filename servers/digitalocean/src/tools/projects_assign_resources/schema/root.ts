import { z } from "zod"

export const inputParams = {
  "project_id": z.string().uuid().describe("A unique identifier for a project."),
  "resources": z.array(z.string().regex(new RegExp("^do:(dbaas|domain|droplet|floatingip|loadbalancer|space|volume|kubernetes|vpc):.*")).describe("The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.")).describe("A list of uniform resource names (URNs) to be added to a project.").optional()
}