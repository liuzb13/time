<style src="./App.scss" lang="scss"></style>
<script src="./App.ts" lang="ts"></script>

<template lang="pug">
  .root
    .background
      .background-0
      .background-1
      .background-2
    .safe-area
    .info-area
      .start-page(:class="{'hide': openBuyLockIs}")
        .icon-area
          .icon-background(:class="{'open': openBuyIs || openBuyLockIs}")
          .icon
        .title-area
          .title-image-area
            img.title.noposition(src="../assets/image/title_b.png" style="opacity: 0;")
            transition(name="fade")
              img.title(v-if="openBuyIs || openBuyLockIs" src="../assets/image/title_b.png")
            transition(name="fade")
              img.title(v-if="!openBuyIs && !openBuyLockIs" src="../assets/image/title_w.png")
          .entry(
            :class="{'open': openBuyIs || openBuyLockIs}"
            @click="entry"
            @mouseenter="openBuyIs = true"
            @mouseleave="openBuyIs = false"
            ) 立即购买
      
      .buy-page(v-if="account" :class="{'show': openBuyLockIs}")
        div
          .des.no #[span(v-if="selectedType === 'BASIC'") 个人基础]#[span(v-if="selectedType === 'SINGLE'") 个人高级]#[span(v-if="selectedType === 'GROUP'") 团队高级]年付优惠券 x 2
          .des 每张价值#[span(v-if="selectedType === 'BASIC'") 10]#[span(v-if="selectedType === 'SINGLE'") 40]#[span(v-if="selectedType === 'GROUP'") 100]元，有效期60天

          .tip 点击选中你想要的Pro账户类型

          .select-area
            //- .select.basic(
            //-   :class="{'selected': selectedType === 'BASIC'}"
            //-   @click="selectType('BASIC')"
            //-   v-if="!/SINGLE|GROUP/.test(account.proType)")
            //-   .label 12个月
            //-   .label 个人基础
            //-   .label 折后价
            //-   .price ¥89
            //-   .label 原价#[del ¥99]
            //- .line(v-if="!/SINGLE|GROUP/.test(account.proType)")
            .select.plus(
              :class="{'selected': selectedType === 'SINGLE'}"
              @click="selectType('SINGLE')"
              v-if="!/GROUP/.test(account.proType)")
              .label 12个月
              .label 个人高级
              .label 折后价
              .price ¥159
              .label 原价#[del ¥199]
            .line(v-if="!/GROUP/.test(account.proType)")
            .select.group(
              @click="selectType('GROUP')"
              :class="{'selected': selectedType === 'GROUP'}"
              )
              .label 12个月
              .label 团队高级
              .label 折后价
              .price ¥699
              .label 原价#[del ¥799]
          .pay-area
            img(@click="sendPay('wexinpay')" src="../assets/image/wxpay.png")
            img(@click="sendPay('alipay')" src="../assets/image/alipay.png")
          i.pay-des 支付完成后请至 "我的账户" - "账户中心" 查看已购买的优惠券
          .help-entry(@click="openHelp") 活动规则
          .help-area(:class="{'show': openHelpIs}")
            img.close(@click="colseHelp" src="../assets/image/close.png")
            div
              .title 活动规则
              .help-des 1. 活动时间：2020.01.17 - 2020.02.01
              .help-des 2. 活动期间，会员仅需要支付人民币1元即可领取各个种类的Pro优惠券。每个用户最多购买5次，即优惠券最高可得10张。所有券包中的优惠券自购买日起有效期60天 
              .help-des 3. 本活动为注册会员专享
              .help-des 4. 本次活动为促销活动，支付后不支持退款
              .help-des 5. 最终解释权归穗子科技（上海）有限公司所有


</div>







</template>
