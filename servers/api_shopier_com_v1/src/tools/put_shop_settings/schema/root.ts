import { z } from "zod"

export const inputParams = {
  "title": z.string().describe("Title of the shop. This the brief heading located at the shop's main page.").optional(),
  "slogan": z.string().describe("Slogan or catchword located at the shop's main page.").optional(),
  "announcement": z.string().describe("Announcement to buyers located at the shop's main page.").optional(),
  "confirmation": z.string().describe("Order confirmation text. Is shown to buyers when an order is created after a successful payment.").optional(),
  "email": z.string().describe("Email address located at the shop's main page. This can be different than the seller account's email.").optional(),
  "phone": z.string().describe("Phone number located at the shop's main page. This can be different than the seller account's phone number.").optional(),
  "access": z.boolean().describe("Represents whether the shop URL is publicly accessible.").optional(),
  "cart": z.boolean().describe("Represents whether the shopping cart is used during checkouts. If the cart value is FALSE multiple products can not be purchased at the shop, only a single product can be purchased for each order.").optional(),
  "mobileView": z.string().describe("Shop's appearance for mobile devices. Products can be placed either on a single column or on double columns.").optional(),
  "filter": z.boolean().describe("Represents whether the product filter options are present or not.").optional(),
  "stockOutProducts": z.boolean().describe("Represents whether the out of stock products are shown to buyers.").optional(),
  "language": z.string().describe("Language selection of the shop.").optional(),
  "vacation": z.boolean().describe("Represents whether the seller accepts orders. TRUE if the shop is closed for orders, FALSE if the shop is open for orders.").optional()
}