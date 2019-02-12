<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="图片名称" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="图片位置" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.position }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序位" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column label="预览" width="200" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.url }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="前台显示" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.isshow | statusFilter">{{ scope.row.isshow }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="updated_at" label="修改时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.updatetime }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="dialogFormVisible = true">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" title="新增图片">
      <el-form :model="form">
        <el-form-item  label="图片名称">
          <el-input v-model="form.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item  label="图片位置">
          <el-input v-model="form.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item  label="图片备注">
          <el-input v-model="form.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item  label="排序位">
          <el-input v-model="form.name" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="是否展示" >
          <el-radio-group v-model="form.resource">
            <el-radio label="展示"></el-radio>
            <el-radio label="不展示"></el-radio>
          </el-radio-group>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { gethomepagelist } from '@/api/table'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        true: 'success',
        false: 'red'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      form: {
        picname: '',
        picposition: '',
        picurl: '',
        picalt: '',
        display: '',
        sort: ''
      }

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      gethomepagelist().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  }
}
</script>

<style scoped>

</style>
