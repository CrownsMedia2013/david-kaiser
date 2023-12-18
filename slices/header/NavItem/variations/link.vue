<template>
  <li v-if="slice.primary.label" :class="{ 'uk-active': isActive }">
    <DocumentLink :field="slice.primary.link">
      {{ primary.label }}
    </DocumentLink>
  </li>
</template>