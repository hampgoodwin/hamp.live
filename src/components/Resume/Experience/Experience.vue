<template>
    <div id="experience">
        <div class="section">
            <div class="section-title">EXPERIENCE&nbsp;</div>
            <div class="section-rule"></div>
        </div>
        <template v-for="experience in experiences">
            <ExperienceCard class="experience-card" :experience="experience" v-bind:key="experience.company+experience.position"/>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ExperienceCard from './ExperienceCard.vue';
import { Prop } from 'vue/types/options';
import { Experience } from '@/assets/resume/resume.model';

export default Vue.extend({
    props: {
        experiences: Array as Prop<Experience[]>,
    },
    components: {
        ExperienceCard,
    },
});

</script>

<style lang="scss" scoped>
    #experience {

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

        .experience-card {
            padding: 1vmin 0;
        }
    }
    
</style>
