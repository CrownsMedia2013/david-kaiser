<template>
  <div class="tm-footer-opening-hours">
    <div class="tm-title footer-column-title">
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <table>
      <tr v-for="(item, index) in slice.items" class="tm-text-pre" :key="index">
        <td>{{ item.day }}</td>
        <td>{{ item.time }}</td>
      </tr>
    </table>
  </div>
</template>