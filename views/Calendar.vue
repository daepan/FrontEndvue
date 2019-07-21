<template>
  <YearCalendar
    v-model="year"
    :activeDates.sync="activeDates"
    @toggleDate="toggleDate"
    prefixClass="your_customized_wrapper_class"
    :activeClass="activeClass"
  ></YearCalendar>
</template>

<script>
import YearCalendar from 'vue-material-year-calendar'
 
export default {
  components: { YearCalendar },
  data: function () {
    return {
      year: 2019,
      activeDates: [
        { date: '2019-02-13' },
        { date: '2019-02-14', className: 'red' },
        { date: '2019-02-15', className: 'blue' },
        { date: '2019-02-16', className: '.my_customize' }
      ],
      activeClass: '',
    }
  },
  methods: {
    toggleDate (dateInfo) {
      console.log(dateInfo)  
    }
  }
}
</script>


<style en="stylus">
.your_customized_wrapper_class{
  background-color: #00aaaa;
  color: white;
  
}
.red{
  background-color: red;
    color: white;
}
.blue{
    background-color: blue;
    color: white;
}
.my_customize{
    background-color: yellowgreen;
    color: white;
}

 
</style>