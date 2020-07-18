<template>
    <div id="portfolio">
        <div class="section mt-5">
            <div class="section-title">PROJECTS&nbsp;</div>
            <div class="section-rule"></div>
        </div>
        <template v-for="(project, index) in portfolio.projects">
            <div class="presentation" :key="project.title">
                <ProjectCard :project="project" :imagePosition="imagePosition(index)"/>
            </div>
        </template>
        <div class="section mt-5">
            <div class="section-title">PRESENTATIONS&nbsp;</div>
            <div class="section-rule"></div>
        </div>
        <template v-for="(presentation, index) in presentations.presentations">
            <div class="presentation" :key="presentation.title">
                <PresentationCard :presentation="presentation" :imagePosition="imagePosition(index)"/>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Portfolio } from '@/assets/portfolio/portfolio';
import * as pType from '@/assets/portfolio/portfolio.model';
import ProjectCard from '@/components/Portfolio/ProjectCard.vue';
import { Presentations } from '@/assets/portfolio/presentation';
import * as prType from '@/assets/portfolio/presentation.model';
import PresentationCard from '@/components/Portfolio/PresentationCard.vue';

export default Vue.extend({
    data(): {
        presentations: prType.Presentations;
        portfolio: pType.Portfolio;
    } {
        return {
            presentations: Presentations,
            portfolio: Portfolio,
        };
    },
    components: {
        PresentationCard,
        ProjectCard,
    },
    methods: {
        imagePosition(ind: number): boolean {
            return ind % 2 === 0;
        },
    },
});
</script>

<style lang="scss" scoped>
    #portfolio {
        width: 100%;
        height: auto;

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

        .presentation {
            @include flex(row, center, center);
            width: 100%;
            min-height: 12vmin;
        }
    }
</style>
