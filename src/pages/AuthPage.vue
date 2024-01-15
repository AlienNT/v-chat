<template>
  <div class="auth-page">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
.auth-page {
  background: #212F3F;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col {
  flex: 0 0 15%;
  margin-bottom: 15px;
}
</style>