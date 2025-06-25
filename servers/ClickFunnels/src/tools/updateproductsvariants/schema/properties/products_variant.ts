import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Variant name").optional(),
  "description": z.union([z.string().describe("The description of the variant. The description of the **default variant** is the user-facing description of the `Product`."), z.null().describe("The description of the variant. The description of the **default variant** is the user-facing description of the `Product`.")]).describe("The description of the variant. The description of the **default variant** is the user-facing description of the `Product`.").optional(),
  "sku": z.union([z.string().describe("SKU"), z.null().describe("SKU")]).describe("SKU").optional(),
  "product_type": z.string().describe("Product type").optional(),
  "out_of_stock_sales": z.boolean().nullable().describe("Out of stock sales").optional(),
  "weight": z.union([z.number().describe("Weight"), z.null().describe("Weight")]).describe("Weight").optional(),
  "weight_unit": z.string().describe("Weight unit").optional(),
  "height": z.union([z.number().describe("Height"), z.null().describe("Height")]).describe("Height").optional(),
  "width": z.union([z.number().describe("Width"), z.null().describe("Width")]).describe("Width").optional(),
  "length": z.union([z.number().describe("Length"), z.null().describe("Length")]).describe("Length").optional(),
  "dimensions_unit": z.union([z.string().describe("Dimensions unit"), z.null().describe("Dimensions unit")]).describe("Dimensions unit").optional(),
  "tax_category_id": z.union([z.string().describe("Tax category ID"), z.null().describe("Tax category ID")]).describe("Tax category ID").optional(),
  "taxable": z.union([z.string().describe("Taxable"), z.null().describe("Taxable")]).describe("Taxable").optional(),
  "track_quantity": z.union([z.boolean().describe("Track Quantity"), z.null().describe("Track Quantity")]).describe("Track Quantity").optional(),
  "archived": z.union([z.boolean().describe("Archived"), z.null().describe("Archived")]).describe("Archived").optional(),
  "visible": z.union([z.boolean().describe("Is visible"), z.null().describe("Is visible")]).describe("Is visible").optional(),
  "fulfillment_required": z.union([z.boolean().describe("Fulfillment required"), z.null().describe("Fulfillment required")]).describe("Fulfillment required").optional(),
  "country_of_manufacture_id": z.union([z.string().describe("Country of manufacture"), z.null().describe("Country of manufacture")]).describe("Country of manufacture").optional(),
  "image_ids": z.union([z.array(z.any()).describe("The images for the variant."), z.null().describe("The images for the variant.")]).describe("The images for the variant.").optional(),
  "fulfillments_location_ids": z.union([z.array(z.any()).describe("The fulfillment locations for the variant."), z.null().describe("The fulfillment locations for the variant.")]).describe("The fulfillment locations for the variant.").optional(),
  "properties_values": z.array(z.object({ "property_id": z.number().int().describe("The ID of the property").optional(), "value": z.string().describe("The value").optional() })).describe("The property values of the Variant. e.g. 'Large', 'Red' etc.").optional()
}