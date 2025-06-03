import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "name": z.string().describe("Name of the dashboard section").optional(),
  "category": z.enum(["BANKS","TIMETRACKER","INVOICES","LABORAL","DOCUMENTS","COMMUNICATION","TAXES"]).describe("Category of the dashboard section").optional(),
  "roles": z.array(z.enum(["USER","ADMIN"]).describe("Set of roles that can access this section")).describe("Set of roles that can access this section").optional(),
  "priority": z.number().int().describe("Priority order").optional(),
  "tool_id": z.string().describe("ID of the associated tool").optional(),
  "service_id": z.string().describe("ID of the related service").optional(),
  "default_width": z.number().int().gte(1).describe("Default width").optional(),
  "default_height": z.number().int().gte(1).describe("Default height").optional(),
  "is_default_for_roles": z.array(z.enum(["USER","ADMIN"]).describe("Roles for which this section is default")).describe("Roles for which this section is default").optional(),
  "min_version": z.number().int().describe("Minimum version required for this section").optional(),
  "sage_active_dependency": z.boolean().describe("Whether this section depends on Sage being active").optional()
}