<template>
  <div class="hello">
   <div class="row">
            <div class="col-md-2" id="chatApp">
                <div class="panel panel-default ffside">
                    <div class="panel-heading">Online/Offline</div>
                    <div class="panel-body" style="padding:0px;">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(chatList,index) in chatLists" :key="index" style="cursor: pointer;"><img src="assets/images/profile.png" style="max-width: 20px;border-radius: 50%">&nbsp;&nbsp;{{ chatList.name }}  <i class="fa fa-circle pull-right" v-bind:class="{'online': (chatList.online=='Y')}"></i>  <span class="badge" v-if="chatList.msgCount !=0">{{ chatList.msgCount }}</span></li>
                            <li class="list-group-item" v-if="socketConnected.status == false">{{ socketConnected.msg }}</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
  </div>
</template>

<script>
import store from "@/store/store.js"
export default {
  name: 'Navigation',
  data(){
      return {
          chatLists:[],
           user_id: '',
            chatBox: [],
            socketConnected : {
            status: false,
            msg: 'Connecting Please Wait...'
        },
        bArr: {}
      }
  },
  methods:{
      
  },
  mounted(){
      this.user_id = store.state.AppActiveUser.userId
  }
 
}
</script>
<style scoped lang="scss">
.ffside {
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    width: 18em;
    overflow-x: hidden;
    padding-top: 50px;
}
</style>
