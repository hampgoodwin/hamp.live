<template>
    <div id="education">
        <div class="section">
            <div class="section-title">EDUCATION&nbsp;</div>
            <div class="section-rule"></div>
        </div>
        <div class="educations section">
            <template v-for="education in educations">
                <EducationCard class="education-card" :education="education" v-bind:key="education.university+education.description"/>           
            </template>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EducationCard from './EducationCard.vue';
import { Prop } from 'vue/types/options';
import { Education } from '@/assets/resume/resume.model';
export default Vue.extend({
    props: {
        educations: Array as Prop<Education[]>,
    },
    components: {
        EducationCard,
    },
});
</script>

<style lang="scss" scoped>
    #education {
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

        .educations {
            @include flex(row, space-around, center);

            @media screen and (max-width:960px) {
                @include flex(column, space-around, center);
            }
            .education-card {
                padding: 1vmin 0;
            }

        }
    }
</style>
