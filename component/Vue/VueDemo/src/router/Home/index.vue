<template>
  <main class="test">
    <el-button type="primary" @click.native="hello">primary</el-button>
    <hello></hello>
    <div>123456</div>
    <simba-hello message="aateest" title="2222"></simba-hello>
  </main>
</template>

<script>
  import { Button, Message } from 'element-ui'

  import Hello from 'components/Hello'
  import SimbaHello from 'components/SimbaHello'

  export default {
    components: {
      ElButton: Button,
      Hello,
      SimbaHello,
    },
    methods: {
      hello () {
        Message('Hello Vue')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .test{
    >div{
      font-size: 20px;
    }
  }
</style>
