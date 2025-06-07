import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "namespace": z.string(),
  "cluster": z.string(),
  "version": z.string(),
  "capabilities": z.array(z.enum(["environment_create","environment_delete","environment_update","image_update","kubectl_command","git_operation","health_check","release_update","custom"]).describe("Types of tasks agents can execute")),
  "metadata": z.union([z.record(z.any()), z.null()]).optional(),
  "pod_name": z.union([z.string(), z.null()]).optional(),
  "node_name": z.union([z.string(), z.null()]).optional()
}