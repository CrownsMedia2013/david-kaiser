<template>
  <div class="tm-footer-opening-hours">
    <div class="tm-title footer-column-title">
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <table>
      <tr v-for="(item, index) in slice.items" :key="index">
        <td class="tm-text-break">{{ item.day }}</td>
        <td class="tm-text-break">{{ item.time }}</td>
      </tr>
    </table>
  </div>
</template>