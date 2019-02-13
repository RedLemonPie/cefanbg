<template>
  <div class="app-container">
    <div>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-col :span="12" >
          <el-form-item label="文章名称" prop="name" >
            <el-input v-model="ruleForm.name"/>
          </el-form-item>
          <el-form-item label="文章类别">
            <el-select v-model="typelist.name" placeholder="请选择文章类别">
              <el-option
                v-for="item in typelist"
                :key="item.id"
                :label="item.name"
                :value="item.id"/>
            </el-select>
          </el-form-item>
          <el-form-item label="创建时间" required>
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
            </el-form-item>
          </el-form-item>
          <el-form-item label="文章备注" prop="remark">
            <el-input v-model="ruleForm.remark"/>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="components-container" style="margin-top: 250px">
      <code/>
      <div>
        <tinymce :height="500" v-model="content"/>
      </div>
      预览:
      <div class="editor-content" v-html="content"/>
    </div>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </div>

</template>

<script>
import Tinymce from '@/components/Tinymce'
import { getarticletype } from '@/api/article'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      typelist: '',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 50, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请选择文章类别', trigger: 'change' }
        ]
      },
      content:
        `gfhgahjgajhgahjag`
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getarticletype().then(response => {
        this.typelist = response.data.typelist
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .editor-content{
    margin-top: 20px;
  }
</style>

