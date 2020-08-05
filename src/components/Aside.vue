<template>
  <div id="aside">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu :default-active="defaultIndex" unique-opened background-color="#d3dce6">
      <template v-for="item in menus">
        <el-submenu :index="item.index" :key="item.index" v-if="hasChildren(item)">
          <template slot="title">
            <i :class="item.icon" v-if="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item :index="child.index" v-for="child in item.children" :key="child.index">{{child.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.index" :key="item.index" v-else>
          <i :class="item.icon" v-if="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      menus: [
        {
          title: '用户列表',
          index: 'user',
        },
      ],
      defaultIndex: ''
    }
  },
  created() {
    this.getDefaultIndex()
  },
  methods: {
    getDefaultIndex () {
      const menu = this.menus[0]

      this.defaultIndex = this.hasChildren(menu) ? menu.children[0].index : menu.index
    },
    hasChildren (menu) {
      return menu.children && menu.children.length > 0
    }
  }
}
</script>

<style>
</style>