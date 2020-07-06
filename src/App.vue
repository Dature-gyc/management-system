<template>
  <div>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <div class="inp">
          <el-input placeholder="请输入内容" size="small"></el-input>
        </div>
      </el-header>
      <!-- 左边 -->
      <el-container>
        <el-aside width="200px">
          <div class="col">
            <el-row class="tac"
              ><el-col :span="12" class="col1">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="black"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  style="wdith:100%"
                >
                  <!-- 系统首页 -->
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="iconfont icon-fangzi"></i>
                      <span>系统首页</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="1-1" >地图展示</el-menu-item>
                      <el-menu-item index="1-2">首页</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <!-- 商品管理 -->
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="iconfont icon-computer"></i>
                      <span>商品管理</span>
                    </template>
                    <el-menu-item index="">添加商品</el-menu-item>
                    <el-menu-item index="">品牌管理</el-menu-item>
                    <el-menu-item index="">商品分类</el-menu-item>
                    <el-menu-item index="">分类管理</el-menu-item>
                  </el-submenu>
                  <!-- 交易管理 -->
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="iconfont icon-shujuku"></i>
                      <span>交易管理</span>
                    </template>
                    <el-menu-item index="">订单管理</el-menu-item>
                    <el-menu-item index="">退款管理</el-menu-item>
                    <el-menu-item index="">交易统计</el-menu-item>
                    <el-menu-item index="">订单处理</el-menu-item>
                    <el-menu-item index="">物流管理</el-menu-item>
                    <el-menu-item index="">订单统计（全国图）</el-menu-item>
                  </el-submenu>
                  <!-- 支付管理 -->
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="iconfont icon-qianbao"></i>
                      <span>支付管理</span>
                    </template>
                    <el-menu-item index="">支付管理</el-menu-item>
                    <el-menu-item index="">支付配置</el-menu-item>
                  </el-submenu>
                  <!-- 系统管理 -->
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="iconfont icon-chilun"></i>
                      <span>系统管理</span>
                    </template>
                    <el-menu-item index="">栏目设置</el-menu-item>
                    <el-menu-item index="">自定页面</el-menu-item>
                    <el-menu-item index="">系统设置</el-menu-item>
                    <el-menu-item index="">系统日志</el-menu-item>
                  </el-submenu>
                  <!-- 文章管理 -->
                  <el-submenu index="6">
                    <template slot="title">
                      <i class="iconfont icon-wenzhang"></i>
                      <span>文章管理</span>
                    </template>
                    <el-menu-item index="">文章列表</el-menu-item>
                  </el-submenu>
                  <!-- 管理员 -->
                  <el-submenu index="7">
                    <template slot="title">
                      <i class="iconfont icon-guanliyuan1"></i>
                      <span>管理员</span>
                    </template>
                    <el-menu-item index="">权限设置</el-menu-item>
                    <el-menu-item index="">管理员设置</el-menu-item>
                    <el-menu-item index="">管理员信息</el-menu-item>
                  </el-submenu>
                  <!-- 会员管理 -->
                  <el-submenu index="8">
                    <template slot="title">
                      <i class="iconfont icon-guanliyuan"></i>
                      <span>会员管理</span>
                    </template>
                    <el-menu-item index="">会员列表</el-menu-item>
                  </el-submenu>
                  <!-- 报表管理 -->
                  <el-submenu index="9">
                    <template slot="title">
                      <i class="iconfont icon-tongji"></i>
                      <span>报表管理</span>
                    </template>
                    <el-menu-item index="">访问统计</el-menu-item>
                    <el-menu-item index="">业绩统计</el-menu-item>
                  </el-submenu>
                  <!-- 广告管理 -->
                  <el-submenu index="10">
                    <template slot="title">
                      <i class="iconfont icon-picture"></i>
                      <span>广告管理</span>
                    </template>
                    <el-menu-item index="">广告列表</el-menu-item>
                    <el-menu-item index="">广告分类</el-menu-item>
                  </el-submenu>
                  <!-- 单页管理 -->
                  <el-submenu index="11">
                    <template slot="title">
                      <i class="iconfont icon-picture"></i>
                      <span>单页管理</span>
                    </template>
                    <el-menu-item index="">商城列表</el-menu-item>
                  </el-submenu>
                  <!-- 前端管理 -->
                  <el-submenu index="12">
                    <template slot="title">
                      <i class="iconfont icon-fangzi"></i>
                      <span>前端管理</span>
                    </template>
                    <el-menu-item index="">栏目管理</el-menu-item>
                  </el-submenu>
                  <!-- 留言管理 -->
                  <el-submenu index="13">
                    <template slot="title">
                      <i class="iconfont icon-liuyan"></i>
                      <span>留言管理</span>
                    </template>
                    <el-menu-item index="">留言反馈</el-menu-item>
                    <el-menu-item index="">消息通知</el-menu-item>
                  </el-submenu>
                  <!-- 店铺管理 -->
                  <el-menu-item index="14">
                    <i class="iconfont icon-dianpu"></i>
                    <span slot="title">店铺管理</span>
                  </el-menu-item>
                </el-menu>
              </el-col></el-row
            >
          </div>
        </el-aside>

        <el-main>
          <!-- 显示子路由的页面 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-aside {
  background-color: black;
  color: #333;
  text-align: left;
  line-height: 800px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.inp {
  width: 200px;
}
.col {
  height: 500px;
  width: 100%;
}
.tac .el-col-12 {
  width: 100%;
}
ul {
  width: 100%;
}
.el-menu-item {
  background-color: #666666;
}
</style>
