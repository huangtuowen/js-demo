<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  name: "Hello",
  data: function() {
    return {
      message: "Hello Vue loader hot!"
    };
  }
};
</script>

<style>
.hello {
  color: red;
}
</style>
