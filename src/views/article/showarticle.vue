<template>
  <div class="app-container">
    <div>

    </div>
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
