<template>
  <div id="app" class="APP">
    <div class="got-value" @click="clickOnGotValue">ON OK Value: {{ gotValue }}</div>
    <DatePicker
      v-model="datetime"
      type="datetime"
      format="yyyy-MM-dd HH:mm"
      :open="true"
      style="width: 200px"
      :clearable="false"
      @on-clear="
        () => {
          this.datetime = new Date();
        }
      "
      @on-ok="onOK"
    ></DatePicker>
  </div>
</template>

<script>
export default {
  name: "DateTimePicker",

  data() {
    return {
      datetime: new Date(),
      gotValue: ""
    };
  },

  methods: {
    onOK() {
      this.gotValue = this.datetime.toString();
    },
    clickOnGotValue() {
      this.gotValue = this.datetime.toString();
    }
  }
};
</script>

<style>
.APP {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .got-value {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
