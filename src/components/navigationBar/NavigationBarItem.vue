<script setup>
import NavigationBarIcon from "@/components/navigationBar/NavigationBarIcon.vue";
import NavigationBarTitle from "@/components/navigationBar/NavigationBarTitle.vue";
import {computed} from "vue";
import {useRouter} from "vue-router";

const props = defineProps({
  title: {
    type: String
  },
  path: {
    type: String
  },
  name: {
    type: String
  }
})

const router = useRouter()

const active = computed(() => {
  return router.currentRoute.value.fullPath === props.path
})
</script>

<template>
  <li class="navigation-bar__item">
    <RouterLink
        :to="path"
        class="nav-item"
        active-class="nav-active"
    >
      <div class="nav-icon">
        <NavigationBarIcon
            :route-name="name"
            :is-active="active"
        />
      </div>
      <NavigationBarTitle
          class="nav-title"
          :title="title"
      />
    </RouterLink>
  </li>
</template>

<style scoped lang="scss">
.nav-item {
  outline: none;
  text-decoration: none;
  color: $COLORS_CONTENT_MEDIUM_CONTRAST;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}


.nav-title {
  .nav-active & {
    color: $COLORS_CONTENT_HIGH_CONTRAST;
    font-weight: 600;

  }
}

.nav-icon {
  width: 4rem;
  height: 2rem;
  padding: 0.25rem 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  .nav-active & {
    background: $COLORS_DOMINANT_BG_LOW_CONTRAST;
  }
}
</style>