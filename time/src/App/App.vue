<style src="./App.scss" lang="scss"></style>
<script src="./App.ts" lang="ts"></script>

<template lang="pug">
  <div class="root">
      <video src="https://background.cowtransfer.com/assets/2020_04_15_bg_1.mp4" autoplay="true" muted loop="true"></video>
      <div class="continer">
          <div class="continerInner">
            <div class="title">
              <div><span style="font-size:42px">致敬</span><span class="englise-font">SUPER FANS</span></div>
              <div>距超级Pro账号购买结束仅剩</div>
          </div>
          <div class="time">
            <div class="time-num">
              <div class="time-num-up">
                <div class="time-num-up1">{{hour}}</div>
                <div class="time-num-up2 time-num-up-left">{{hour}}</div>
              </div>
              <div class="time-num-down">HOURS</div>
            </div>
            <div class="time-tag">:</div>
            <div class="time-num">
              <div class="time-num-up">
                <div class="time-num-up1">{{min}}</div>
                <div class="time-num-up2 time-num-up-mid">{{min}}</div>
              </div>
              <div class="time-num-down">MIN</div>
            </div>
            <div class="time-tag">:</div>
            <div class="time-num">
              <div class="time-num-up">
                <div class="time-num-up1">{{sec}}</div>
                <div class="time-num-up2 time-num-up-right">{{sec}}</div>
              </div>
              <div class="time-num-down">SEC</div>
            </div>
          </div>
          <div class="content">
            <p style="font-size:18px">
              <span>10+1年个人高级 Pro 账号仅售  
              <div class="font998">
                    <div class="rmb-character">RMB</div>
                    <div class="font998-up">
                        <div>9</div>
                        <div>9</div>
                        <div>8</div>
                    </div>
                    <div class="font998-down"><div>9</div><div>9</div><div>8</div></div>
              </div>
              </span>
            </p>
            //- <p style="font-size:20px"><span>容量: 3TB / 年限: 10+1年</span>
            //-   <br/>
            //-   <span>只为时刻关注我们的你</span>
            //- </p>
            <div class="enter-btn">
              <div class="enter-btn-innner" v-if="shopBtn" @click="buy">点击立即购买</div>
            </div>
            <p class="small">
              //- <span>2020年04月24日&nbsp <span style="font-weight: bold;">10:00 ~ 18:00</span>&nbsp 限时开售</span>
              <span style="font-weight:bolder">活动规则&nbsp<span class="underline" @click="openIntro()">点击查看</span></span>
            </p>
          </div>
          </div>
          
      </div>
      <transition name="fade">
      <div class="intro" v-show="introTag">
        <div class="intro-back">
        <div class="back" @click="closeIntro()">
          <span><img src="../assets/image/close.png"></span>
        </div>
        </div>
        <div class="intro-content">
          <p style="font-weight:bold">活动规则</p>
          <p>活动时间：2020.04.24 10:00 ~ 18:00</p>
          <ol>
            <li>此次活动仅针对售价人民币199元的个人高级Pro账号</li>
            <li>此次活动是在10年个人高级Pro的总价上给予</li>
            <li>免费用户成功购买后，将获得10+1年的个人高级Pro账号有效期</li>
            <li>已有个人高级Pro账户成功购买后，将获得在剩余Pro账户有效期的基础上增加10+1年。个人基础Pro账号成功购买后，将按照效期单天价格进行折算后再叠加10+1年。团队Pro账户不在本次的活动范围内</li>
            <li>账号到期后，若使用的空间超出免费空间时，云盘内文件会被冻结直至续费或删除文件直至使用容量未超出为止</li>
            <li>本次活动为促销活动，支付后不支持退款</li>
            <li>最终解释权归穗子科技（上海）有限公司所有</li>
          </ol>
        </div>
      </div>
      </transition>
      
  </div>
</template>
