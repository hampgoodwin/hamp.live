<template>
    <div id="NotFoundComponent">
        <div class="not-found-code">404</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
    #NotFoundComponent {
        @include flex(column, center, center);
        width: 100%;
        height: 100%;

        .not-found-code {
            font-weight: bolder;
            font-size: 10vmin;
            color: $font-color-primary;
        }
    }
</style>
