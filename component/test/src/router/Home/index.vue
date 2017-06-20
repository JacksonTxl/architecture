<template>
  <main>
    <el-button type="primary" @click.native="hello">primary</el-button>
    <hello></hello>
    <s-hello message="1233"></s-hello>
  </main>
</template>

<script>
  import { Button, Message } from 'element-ui'
  import { firstName, lastName, year, multiply, Norm } from 'simba_demo'

  import Hello from 'components/Hello.vue'

  export default {
    components: {
      ElButton: Button,
      Hello
    },
    methods: {
      hello () {
        Message('Hello Vue'+ firstName + lastName + year + multiply(1,2));
        var m = new Norm(1234,456) ;
        console.log(m.testFun(12345,7896));
        console.log(m.toString());
      }
    }
  }
</script>
