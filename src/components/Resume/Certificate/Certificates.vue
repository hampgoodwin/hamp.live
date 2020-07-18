<template>
    <div id="certificates">
        <div class="section">
            <div class="section-title">CERTIFICATES&nbsp;</div>
            <div class="section-rule"></div>
        </div>

        <div class="certificates" v-for="certificate in certificates" v-bind:key="certificate.name">
            <a class="certificate" :href="certificate.url">
                <font-awesome-icon v-if="certificate.hasOwnProperty('faIcon')" class="fa-icon" :icon="['fab', certificate.faIcon]" />
                <div class="name">{{certificate.name}}</div>
            </a>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Certificate } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        certificates: Array as Prop<Certificate[]>,
    },
});
</script>

<style lang="scss" scoped>
    $card-fade: linear-gradient(170deg, rgba(96, 110, 123, .7), rgba(245, 245, 245, .5));

    #certificates {

        .section {
            @include flex(row, flex-start, center);

            .section-title {
                font-size: 2vmin;
            }
            .section-rule {
                height: 1px;
                width: 100%;
                flex-grow: 1;
                background: $banner-fade;
            }

            
        }

        .certificates {
            @include flex(row, flex-start, center);
            margin: 3vmin 0 0 0;

            .certificate {
                @include flex(row, center, center);
                display: inline-flex;
                min-height: 8vmin;
                color: $font-color-secondary;
                background: $color-tertiary;
                text-decoration: none;
                border-radius: .5vmin;
                margin: .5vmin;
                padding: 2vmin;
                user-select: none;

                .name {
                    font-size: 4vmin;
                    padding-left: 1vmin;
                }
            }

            .certificate:hover {
                color: $font-color-primary;
                background: $color-secondary;
                box-shadow: inset 0px 0px 0px 1px $color-primary;
                cursor: pointer;
            }
                
        }
        .certificate:hover {
            background: $color-tertiary;
        }
    }
</style>

