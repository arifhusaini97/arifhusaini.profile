<template>
  <div class="screen__content">
    <div class="vote-center">
      <div class="vote-center__question-title">
        <span class="center text--title"
          >A Better High School StudentA Better High School StudentA Better
          High School StudentA Better High School StudentA Better High School
          StudentA Better High School StudentA Better High School StudentA
          Better High School Student</span
        >
      </div>
      <div class="vote-center__question-detail">
        <table class="table">
          <tbody>
            <tr class="row">
              <td class="cell cell--radius-top-left header">Category</td>
              <td class="cell cell--radius-top-right">
                <span class="text--single-line">Student in Campus</span>
              </td>
            </tr>
            <tr class="row">
              <td class="cell cell--radius-bottom-left header">Session</td>
              <td class="cell cell--radius-bottom-right">
                <span class="text--single-line">June-December 2021</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="vote-center__timer">
        <Timer />
      </div>
      <div class="vote-center__sheet">
        <div
          class="
            vote-center__sheet-candidate vote-center__sheet-candidate--active
          ">
          <IndividualDetailsCard
            custom_class="card__border
            card__border-vote
            card__border-vote--active" />
        </div>
        <div class="vote-center__sheet-candidate">
          <IndividualDetailsCard
            custom_class="card__border card__border-vote" />
        </div>
      </div>
      <div class="vote-center__paginator">
        <span class="vote-center__paginator-current">1</span
        ><span class="vote-center__paginator-total">10</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Timer from '@/components/sub-components/Timer';
  import IndividualDetailsCard from '@/components/sub-components/IndividualDetailsCard';
  export default {
    name: 'VoteCenter',
    components: { Timer, IndividualDetailsCard },
  };
</script>

<style></style>
