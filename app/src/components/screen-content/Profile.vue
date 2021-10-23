<template>
  <div class="screen__content p-2">
    <div class="authentication">
      <form method="post">
        <div class="card center form-group neumorphism">
          <h1>Profile</h1>
          <div class="form pt-1">
            <div
              class="
                flex-column
                flex-justify-content__space-around
                mx-1r
                trans-a-2s
              ">
              <select name="country" id="country" required>
                <option value="" disabled selected>Country</option>
                <option value="brunei">Brunei</option>
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
                <option value="singapore">Singapore</option>
              </select>
              <select name="state" id="state" required>
                <option value="" disabled selected>State</option>
                <option value="johor">Johor</option>
                <option value="kedah">Kedah</option>
                <option value="kelantan">Kelantan</option>
                <option value="melacca">Melacca</option>
              </select>

              <select name="city" id="city" required>
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
              ">
              <input
                id="birthday"
                name="birthday"
                required
                placeholder="Birthdate"
                type="text"
                onfocus="(this.type='date')" />
              <div class="container">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="M"
                  required
                  checked
                  hidden />
                <input
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

          <button type="submit" class="btn btn-block btn-large btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
  };
</script>

<style></style>
