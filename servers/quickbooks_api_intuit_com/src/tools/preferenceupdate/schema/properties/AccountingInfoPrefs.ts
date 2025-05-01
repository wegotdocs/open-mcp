import { z } from "zod"

export const inputParamsSchema = {
  "ClassTrackingPerTxn": z.boolean().optional(),
  "ClassTrackingPerTxnLine": z.boolean().optional(),
  "CustomerTerminology": z.string().optional(),
  "DepartmentTerminology": z.string().optional(),
  "TrackDepartments": z.boolean().optional()
}