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
        <div class="util-margin-bottom-small">
          <div>
            <h2 class="util-margin-bottom-small">View ranking for:</h2>

            <ul>
              <li v-for="category in categories" :key="category.id">
                <input type="radio" :id="category.id" name="selector" />
                <label :for="category.id">{{ category.name }}</label>

                <div class="check"></div>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" class="btn btn--green">Apply</a>
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
    max-height: 22rem;
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
