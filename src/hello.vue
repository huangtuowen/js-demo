<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: "Hello",
  data: function() {
    return {
      message: "Hello webpack config!"
    };
  }
};
</script>

<style>
.hello {
  color: red;
}
</style>
