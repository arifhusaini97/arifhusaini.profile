<template>
  <div class="screen__content">
    <div class="vote-center">
      <div class="vote-center__question-title">
        <span class="text--title center">A Better High School Student</span>
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
        ----------------------------------------------------------------
      </div>
      <div class="vote-center__sheet">
        <div class="vote-center__sheet-candidate">Candidate 1</div>
        <div class="vote-center__sheet-candidate">Candidate 2</div>
      </div>
      <div class="vote-center__paginator">1/10</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VoteCenter',
  };
</script>

<style></style>
