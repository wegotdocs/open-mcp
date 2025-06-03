import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().regex(new RegExp("^[a-zA-Z0-9._]+$")).max(64).describe("The name of the cluster."),
  "groupId": z.string().uuid().max(36).describe("The ID of the group associated with the cluster. \nTo get IDs of the groups within the user's management scope, use the Kubernetes cluster groups API to list these IDs."),
  "description": z.string().max(128).describe("The description of the cluster").optional(),
  "policyId": z.string().max(128).describe("The ID of the policy associated with the cluster. ").optional(),
  "resourceId": z.string().max(160).describe("The ID of the cluster of a different cloud provider").optional()
}