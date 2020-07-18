<template>
    <div id="skills">
        <div class="section">
            <div class="section-title">SKILLS&nbsp;</div>
            <div class="section-rule"></div>
        </div>
        <div class="skills-groups section">
            <div class="skill-groups" v-for="(skills, group) in skillsByGroup" :key="group">
                <div class="group">
                    <div class="group-title">{{group}}</div>
                    <div class="group-rule"></div>
                </div>
                <div class="skills">
                    <a :href="'https://www.google.com/search?q='+encodeURI(skill.name)" class="skill" v-for="skill in skills" :key="skill.name">
                        <div class="skill-name">
                            {{skill.name}}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Skill } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';

export default Vue.extend({
    props: {
        skills: Array as Prop<Skill[]>,
    },
    computed: {
        skillGroups(): string[] {
            const categoriesUnique: string[] = [];

            for (const skill of this.skills) {
                if (this.inArray(skill.category, categoriesUnique)) {
                    continue;
                }
                categoriesUnique.push(skill.category);
            }
            return categoriesUnique;
        },
        skillsByGroup(): any {
            const skillsByGroup: any = {};
            for (const group of this.skillGroups) {
                skillsByGroup[group] = [];
                for (const skill of this.skills) {
                    if (skill.category === group) {
                        skillsByGroup[group].push({name: skill.name, faIcon: skill.faIcon});
                    }
                }
            }
            return skillsByGroup;
        },
    },
    methods: {
        inArray(value: any, array: any[]): boolean {
            for (const item of array) {
                if (value === item) {
                    return true;
                }
            }
            return false;
        },
    },
});
</script>

<style lang="scss" scoped>
    #skills {

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

        .skills-groups {
            @include flex(row, space-between, flex-start);
        
            @media screen and (max-width:960px) {
                @include flex(column, space-between, flex-start);
            }

            .skill-groups{
                @include flex(column, center, flex-start);
                width: 23%;
                
                @media screen and (max-width:960px) {
                    width: 100%;
                }

                .group {
                    @include flex(row, flex-start, center);
                    width: 100%;
                    .group-title {
                        font-size: 2vmin;
                        flex-shrink: 0;
                    }
                    .group-rule {
                        height: 1px;
                        width: 100%;
                        flex-grow: 1;
                        background: $banner-fade;
                    }
                }

                .skills {
                    max-width: 100%;
                    .skill {
                        display: inline-flex;
                        flex-shrink: 1;
                        flex: 0 1 auto;
                        color: $font-color-secondary;
                        background: $color-tertiary;
                        text-decoration: none;
                        border-radius: .5vmin;
                        margin: .5vmin;
                        padding: .5vmin;
                        user-select: none;

                        .skill-name {
                            font-size: 2.75vmin;
                        }
                    }

                    .skill:hover {
                        color: $font-color-primary;
                        background: $color-secondary;
                        box-shadow: inset 0px 0px 0px 1px $color-primary;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
