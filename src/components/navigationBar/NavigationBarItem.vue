<script setup>
import {computed, defineAsyncComponent} from "vue";
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

const AsyncNavigationTitle = defineAsyncComponent(() =>
    import('@/components/navigationBar/NavigationBarTitle.vue')
)

const AsyncNavigationIcon = defineAsyncComponent(() =>
    import('@/components/navigationBar/NavigationBarIcon.vue')
)

const active = computed(() => {
  return router.currentRoute.value.fullPath.indexOf(props.path) > -1
})

</script>

<template>
  <li class="navigation-bar__item" ref="navLink">
    <RouterLink
        :to="path"
        active-class="nav-active"
        class="nav-item"
        exact-path
    >
      <div class="nav-icon">
        <AsyncNavigationIcon
            :route-name="name"
            :is-active="active"
        />
      </div>
      <AsyncNavigationTitle
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