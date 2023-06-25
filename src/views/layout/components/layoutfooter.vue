<script setup></script>

<template>
  <div class="foots">
    <div class="container">
      <div class="text">客户服务</div>
      <ul class="uls">
        <li>
          <i class="iconfont icon-zaixiankefu"></i>
          <div>在线客服</div>
        </li>
        <li>
          <i class="iconfont icon-wentifankui"></i>
          <div>问题反馈</div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="text">关注我们</div>
      <ul class="uls">
        <li>
          <i class="iconfont icon-gongzhonghao"></i>
          <div>公众号</div>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
          <div>微博</div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="text">下载APP</div>
      <ul class="uls">
        <li>
          <img src="@/assets/images/qrcode.jpg" width="80" height="80" />
        </li>
        <li>
          <div>扫一扫二维码立马下载APP</div>
          <el-button type="primary">下载页面</el-button>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="text">服务热线</div>
      <ul class="uls">
        <li>
          <div>400-0000-000</div>
          <div>周一至周日 8:00 - 18:00</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer">
    <div>价格亲民</div>
    <div>物流快捷</div>
    <div>品质新鲜</div>
  </div>
</template>

<style lang="scss" scoped>
.foots {
  display: flex;
  .container {
    width: 25%;
    height: 200px;
    text-align: center;
    .text {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    .uls {
      display: flex;
      justify-content: space-around;
      padding: 0;
      li {
        list-style: none;
        width: 35%;
        text-align: center;
        .iconfont {
          font-size: 40px;
        }
      }
    }
  }
}
.el-button {
  width: 110px;
}
.footer {
  width: 100%;
  height: 120px;
  background: #333333;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    color: #ffffff;
    font-size: 30px;
  }
}
</style>
