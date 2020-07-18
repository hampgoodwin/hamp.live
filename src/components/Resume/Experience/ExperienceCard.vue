<template>
    <div class="experience" >
            <div id="meta">
                <div class="position">{{experience.position}}</div>
                <div class="company">{{experience.company}}</div>
                <div class="time">
                    <span class="start">{{m(experience.startDate).format('MMM YYYY')}}&nbsp;-&nbsp;</span>
                    <span class="end">{{
                        endDateHandler(experience.endDate)
                    }}</span>
                </div>
                <div class="months">{{monthsHandler(experience.startDate, experience.endDate)}}&nbsp;months</div>
                <div class="location">
                    <div class="city-state">
                        <span class="city">{{experience.location.city}},&nbsp;</span>
                        <span class="state">{{experience.location.state}}</span>
                    </div>
                </div>
            </div>
        
            <div id="details">
                <div class="accomplishments">
                    <div class="accomplishment" v-for="accomplishment in experience.accomplishments" v-bind:key="accomplishment">
                        <div class="accomplishment-indent">
                            <font-awesome-icon :icon="['fas', 'angle-double-right']"/>
                        </div>
                       <div class="text">{{accomplishment}}</div>
                    </div>
                </div>
                <div class="technologies">
                    <div class="technology" v-for="technology in experience.technologies" v-bind:key="experience.position+experience.company+technology.name">
                        <font-awesome-icon v-if="technology.hasOwnProperty('faIcon')" :icon="[technology.faIconGroup, technology.faIcon]" :title="technology.name"/>
                        <div class="technology-text" v-else>{{technology.name}}</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';
import { Experience } from '@/assets/resume/resume.model';

import * as moment from 'moment';
// tslint:disable-next-line
const m = require('moment');

export default Vue.extend({
    data(): {
        m: moment.Moment;
    } {
        return {
            m,
        };
    },
    props: {
        experience: Object as Prop<Experience>,
    },
    methods: {
        endDateHandler(endDate: moment.Moment | string): string {
            if (m.isMoment(endDate)) {
                return m(endDate).format('MMM YYYY');
            }
            return 'Current';
        },
        monthsHandler(startDate: moment.Moment, endDate: moment.Moment | string): number {
            if (m.isMoment(endDate)) {
                return m(endDate).diff(startDate, 'months') + 1;
            }
            return m(m()).diff(startDate, 'months') + 1;
        },
    },
});
</script>

<style lang="scss" scoped>
    #experience {
        @include flex(row, center, center);

        .experience {
            @include flex(row, flex-start, flex-start);

            @media screen and(max-width:960px) {
                @include flex(column, flex-start, flex-start);
            }

            #meta {
                @include flex(column, flex-start, flex-start);
                width: 35vmin;
                flex-grow: 0 !important;
                flex-shrink: 0 !important;

                .position {
                    font-size: 4vmin;
                    font-weight: bolder;
                }
                .company {
                    font-size: 3vmin;
                    font-style: italic;
                    font-weight: bold;
                }
                .time {
                    font-weight: 300;
                    font-size: 2vmin;
                }
                .months {
                    font-size: 3vmin;
                }
                .location {
                    font-size: 1.5vmin;
                }
            }

            #details {
                @include flex(column, flex-start, flex-start);
                padding: 2vmin 0 0 7vmin;

                @media screen and (max-width:960px) {
                    padding: 2vmin 0 0 0;
                }

                .accomplishments {
                    
                    .accomplishment {
                        @include flex(row, flex-start, center);

                        .accomplishment-indent {
                            align-self: start;
                            height: 100%;
                            font-size: 2vmin;
                        }

                        .text {
                            font-size: 2vmin;
                            padding: 0 0 1vmin 1vmin;
                        }
                    }
                }

                .technologies {

                    .technology {
                        color: $font-color-primary;
                        display: inline-flex;
                        vertical-align: top !important;
                        font-size: 3vmin;
                        padding: .5vmin;
                        user-select: none;

                        .technology-text {
                            font-size: 2vmin;
                            background: $color-primary;
                            color: $font-color-secondary;
                            padding: 0 .5vmin;
                            border-radius: .5vmin;
                        }
                    }
                }
            }
        }

    }
    .flex-row {
        display: flex;
        flex-direction: row;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
    }
</style>
