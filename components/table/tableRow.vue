<template>
     <div
     class="row__content"
     :class="{'first-row': state==='first', 'add-row': state==='add'}"
    >
    <div
		class="table__index"
		v-if="index === 0">
			No.
		</div>
        <div
            class="table__index"
            v-else>
            {{index}}

        </div>
        <div
				v-if="state==='default' || state==='first'"
				class="row__course">
				{{ inputData.data.course }}
			</div>
            <div
				v-if="state==='add'"
				class="row__course">
				<input type="text" v-model="course" placeholder="ex) 국어">
			</div>
            	<div
				v-if="state==='default' || state==='first'"
				class="row__score">
				{{ inputData.data.score }}
			</div>
            	<div
				v-if="state==='add'"
				class="row__score">
				<select type="text" v-model="score" >
					<option :value="{number: 2}">2</option>
					<option :value="{number: 3}">3</option>
					<option :value="{number: 4}">4</option>
				</select>
			</div>
            <div
				v-if="state==='default' || state==='first'"
				class="row__grade">
				{{ inputData.data.grade }}
			</div>
            <div
				v-if="state==='add'"
				class="row__grade">
				<select type="text" v-model="grade" >
					<option :value="{number: 4}">A</option>
					<option :value="{number: 3}">B</option>
					<option :value="{number: 2}">C</option>
					<option :value="{number: 1}">D</option>
					<option :value="{number: 0}">F</option>
				</select>
			</div>
			<div
				v-if="state==='first'"
				class="row__content__comtrol">
				{{ inputData.data.control }}
			</div>

			<div
				v-if="state==='default'"
				class="row__remove">
				<button
					@click="remove"
					class="button_base b01_simple_rollover">
					REMOVE
				</button>
			</div>
            <div
				v-if="state==='add'"
				class="row__add">
				<button
					@click="add"
					class="button_base b01_simple_rollover">
					ADD
				</button>
			</div>
   </div>
</template>
<script>
export default {
    name: 'TableRow',
 	props: {
		number:{
			default: 0,
			type: Number
		},
      index: {
        default: 0,
				type: Number
			},
      inputData: {
        default: function() {
                    type: '';
					data: null;
				},
				type: Object
			},
      state: {
        default: "default",
				type: String
			}
    },
    data: function () {
      return {
				course: "",
				score: "",
				grade: ""
      }
    },
     methods: {
      remove: function() {
        this.$emit("removeline", this.index);
			},

		add: function() {
        this.$emit("addline" , {
          	course: this.course,
			score: this.score,
			grade: this.grade,

				})
        this.course = ""
        this.score = ""
      	this.grade = ""
			}
	
}}
</script>

<style>
.row__content {
		width: auto;
		border: 1px #bebebe solid;
		margin: 2px;
		height: 40px;
		line-height: 40px;
		float: center;
		text-align: center;
		background: #fefefe;
	}

.row__content:hover {
		background: #bebebe;
		font-weight: 700;
	}

	
.add-row {
		border: 1px solid #00bb00;
		margin-bottom: 10px;
		
	}

.table__index {
		float: left;
		width: 40px;
		border-right: 1px #bebebe solid;
	}

.row__course, .row__course input {
		float: left;
		border-right: 1px #bebebe solid;
		width: 200px;
	}

.row__score, .row__score input {
		float: left;
		border-right: 1px #bebebe solid;
		width: 150px;
	}

.row__grade, .row__grade input {
		float:left;
		border-right: 1px #bebebe solid;
		width: 75px;
	}

	
input {
		border : 1px solid #bebebe;
		height: 36px;
		font-size: 15px;
		padding-left: -1px;
	}

input:focus {
		outline: none;
	}
.b01_simple_rollover {
    color: #000000;
    border: #000000 solid 1px;
    padding: 10px;
    background-color: #ffffff;
}
.b01_simple_rollover:hover {
    color: #ffffff;
    background-color: #000000;
}

</style>

