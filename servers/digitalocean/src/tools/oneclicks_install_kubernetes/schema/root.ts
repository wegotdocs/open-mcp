import { z } from "zod"

export const inputParams = {
  "addon_slugs": z.array(z.string()).describe("An array of 1-Click Application slugs to be installed to the Kubernetes cluster."),
  "cluster_uuid": z.string().describe("A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed.")
}