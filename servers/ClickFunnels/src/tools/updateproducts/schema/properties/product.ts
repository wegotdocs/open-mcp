import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Product name").optional(),
  "current_path": z.union([z.string().describe("Current Path"), z.null().describe("Current Path")]).describe("Current Path").optional(),
  "visible_in_store": z.union([z.boolean().describe("Visible in Store"), z.null().describe("Visible in Store")]).describe("Visible in Store").optional(),
  "visible_in_customer_center": z.union([z.boolean().describe("Visible in Customer Center"), z.null().describe("Visible in Customer Center")]).describe("Visible in Customer Center").optional(),
  "seo_title": z.union([z.string().describe("A clear title without branding or mentioning the domain itself. Longer is better, but max is 60 characters."), z.null().describe("A clear title without branding or mentioning the domain itself. Longer is better, but max is 60 characters.")]).describe("A clear title without branding or mentioning the domain itself. Longer is better, but max is 60 characters.").optional(),
  "seo_description": z.union([z.string().describe("A clear SEO description, at least two sentences long. Longer is better, but max is 160 characters. You will find the actual user-facing description on the **default variant of the product** (see the `Products::Variant` resource)."), z.null().describe("A clear SEO description, at least two sentences long. Longer is better, but max is 160 characters. You will find the actual user-facing description on the **default variant of the product** (see the `Products::Variant` resource).")]).describe("A clear SEO description, at least two sentences long. Longer is better, but max is 160 characters. You will find the actual user-facing description on the **default variant of the product** (see the `Products::Variant` resource).").optional(),
  "seo_image_id": z.union([z.string().describe("SEO image"), z.null().describe("SEO image")]).describe("SEO image").optional(),
  "commissionable": z.union([z.boolean().describe("Commissionable"), z.null().describe("Commissionable")]).describe("Commissionable").optional(),
  "image_ids": z.union([z.array(z.any()).describe("Images"), z.null().describe("Images")]).describe("Images").optional(),
  "variant_ids": z.union([z.array(z.any()).describe("Variant IDs"), z.null().describe("Variant IDs")]).describe("Variant IDs").optional(),
  "price_ids": z.union([z.array(z.any()).describe("Price IDs"), z.null().describe("Price IDs")]).describe("Price IDs").optional(),
  "redirect_funnel_id": z.union([z.string().describe("Redirect funnel"), z.null().describe("Redirect funnel")]).describe("Redirect funnel").optional(),
  "cancellation_funnel_url": z.union([z.string().describe("Cancellation Funnel Url"), z.null().describe("Cancellation Funnel Url")]).describe("Cancellation Funnel Url").optional(),
  "tag_ids": z.array(z.number().int()).describe("Any valid array, empty or with valid tag ids will overwrite existing values. To avoid losing existing tags first use the Fetch Product endpoint, then be sure to include the existing tags in your payload along with any new addition(s)").optional(),
  "variant_properties": z.array(z.object({ "id": z.number().int().describe("The ID of the property, if updating the property").optional(), "name": z.string().describe("The name of the property").optional() })).describe("The properties of the product's variants. e.g. 'Size', 'Color' etc.").optional()
}