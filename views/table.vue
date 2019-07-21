<template>
    <div class="table__content">
      <div
      class="flex"
      > 수강과목
      </div>
			<tableRow
				state="first"
				:index="0"
				:inputData="{ data:rowTitle }">
			</tableRow>

      <div v-for="(reinFo, index) in university" :key="index.id">
				<tableRow
					@removeline="removeline"
					:index="index+1"
					:inputData="{ data: reinFo }">
          
          </tableRow>
			  </div>

      <tableRow
				@addline="addline"
				state="add"
				:index="university.length + 1"
				:inputData="{ data:null }">
				</tableRow>
       
      <div id="app">
        <router-link  :to="{ path: './Calendar' }">다알력</router-link>
      </div> 
     
      
    </div>
    
    
</template>
<script>
import TableRow from '@/components/table/tableRow';
import retableRow from '@/components/table/tableRow';
	
export default {
    name: 'app',
		components: {
			'tableRow': TableRow,
      		
    },
      mounted(){
       router.push("../views/Calendar")
     },
    data: function () {
        
      return {
          selected: [],
				rowTitle: {
          course: "COURSE",
					score: "SCORE",
					grade: "GRADE",
					control:"CONTROL"
        },
          university: [
            {
            course: '컴공입',
            score: '3',
            grade: 'A'
              
            },
            {
             course: '수학',
              score: '4',
              grade: 'F'
            }
          
          ]
        
        
      }
    },
     methods: {
      removeline: function(index) {
        
        this.university.splice(index-1, 1)
            },

      addline: function(data) {
    
      let values = Object.values(data);
      
			for(let i=0; i<values.length; i++) {
				if(values[i] === "") {
				    alert("빈값을 입력하실 수는 없습니다.")
				    return;
          }
      }
     
       this.university.push(data)
      }
     }
	
            
}
</script>

<style>
 .table__content{
  margin-left: auto;
	margin-right: 800px;
 }
 
</style>

