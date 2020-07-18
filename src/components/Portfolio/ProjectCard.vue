<template>
    <div id="presentation-card" :class="{ 'image-right': !imagePosition }">
        <div id="details" :class="{ 'align-end': !imagePosition}">
            <div class="title">{{project.title}}</div>
            <div class="subtitle">{{project.subtitle}}</div>
            <div class="description">{{project.description}}</div>
            <div class="presentation-card-footer" :class="{ 'image-right': imagePosition }">
                <div class="technology" v-for="technology in project.technologies" :key="technology.name">
                    <font-awesome-icon v-if="technology.hasOwnProperty('faIcon')" :icon="[technology.faIconGroup, technology.faIcon]" :title="technology.name"/>
                    <div class="technology-text" v-else>{{technology.name}}</div>
                </div>
                <a :href="project.source" class="source" :class="{ 'margin-left': !imagePosition}">
                    <div class="text">
                        Source Here
                    </div>
                </a>
            </div>
        </div>
        <div id="hero">
            <font-awesome-icon class="fa-icon" :class="{ 'padding-left': !imagePosition}" :icon="[project.faIconGroup, project.faIcon]" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as pType from '@/assets/portfolio/presentation.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        project: Object as Prop<pType.Presentation>,
        imagePosition: Boolean,
    },
    methods: {
    },
});
</script>

<style lang="scss" scoped>
    $card-fade-right: linear-gradient(to right,rgba(245, 245, 245, 1), rgba(96, 110, 123, .5));
    $card-fade-left:  linear-gradient(to left ,rgba(245, 245, 245, 1), rgba(96, 110, 123, .5));

    #presentation-card {
        @include flex(row, center, center);
        width: 80%;
        min-height: 24vmin;
        margin: 2vmin 0;

        #details {
            @include flex(column, center, flex-start);
            height: 100%;
            width: 100%;

            .title {
                font-size: 3vmin;
            }
            .subtitle {
                font-size: 2.25vmin;
            }
            .description {
                font-size: 1.75vmin;
            }
            .presentation-card-footer {
                @include flex(row, flex-end, center);
                width: 100%;
                margin: 3vmin 0 0 0;

                .technology {
                    color: $font-color-primary;
                    display: inline-flex;
                    vertical-align: top !important;
                    font-size: 3vmin;
                    padding: .5vmin;
                    user-select: none;

                    .technology-text {
                        font-size: 1.75vmin;
                        background: $color-primary;
                        color: $font-color-secondary;
                        padding: 0 .5vmin;
                        border-radius: .5vmin;
                    }
                }

                .source {
                    @include flex(row, center, center);
                    background: $color-tertiary;
                    border: 1px solid $color-primary;
                    color: $font-color-secondary;
                    padding: .7vmin 2vmin;
                    margin-right: 3vmin;
                    max-width: 25%;
                    text-decoration: none;
                    .text {
                        font-size: 2vmin;
                    }
                }
                .source:hover {
                    cursor: pointer;
                    background: $color-secondary;
                    border: 1px solid $color-tertiary;
                    color: $font-color-primary;
                }
            }
        }

        #hero {
            @include flex(column, center, center);

            .fa-icon {
                padding: 2vmin 2vmin 2vmin 0;
                font-size: 16vmin;
            }
        }
    }
    .image-right {
        flex-direction: row-reverse !important;
    }
    .align-end {
        align-items: flex-end !important;
    }
    .justify-end {
        justify-content: flex-end !important;
    }
    .padding-left {
        padding-left: 2vmin !important;
        padding-right: 0;
    }
    .margin-left {
        margin-left: 3vmin !important;
        margin-right: 0 !important;
    }
</style>
