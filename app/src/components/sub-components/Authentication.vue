<template>
  <div class="authentication">
    <form method="post">
      <div class="center card neumorphism form-group">
        <h1>{{ authentication_mode.title }}</h1>
        <div class="form pt-1">
          <div class="flex-column flex-justify-content__space-around mx-1r">
            <input
              class="form-input trans-a-2s"
              type="email"
              name="u"
              placeholder="Email"
              required />
            <input
              class="form-input trans-a-2s"
              type="password"
              name="p"
              placeholder="Password"
              required
              v-model="password" />
            <input
              v-if="button_toggle_registration_platform"
              class="form-input trans-a-2s"
              type="password"
              name="p_confirmation"
              placeholder="Repeat Password"
              required
              @change="validatePassword" />
          </div>
          <div
            class="
              flex-column
              flex-justify-content__space-around
              mx-1r
              trans-a-2s
            "
            v-if="button_toggle_registration_platform">
            <select
              v-if="button_toggle_registration_platform"
              name="country"
              id="country"
              required>
              <option value="" disabled selected>Country</option>
              <option value="brunei">Brunei</option>
              <option value="indonesia">Indonesia</option>
              <option value="malaysia">Malaysia</option>
              <option value="singapore">Singapore</option>
            </select>
            <select
              v-if="button_toggle_registration_platform"
              name="state"
              id="state"
              required>
              <option value="" disabled selected>State</option>
              <option value="johor">Johor</option>
              <option value="kedah">Kedah</option>
              <option value="kelantan">Kelantan</option>
              <option value="melacca">Melacca</option>
            </select>

            <select
              v-if="button_toggle_registration_platform"
              name="city"
              id="city"
              required>
              <option value="" disabled selected>City</option>
              <option value="batu-pahat">Batu Pahat</option>
              <option value="johor-bahru">Johor Bahru</option>
              <option value="kluang">Kluang</option>
              <option value="kota-tinggi">Kota Tinggi</option>
            </select>
          </div>
          <div
            class="
              flex-column
              flex-justify-content__space-around
              mx-1r
              trans-a-2s
            "
            v-if="button_toggle_registration_platform">
            <input type="date" id="birthday" name="birthday" required />
            <div class="container">
              <input
                v-if="button_toggle_registration_platform"
                type="radio"
                id="male"
                name="gender"
                value="M"
                required
                checked
                hidden />
              <input
                v-if="button_toggle_registration_platform"
                type="radio"
                id="female"
                name="gender"
                value="F"
                required
                hidden />
              <div class="switch">
                <label for="male">Male</label>
                <label for="female">Female</label>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-large">
          Let me vote.
        </button>
        <a
          href="javascript:;"
          class="btn-text"
          @click="registrationPlatform"
          v-html="authentication_mode.button_text"></a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Authentication',
    data() {
      return {
        button_toggle_registration_platform: false,
        password: '',
        authentication_mode: {
          title: 'Login',
          button_text: 'register new &rarr;',
        },
      };
    },
    methods: {
      registrationPlatform() {
        this.button_toggle_registration_platform =
          !this.button_toggle_registration_platform;

        if (this.button_toggle_registration_platform) {
          this.authentication_mode.title = 'Registration';
          this.authentication_mode.button_text = '&larr; login';
        } else {
          this.authentication_mode.title = 'Login';
          this.authentication_mode.button_text = 'register new &rarr;';
        }

        this.$emit('toggle-hide-notes');
      },
      validatePassword($event) {
        if (this.password != $event.target.value) {
          $event.target.setCustomValidity("Passwords Don't Match");
        } else {
          $event.target.setCustomValidity('');
        }
      },
    },
  };
</script>

<style></style>
