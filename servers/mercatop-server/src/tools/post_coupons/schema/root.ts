import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("Coupon code.").optional(),
  "amount": z.string().describe("The amount of discount. Should always be numeric, even if setting a percentage.").optional(),
  "discount_type": z.enum(["percent","fixed_cart","fixed_product"]).describe("Determines the type of discount that will be applied.").optional(),
  "description": z.string().describe("Coupon description.").optional(),
  "date_expires": z.string().describe("The date the coupon expires, in the site's timezone.").optional(),
  "date_expires_gmt": z.string().describe("The date the coupon expires, as GMT.").optional(),
  "individual_use": z.boolean().describe("If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.").optional(),
  "product_ids": z.array(z.number().int()).describe("List of product IDs the coupon can be used on.").optional(),
  "excluded_product_ids": z.array(z.number().int()).describe("List of product IDs the coupon cannot be used on.").optional(),
  "usage_limit": z.number().int().describe("How many times the coupon can be used in total.").optional(),
  "usage_limit_per_user": z.number().int().describe("How many times the coupon can be used per customer.").optional(),
  "limit_usage_to_x_items": z.number().int().describe("Max number of items in the cart the coupon can be applied to.").optional(),
  "free_shipping": z.boolean().describe("If true and if the free shipping method requires a coupon, this coupon will enable free shipping.").optional(),
  "product_categories": z.array(z.number().int()).describe("List of category IDs the coupon applies to.").optional(),
  "excluded_product_categories": z.array(z.number().int()).describe("List of category IDs the coupon does not apply to.").optional(),
  "exclude_sale_items": z.boolean().describe("If true, this coupon will not be applied to items that have sale prices.").optional(),
  "minimum_amount": z.string().describe("Minimum order amount that needs to be in the cart before coupon applies.").optional(),
  "maximum_amount": z.string().describe("Maximum order amount allowed when using the coupon.").optional(),
  "email_restrictions": z.array(z.string()).describe("List of email addresses that can use this coupon.").optional(),
  "meta_data": z.array(z.object({ "id": z.number().int().describe("Meta ID.").optional(), "key": z.string().describe("Meta key.").optional(), "value": z.string().describe("Meta value.").optional() })).describe("Meta data.").optional()
}