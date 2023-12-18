<template>
  <li v-if="slice.primary.label" :class="{ 'uk-active': isActive, 'uk-parent' : vertical }" >
    <a>
      {{ slice.primary.label }}
      <Icon v-if="!vertical" icon="la:angle-down" />
    </a>
    <div v-if="!vertical" class="uk-navbar-dropdown">
      <ul class="uk-nav uk-navbar-dropdown-nav">
        <li v-for="(item, index) in slice.items" :class="{ 'uk-active': isActive }" :key="index">
          <DocumentLink :field="item.link">
            {{ item.label }}
          </DocumentLink>
        </li>
      </ul>
    </div>
    <ul v-else class="uk-nav-sub">
      <li v-for="(item, index) in slice.items" :class="{ 'uk-active': isActive }" :key="index">
        <DocumentLink :field="item.link">
          {{ item.label }}
        </DocumentLink>
      </li>
    </ul>
  </li>
</template>