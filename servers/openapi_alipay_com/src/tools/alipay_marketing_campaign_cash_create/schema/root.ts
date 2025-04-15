import { z } from "zod"

export const inputParams = {
  "coupon_name": z.string().describe("红包名称,商户在查询列表、详情看到的名字,同时也会显示在商户付款页面。").optional(),
  "end_time": z.string().describe("活动结束时间,必须大于活动开始时间, 基本格式:yyyy-MM-dd HH:mm:ss,活动有效时间最长为6个月，过期后需要创建新的活动。").optional(),
  "merchant_link": z.string().describe("商户打款后的跳转链接，从支付宝收银台打款成功后的跳转链接。不填时，打款后停留在支付宝支付成功页。商户实际跳转会自动添加crowdNo作为跳转参数。示例: http://www.yourhomepage.com?crowdNo=XXX").optional(),
  "prize_msg": z.string().describe("活动文案，用户在账单、红包中看到的账单描述、红包描述。").optional(),
  "prize_type": z.string().describe("现金红包的发放形式,。枚举支持：\t*fixed：固定金额。\t*random：随机金额。选择随机金额时，单个红包的金额在平均金额的0.5~1.5倍之间浮动。\t").optional(),
  "send_freqency": z.string().describe("用户在当前活动参与次数、频率限制。支持日(D)、周(W)、月(M)、终身(L)维度的限制，整个字段不填时默认值为L1（即用户终生仅能参与1次）。\t注意：\t 1. 终身(L)限制必选且最大值为 100。\t 2. 日(D)、周(W)、月(M)限制可选且最多只能选择一个（即限制日领取次数就不能再限制月领取次数），频率设置必须小于等于终身(L)的次数。\t 3. 多个配置之间使用\"|\"进行分隔。如 D3|L4（表示限制用户终生只能参与4次，单日只能参与3次）。\t 4. 允许多次领取时，活动触发接口需要传入out_biz_no来配合。").optional(),
  "start_time": z.string().describe("活动开始时间，必须大于活动创建的时间。入参支持如下两种形式：\t 1. 填入固定时间，时间格式为 yyyy-MM-dd HH:mm:ss，如 2020-12-10 22:28:30\t 2. 填字符串 NowTime，表示创建即生效。").optional(),
  "total_money": z.string().describe("活动发放的现金总金额,最小金额1.00元,最大金额10000000.00元。每个红包的最大金额不允许超过200元,最小金额不得低于0.20元。 实际的金额限制可能会根据业务进行动态调整。").optional(),
  "total_num": z.string().describe("红包发放个数，最小为 1 个，最大10000000个。\t说明：不同的发放形式（即prize_type）会使得发放个数含义不同：\t 1. 若prize_type 为 fixed（固定金额），则每个用户领取的红包金额为total_money除以total_num得到固定金额。\t 2. 若prize_type为 random（随机金额），则每个用户领取的红包金额为total_money除以total_num得到的平均金额值的0.5~1.5倍。由于金额是随机的，在红包金额全部被领取完时，有可能total_num有所剩余、或者大于设置值的情况。").optional()
}