<template>
  <div class="tm-slice tm-boxes tm-boxes-default">
    <div class="uk-container uk-container-large">
      <div class="uk-grid uk-grid-collapse uk-grid-match uk-child-width-1-2@m" uk-grid>
        <div v-for="(box, index) in slice.items" :key="index">
          <Box :slice="slice" :section="context?.parent" :box="box" />
        </div>
      </div>
    </div>
  </div>
</template>
