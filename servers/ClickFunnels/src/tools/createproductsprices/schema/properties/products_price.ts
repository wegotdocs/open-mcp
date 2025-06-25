import { z } from "zod"

export const inputParamsSchema = {
  "name": z.union([z.string().describe("Name"), z.null().describe("Name")]).describe("Name").optional(),
  "amount": z.string().describe("Amount"),
  "cost": z.union([z.string().describe("Cost"), z.null().describe("Cost")]).describe("Cost").optional(),
  "currency": z.string().describe("Currency"),
  "duration": z.string().describe("Duration"),
  "interval": z.string().describe("Interval"),
  "trial_interval": z.string().describe("Trial interval"),
  "trial_duration": z.string().describe("Trial duration"),
  "trial_amount": z.string().describe("Trial Amount"),
  "setup_amount": z.union([z.string().describe("Setup amount"), z.null().describe("Setup amount")]).describe("Setup amount").optional(),
  "self_cancel": z.union([z.boolean().describe("Customer can cancel"), z.null().describe("Customer can cancel")]).describe("Customer can cancel").optional(),
  "self_upgrade": z.union([z.boolean().describe("Customer can upgrade"), z.null().describe("Customer can upgrade")]).describe("Customer can upgrade").optional(),
  "self_downgrade": z.union([z.boolean().describe("Customer can downgrade"), z.null().describe("Customer can downgrade")]).describe("Customer can downgrade").optional(),
  "self_reactivate": z.union([z.boolean().describe("Customer can reactivate"), z.null().describe("Customer can reactivate")]).describe("Customer can reactivate").optional(),
  "interval_count": z.string().describe("Interval count"),
  "payment_type": z.enum(["one_time","subscription","payment_plan"]).describe("Defaults to 'one_time' if left blank").optional(),
  "visible": z.union([z.boolean().describe("Visible"), z.null().describe("Visible")]).describe("Visible").optional(),
  "compare_at_amount": z.union([z.string().describe("Compare at amount"), z.null().describe("Compare at amount")]).describe("Compare at amount").optional(),
  "key": z.union([z.string().describe("Key"), z.null().describe("Key")]).describe("Key").optional(),
  "archived": z.union([z.boolean().describe("Archived"), z.null().describe("Archived")]).describe("Archived").optional()
}