<template>
  <div class="area-list">
    <div class="area-item">
      <select class="form-control" name="province" v-model="selectedIds.provinceId"
              @change.stop="select('pro')">
        <option value="">省</option>
        <option :value="v.id" v-for="(v,i) in pro">{{v.name}}</option>
      </select>
      <!--<label v-if="errors.has('province')" class="error">{{ errors.first('province') }}</label>-->
    </div>
    <div class="area-item">
      <select class="form-control" name="city" v-model="selectedIds.cityId"
              @change.stop="select('city')">
        <option value="">市</option>
        <option :value="v.id" v-for="(v,i) in renderCity">{{v.name}}</option>
      </select>
      <!--<label v-if="errors.has('city')" class="error">{{ errors.first('city') }}</label>-->
    </div>
    <div class="area-item">
      <select class="form-control" name="country" @change.stop="select('country')"
              v-model="selectedIds.countryId">
        <option value="">县/区</option>
        <option :value="v.id" v-for="(v,i) in renderCountry">{{v.name}}</option>
      </select>
      <!--<label v-if="errors.has('country')" class="error">{{ errors.first('country') }}</label>-->
    </div>
  </div>
</template>


<script>
  export default {
    name: 'AreaLink',
    model: {
      prop: 'area',
      event: 'change'
    },
    props: {
      area: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        selectedIds: {
          provinceId: '',
          cityId: '',
          countryId: ''
        },
        renderCountry: [],
        renderCity: [],
        pro: []
      }
    },
    methods: {
      select(name) {
        this.result = this.selectedIds;
        this.$emit('select', name)
      },
      getPro() {

      },
      getCity() {

      },
      getCountry() {

      }
    },
    beforeMount() {
      this.getPro();
      this.getCity();
      this.getCountry();

    }
  }
</script>
