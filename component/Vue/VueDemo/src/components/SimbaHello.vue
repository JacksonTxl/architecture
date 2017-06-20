<template>
  <div>
    <span>{{message}}</span>
    <span>{{title}}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
//        message: 'Hello World'
      }
    },
//    props:["message"]
    props : {
        title: {
            type: String,
            default: '',
            required: true
        },
        message: {
            type: String,
            default: ''
        },
    }
  }
</script>
