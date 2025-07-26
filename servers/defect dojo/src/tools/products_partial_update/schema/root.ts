import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this product."),
  "tags": z.array(z.string().min(1)).optional(),
  "name": z.string().min(1).max(255).optional(),
  "description": z.string().min(1).max(4000).optional(),
  "prod_numeric_grade": z.number().int().gte(-2147483648).lte(2147483647).nullable().optional(),
  "business_criticality": z.union([z.literal("very high"), z.literal("high"), z.literal("medium"), z.literal("low"), z.literal("very low"), z.literal("none"), z.literal(""), z.literal(null)]).nullable().describe("* `very high` - Very High\n* `high` - High\n* `medium` - Medium\n* `low` - Low\n* `very low` - Very Low\n* `none` - None").optional(),
  "platform": z.union([z.literal("web service"), z.literal("desktop"), z.literal("iot"), z.literal("mobile"), z.literal("web"), z.literal(""), z.literal(null)]).nullable().describe("* `web service` - API\n* `desktop` - Desktop\n* `iot` - Internet of Things\n* `mobile` - Mobile\n* `web` - Web").optional(),
  "lifecycle": z.union([z.literal("construction"), z.literal("production"), z.literal("retirement"), z.literal(""), z.literal(null)]).nullable().describe("* `construction` - Construction\n* `production` - Production\n* `retirement` - Retirement").optional(),
  "origin": z.union([z.literal("third party library"), z.literal("purchased"), z.literal("contractor"), z.literal("internal"), z.literal("open source"), z.literal("outsourced"), z.literal(""), z.literal(null)]).nullable().describe("* `third party library` - Third Party Library\n* `purchased` - Purchased\n* `contractor` - Contractor Developed\n* `internal` - Internally Developed\n* `open source` - Open Source\n* `outsourced` - Outsourced").optional(),
  "user_records": z.number().int().gte(0).lte(2147483647).nullable().describe("Estimate the number of user records within the application.").optional(),
  "revenue": z.string().regex(new RegExp("^-?\\d{0,13}(?:\\.\\d{0,2})?$")).nullable().describe("Estimate the application's revenue.").optional(),
  "external_audience": z.boolean().describe("Specify if the application is used by people outside the organization.").optional(),
  "internet_accessible": z.boolean().describe("Specify if the application is accessible from the public internet.").optional(),
  "enable_product_tag_inheritance": z.boolean().describe("Enables product tag inheritance. Any tags added on a product will automatically be added to all Engagements, Tests, and Findings").optional(),
  "enable_simple_risk_acceptance": z.boolean().describe("Allows simple risk acceptance by checking/unchecking a checkbox.").optional(),
  "enable_full_risk_acceptance": z.boolean().describe("Allows full risk acceptance using a risk acceptance form, expiration date, uploaded proof, etc.").optional(),
  "disable_sla_breach_notifications": z.boolean().describe("Disable SLA breach notifications if configured in the global settings").optional(),
  "product_manager": z.number().int().nullable().optional(),
  "technical_contact": z.number().int().nullable().optional(),
  "team_manager": z.number().int().nullable().optional(),
  "prod_type": z.number().int().optional(),
  "sla_configuration": z.number().int().optional(),
  "regulations": z.array(z.number().int()).optional()
}