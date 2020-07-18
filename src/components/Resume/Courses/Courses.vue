<template>
    <div id="courses">
        <div class="section">
            <div class="section-title">Courses&nbsp;</div>
            <div class="section-rule"></div>
        </div>

        <div class="courses" v-for="course in courses" v-bind:key="course.name">
            <a class="course" :href="course.url">
                <font-awesome-icon v-if="course.hasOwnProperty('faIcon')" class="fa-icon" :icon="['fab', course.faIcon]" />
                <div class="name">{{course.name}}</div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Course } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';
export default Vue.extend({
    props: {
        courses: Array as Prop<Course[]>,
    },
});
</script>

<style lang="scss" scoped>
    $card-fade: linear-gradient(170deg, rgba(96, 110, 123, .7), rgba(245, 245, 245, .5));

    #courses {

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

        .courses {
            @include flex(column, center, flex-start);
            margin: 2vmin 0 0 0;
            display: inline-flex;

            .course {
                flex-shrink: 1;
                flex: 0 1 auto;
                color: $font-color-secondary;
                background: $color-tertiary;
                text-decoration: none;
                border-radius: .5vmin;
                margin: .5vmin;
                padding: .5vmin;
                user-select: none;

                .name {
                    font-size: 2.75vmin;
                }
            }

            .course:hover {
                color: $font-color-primary;
                background: $color-secondary;
                box-shadow: inset 0px 0px 0px 1px $color-primary;
                cursor: pointer;
            }
                
        }
        .course:hover {
            background: $color-tertiary;
        }
    }
</style>

