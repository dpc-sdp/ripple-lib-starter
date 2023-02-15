<script setup lang="ts">
interface Props {
  startDate: string
  endDate: string
  ctaBtn: {
    text: string
    url: string
  }
}

defineProps<Props>()
</script>
<template>
  <div class="tide-job-slider rpl-grid">
    <div
      aria-label="Application timeline. There are 21 days remaining to apply. Vacancy posted on 10 February 2023, vacancy closes on 03 March 2023."
      class="tide-job-slider__time-wrapper rpl-col-9-l">
      <div class="tide-job-slider__progress">
        <div class="tide-job-slider__progress-current" style="width: 50%; background-size: 816px;">
          <span
            class="tide-job-slider__progress-current-label tide-job-slider__progress-current-label--visible rpl-type-p rpl-type-weight-bold rpl-u-margin-t-2">21
            days
            remaining</span>
        </div>
      </div>
    </div>
    <div class="rpl-col-3-l rpl-col-start-10-l">
      <RplButton class="tide-job-slider__cta-btn">Apply for job</RplButton>
    </div>
  </div>
</template>
<style>
.tide-job-slider {}

.tide-job-slider__time-wrapper {
  width: auto;
}

.tide-job-slider__cta-btn {
  width: 100%;
}

.tide-job-slider__progress {
  position: relative;
  background-color: #e8ebee;
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: flex-end;
}

.tide-job-slider__progress-current {
  background-position: 100%;
  background-image: linear-gradient(-90deg, #642667, #027a83);
  position: relative;
  height: 100%;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column-reverse;
}

.tide-job-slider__progress-current-label {
  display: flex;
  padding-bottom: 10px;
  color: var(--rpl-clr-accent);
}
</style>
