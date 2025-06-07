import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "b_agent_id": z.string(),
  "cluster": z.string(),
  "timestamp": z.string().datetime({ offset: true }).optional(),
  "entries": z.array(z.object({ "timestamp": z.string().datetime({ offset: true }), "user": z.string(), "verb": z.string(), "object_kind": z.string(), "object_name": z.string(), "object_namespace": z.union([z.string(), z.null()]).optional(), "source_ip": z.union([z.string(), z.null()]).optional(), "user_agent": z.union([z.string(), z.null()]).optional(), "response_status": z.union([z.number().int(), z.null()]).optional(), "request_uri": z.union([z.string(), z.null()]).optional() }).describe("Kubernetes audit log entry")),
  "start_time": z.string().datetime({ offset: true }),
  "end_time": z.string().datetime({ offset: true })
}