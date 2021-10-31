<template>
  <div class="popup" id="popup">
    <div class="popup__content">
      <div class="popup__left">
        <img
          src="@/assets/img/rank-1.jpg"
          alt="Candidate Photo"
          class="popup__img" />
        <img
          src="@/assets/img/rank-2.jpg"
          alt="Candidate Photo"
          class="popup__img" />
      </div>
      <div class="popup__right">
        <VeeForm
          :validation-schema="category_schema"
          :initial-values="filters"
          @submit="applyFilter"
          style="position: relative">
          <div class="util-margin-bottom-small">
            <div style="position: relative">
              <h2 class="mb-5r">View ranking for:</h2>
              <div
                style="
                  display: flex;
                  position: absolute;
                  top: 12.5%;
                  left: 50%;
                  transform: translate(-50%, 0%);
                  justify-content: space-between;
                  width: 100%;
                ">
                <div style="display: flex; width: 90%">
                  <div
                    v-if="filters.category"
                    style="
                      color: white;
                      background-color: brown;
                      border-radius: 2rem;
                      padding: 0.5rem;
                      margin-right: 1rem;
                      width: 33%;
                    ">
                    <span
                      class="text--single-line"
                      style="text-align: center; display: -webkit-box">
                      {{ filters.category.name }}</span
                    >
                  </div>
                  <div
                    v-if="filters.sub_category"
                    style="
                      color: white;
                      background-color: brown;
                      border-radius: 2rem;
                      padding: 0.5rem;
                      margin-right: 1rem;
                      width: 33%;
                    ">
                    <span
                      class="text--single-line"
                      style="text-align: center; display: -webkit-box"
                      >{{ filters.sub_category.name }}</span
                    >
                  </div>
                  <div
                    v-if="filters.topic"
                    style="
                      color: white;
                      background-color: brown;
                      border-radius: 2rem;
                      padding: 0.5rem;
                      margin-right: 1rem;
                      width: 34%;
                    ">
                    <span
                      class="text--single-line"
                      style="text-align: center; display: -webkit-box"
                      >{{ filters.topic.name }}</span
                    >
                  </div>
                </div>
                <a
                  href="javascript:;"
                  v-if="filters.category"
                  style="height: 100%; width: 10%; cursor: pointer"
                  @click="revert()">
                  🔙
                </a>
              </div>
              <VeeField
                name="category"
                type="category"
                placeholder="Category"
                :bails="false"
                v-slot="{ field }"
                v-if="!filters.category">
                <ul class="mb-3r">
                  <li
                    v-for="category in categories"
                    :key="'category-' + category.id">
                    <input
                      type="radio"
                      :id="category.id"
                      name="selector"
                      v-bind="field"
                      v-model="filters.category"
                      :value="category" />
                    <label :for="category.id">{{ category.name }}</label>
                    <div class="check"></div>
                  </li>
                </ul>
                <ErrorMessage
                  style="
                    color: white;
                    background-color: red;
                    border-radius: 2rem;
                    position: absolute;
                    bottom: -15%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    width: 100%;
                    padding: 0.5rem;
                  "
                  name="category" />
              </VeeField>

              <VeeField
                name="sub_category"
                type="sub_category"
                placeholder="Sub-Category"
                :bails="false"
                v-slot="{ field }"
                v-if="filters.category && !filters.sub_category">
                <ul class="mb-3r">
                  <li
                    v-for="sub_category in sub_categories"
                    :key="'sub_category-' + sub_category.id">
                    <input
                      type="radio"
                      :id="sub_category.id"
                      name="selector"
                      v-bind="field"
                      v-model="filters.sub_category"
                      :value="sub_category" />
                    <label :for="sub_category.id">{{
                      sub_category.name
                    }}</label>
                    <div class="check"></div>
                  </li>
                </ul>
                <ErrorMessage
                  style="
                    color: white;
                    background-color: red;
                    border-radius: 2rem;
                    position: absolute;
                    bottom: -15%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    width: 100%;
                    padding: 0.5rem;
                  "
                  name="sub_category" />
              </VeeField>

              <VeeField
                name="topic"
                type="topic"
                placeholder="Topics"
                :bails="false"
                v-slot="{ field }"
                v-else-if="
                  filters.category && filters.sub_category && !filters.topic
                ">
                <ul class="mb-3r">
                  <li v-for="topic in topics" :key="'topic-' + topic.id">
                    <input
                      type="radio"
                      :id="topic.id"
                      name="selector"
                      v-bind="field"
                      v-model="filters.topic"
                      :value="topic" />
                    <label :for="topic.id">{{ topic.name }}</label>
                    <div class="check"></div>
                  </li>
                </ul>
                <ErrorMessage
                  style="
                    color: white;
                    background-color: red;
                    border-radius: 2rem;
                    position: absolute;
                    bottom: -15%;
                    left: 50%;
                    transform: translate(-50%, 0%);
                    width: 100%;
                    padding: 0.5rem;
                  "
                  name="topic" />
              </VeeField>
              <div
                v-else-if="
                  filters.category && filters.sub_category && filters.topic
                "
                style="
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  overflow: auto;
                  height: 22rem;

                  display: flex;
                  justify-content: center;
                  align-items: center;
                ">
                Now, it's completely ready!
              </div>
            </div>
          </div>
          <button
            v-if="filters.category && filters.sub_category && filters.topic"
            type="submit"
            class="btn btn-block btn-large btn-primary"
            style="
              position: absolute;
              bottom: -15%;
              left: 50%;
              transform: translate(-50%, 0%);
            ">
            View Now!
          </button>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Popup1',
    props: {
      categories: {
        type: Array,
        default: () => {
          return [{ id: 1, name: 'Artist' }];
        },
      },
      sub_categories: {
        type: Array,
        default: () => {
          return [{ id: 1, name: 'Malaysia' }];
        },
      },
      topics: {
        type: Array,
        default: () => {
          return [{ id: 1, name: 'Popularity (General)' }];
        },
      },
    },
    data() {
      return {
        category_schema: {
          category: 'required',
          sub_category: 'required',
          topic: 'required',
        },
      };
    },
    computed: {
      filters() {
        let data = this.$store.getters['screen/candidate/filters'];
        return data;
      },
    },
    methods: {
      revert() {
        this.$store.dispatch('screen/candidate/resetFilters');
      },
      applyFilter(value) {
        this.$emit('show-hide');
        this.$store.dispatch('screen/candidate/setFilters', {
          payload: value,
        });
      },
    },
  };
</script>

<style scoped>
  h2 {
    color: var(--color-primary-3);
  }

  .container ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    height: 22rem;
  }

  input {
    width: auto;
  }

  ul li {
    color: #aaaaaa;
    display: block;
    position: relative;
    float: left;
    width: 100%;
    /* height: 100px; */

    /* height: 100px; */
    border-bottom: 1px solid #aaaaaa;
  }

  ul li input[type='radio'] {
    position: absolute;
    visibility: hidden;
  }

  ul li label {
    display: block;
    position: relative;
    font-weight: 300;
    font-size: 1.35em;
    padding: 7.5px 25px 25px 50px;
    margin: 10px auto;
    height: 10px;
    z-index: 9;
    cursor: pointer;
    -webkit-transition: all 0.25s linear;
  }

  ul li:hover label {
    color: var(--color-primary-1);
  }

  ul li .check {
    display: block;
    position: absolute;
    border: 5px solid #aaaaaa;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 15px;
    left: 20px;
    z-index: 5;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }

  ul li:hover .check {
    border: 5px solid var(--color-primary-1);
  }

  ul li .check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 10px;
    width: 10px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input[type='radio']:checked ~ .check {
    border: 5px solid var(--color-primary-3);
  }

  input[type='radio']:checked ~ .check::before {
    background: var(--color-primary-3);
  }

  input[type='radio']:checked ~ label {
    color: var(--color-primary-3);
  }
</style>
