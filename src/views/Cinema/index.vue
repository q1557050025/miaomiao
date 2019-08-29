<template>
  <div>
    <Header title="喵喵影院"></Header>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import tabBar from "@/components/TabBar"; 
export default {
  name: "Cinema",
  components: {
    Header,
    tabBar
  }
}
</script>