import { z } from "zod"

export const inputParams = {
  "agent_channel": z.string().describe("此值只是供代扣中心做最后的渠道统计用，并不做值是什么的强校验，只要不为空就可以").optional(),
  "agent_code": z.string().describe("标识发起方的ID，从服务窗发起则为appId的值，appId即开放平台分配给接入ISV的id，此处也可以随便真其它值，只要能标识唯一即可").optional(),
  "agreement_id": z.string().describe("支付宝代扣协议ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "pay_password_token": z.string().describe("需要用户首先处于登陆态，然后访问https://ebppprod.alipay.com/deduct/enterMobileicPayPassword.htm?cb=自己指定的回跳连接地址,访问页面后会进到独立密码校验页，用户输入密码校验成功后，会生成token回调到指定的回跳地址，如果设置cb=www.baidu.com则最后回调的内容是www.baidu.com?token=312314ADFDSFAS,然后签约时直接取得地址后token的值即可").optional(),
  "user_id": z.string().describe("用户ID").optional()
}