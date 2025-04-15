import { z } from "zod"

export const inputParams = {
  "activity_list": z.array(z.object({ "activity_click_url": z.string().describe("活动点击跳转到小程序的链接地址").optional(), "activity_id": z.string().describe("活动的唯一标识，同一个小程序橱窗下，该标识唯一，请开发者自行保证").optional(), "activity_name": z.string().describe("活动名称").optional(), "activity_picture_urls": z.array(z.string()).describe("活动图片链接,最多不能超过5个").optional() })).describe("活动信息列表").optional(),
  "data_type": z.string().describe("数据类型，可选值：ACTIVITY(活动数据)、GOODS(商品数据)").optional(),
  "goods_list": z.array(z.object({ "buying_url": z.string().describe("该商品的小程序购买链接，如果需要进行公域推广，请字段请必填").optional(), "goods_brand": z.string().describe("商品品牌，如果需要进行公域推广，该字段请必填").optional(), "goods_comment": z.string().describe("商品辅助说明文案").optional(), "goods_description_label": z.string().describe("商品说明标签（如-随心退）").optional(), "goods_id": z.string().describe("商品的唯一标识，同一个小部件下，该标识唯一，请开发者自行保证").optional(), "goods_label": z.string().describe("营销标签（如-限量特价），每个商品仅支持一个营销标签").optional(), "goods_name": z.string().describe("商品名称").optional(), "goods_type": z.string().describe("商品所属品类").optional(), "main_pic_url": z.string().describe("商品主图片地址，如果需要进行公域推广，该字段请必填。").optional(), "need_public_promo": z.boolean().describe("是否需要进行公域推广，默认情况下为false").optional(), "order_number": z.number().int().describe("商品排序，自然整数, 数字越小越靠前").optional(), "original_price": z.string().describe("单位\"元\"的商品原价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "publish_cities": z.string().describe("投放城市的列表，详见https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html，有多个用英文,分隔。如果没有限制则不传入").optional(), "remaining_quantity": z.number().int().describe("剩余库存，如果需要进行公域推广，该字段请必填，并且当剩余库存为0时，请及时同步。").optional(), "sell_price": z.string().describe("单位\"元\"的售价，传入数字，不需要传入\"元\"。如果需要进行公域推广，该字段请必填。").optional(), "sell_tag_list": z.array(z.string()).describe("商品的卖点标签，如果需要进行公域推广，请至少填写两个卖点标签。").optional(), "sold_quantity": z.number().int().describe("已售数量").optional(), "status": z.string().describe("商品状态，商品的上下架，默认情况为上架，上架为ONLINE,下架为OFFLINE").optional(), "total_quantity": z.number().int().describe("总库存量").optional() })).describe("商品信息列表").optional(),
  "mini_app_id": z.string().describe("商家小程序ID").optional(),
  "pid": z.string().describe("小程序背后的商家，和mini_app_id要求对应").optional()
}