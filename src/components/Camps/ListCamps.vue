<template>
    <div class="row" >
       <ItemCamp  v-for="(item) in listCamps" :key="item.camp_Id" :name="item.camp_Name" :link="item.link" />
    </div>
</template>

<script>
/*
import ItemCamp from "@/components/Camps/ItemCamp";
*/
import { reactive } from 'vue'
import {mapState} from 'vuex'
import ItemCamp from "@/components/Camps/ItemCamp";
export default {
    name:'list-camps',
    components:{
        ItemCamp
       /* ItemCamp,*/
    },
    data(){
        return {
            data:[]
        }
    },
    computed:mapState({
        listCamps: state => reactive(state.listCamps)
    }),
    mounted() {
        this.loadCamps()
    },
    methods:{
        loadCamps(){
            this.$store.dispatch('getListCamps')
        },

    }
}
</script>
<style>

</style>