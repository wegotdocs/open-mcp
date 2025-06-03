import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier of a Workbench alert"),
  "status": z.enum(["Open","In Progress","Closed"]).describe("The status of a case or investigation.").optional(),
  "investigationResult": z.enum(["No Findings","Noteworthy","True Positive","False Positive","Benign True Positive","Other Findings"]).describe("The findings of a case or investigation.").optional(),
  "If-Match": z.string().describe("The ETag of the resource you want to update.\n\nNote: The resource is updated only if the provided value matches the ETag of the resource.\n").optional()
}