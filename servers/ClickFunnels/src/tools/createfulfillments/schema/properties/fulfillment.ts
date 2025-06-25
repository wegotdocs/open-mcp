import { z } from "zod"

export const inputParamsSchema = {
  "contact_id": z.number().int().describe("The contact that made the order that is being fulfilled."),
  "tracking_url": z.union([z.string().describe("Tracking URL"), z.null().describe("Tracking URL")]).describe("Tracking URL").optional(),
  "shipping_provider": z.union([z.string().describe("Shipping Provider"), z.null().describe("Shipping Provider")]).describe("Shipping Provider").optional(),
  "tracking_code": z.union([z.string().describe("Tracking Code"), z.null().describe("Tracking Code")]).describe("Tracking Code").optional(),
  "location_id": z.number().int().describe("The location that the fulfillment is being fulfilled from"),
  "ignore_out_of_stock": z.boolean().describe("Create a fulfillment despite the item being out of stock.").optional(),
  "notify_customer": z.boolean().describe("Send an email to the customer when the fulfillment is created. Will use workspace default behavior if left unset.").optional(),
  "included_orders_invoices_line_items_attributes": z.array(z.object({ "invoices_line_item_id": z.number().int().describe("The orders invoice line item to fulfill").optional(), "quantity": z.number().int().describe("The quantity to fulfill").optional() })).describe("The orders invoices line items to fulfill as part of this fulfillment.")
}