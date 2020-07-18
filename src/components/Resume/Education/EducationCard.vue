<template>
    <div class="education">
        <div class="university">
            {{education.university}}
        </div>
        <div class="degree">
            {{education.degree}}
        </div>
        <div class="time">
            <span class="start">{{m(education.startDate).format('MMM YYYY')}}&nbsp;-&nbsp;</span>
            <span class="end">{{
                endDateHandler(education.endDate)
            }}</span>
        </div>
        <div class="location">
            <span class="city">{{education.location.city}},&nbsp;{{education.location.state}}</span>
        </div>
        <div class="description">{{education.description}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Education } from '@/assets/resume/resume.model';
import { Prop } from 'vue/types/options';

import * as moment from 'moment';
// tslint:disable-next-line
const m = require('moment');

export default Vue.extend({
    props: {
        education: Object as Prop<Education>,
    },
    data(): {
        m: moment.Moment;
    } {
        return {
            m,
        };
    },
    methods: {
        endDateHandler(endDate: moment.Moment | string): string {
            if (m.isMoment(endDate)) {
                return m(endDate).format('MMM YYYY');
            }
            return 'Current';
        },
    },
});
</script>

<style lang="scss" scoped>
    #education {
        @include flex(column, center, flex-start);
        color: $font-color-primary;

        .university {
            font-size: 3vmin;
        }
        .degree {
            font-size: 4vmin;
            font-style: italic;
        }
        .time {
            font-size: 2vmin;
        }
        .location {
            font-size: 1.5vmin;
        }
        .description {
            font-size: 2.5vmin;
            font-weight: bolder;
        }
    }
</style>

