<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{'background-color': '#f8f8f8'}"
      highlight-current-row>
      <el-table-column
        prop="name"
        label="姓名"
        width="200"
        align="center">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="80"
        align="center">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="80"
        align="center">
      </el-table-column>
      <el-table-column
        prop="enable"
        label="是否为管理员"
        width="200"
        align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.enable ? 'success' : 'info'" effect="dark">
            {{scope.enable ? '是' : '否'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="left"
        width="">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">修改</el-button>
          <el-button type="danger" size="small">删除</el-button>
          <el-button type="info" size="small">禁用</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '开屏广告',
          age: 12,
          type: '开屏',
          enable: true
        }
      ]
    }
  }
}
</script>

<style>

</style>