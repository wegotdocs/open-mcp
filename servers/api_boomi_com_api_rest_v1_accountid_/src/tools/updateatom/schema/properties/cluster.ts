import { z } from "zod"

export const inputParamsSchema = {
  "node": z.array(z.object({ "clusterProblem": z.string().describe("Lists any issues reported for nodes."), "hostName": z.string().describe("Displays the external host name or IP of the machine where the node currently lives."), "nodeId": z.string().describe("Displays the unique identifier associated with a particular node in the Runtime cluster or Runtime cloud. A star icon indicates the cluster's head node."), "status": z.string().describe("Lists the nodes in the Runtime cluster or Runtime cloud and displays some basic information about each node. By default, the nodes are sorted by `status`. You can sort the list by `status`, `nodeId`, or `hostName`.") })).optional()
}