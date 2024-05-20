<template>
  <div id="app" class="APP">
    <div class="got-value">ON OK Value: {{ gotValue }}</div>
    <Button @click="open = true" type="primary">Open Date Picker</Button>
    <DatePicker
      v-model="datetime"
      type="datetime"
      format="yyyy-MM-dd HH:mm"
      v-show="open"
      :open="open"
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
      open: false,
      datetime: new Date(),
      gotValue: ""
    };
  },

  methods: {
    onOK() {
      this.gotValue = this.datetime.toString();
      this.open = false;
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
  }
}
</style>
