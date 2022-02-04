<template>
  <div class="login-box">
  <div class="login-logo">
   
  </div>
   <div class="alert alert-danger" v-show="invalid">
        <strong>Invalid Username or Password</strong>
    </div>
  <div class="login-box-body">
    
    <p class="login-box-msg">CHATAPP</p>
   
    <form @submit.prevent="login">
      <div class="form-group has-feedback" style="margin-bottom:0px">
          <label for="email">Username</label>
        <input v-validate="'required'" data-vv-as="Username" name="email" type="text" class="form-control" placeholder="Enter your Username" v-model="formdata.email">
        <span class="fa fa-envelope form-control-feedback"></span>
      </div>
       <span style="color:red;font-style:italic">{{ errors.first('email') }}</span>
      <br>
      <div class="form-group has-feedback" style="margin-bottom:0px">
           <label for="password">Password</label>
        <input v-validate="'required'" type="password" class="form-control" name="password" data-vv-as="Password" placeholder="Enter Password" v-model="formdata.password">
        <span class="fa fa-lock form-control-feedback"></span>
      </div>
       <span style="color:red;font-style:italic">{{ errors.first('password') }}</span>
      <div class="row" style="margin-top:15px">
        <!-- /.col -->
        <div class="col-xs-12">
          <button :disabled="toggledisabled" type="submit" class="btn btn-primary btn-block btn-flat">Sign In <img v-show="toggledisabled" src="assets/images/loading.gif" style="max-height: 20px"></button>
        </div>
        <!-- /.col -->
      </div>
    </form>
    <br>
  </div>
  <!-- /.login-box-body -->
</div>
</template>

<script>
export default {
  name: 'Login',
   data:function(){
      return {
          toggledisabled:false,
          invalid:false,
          formdata:{
              email:'',
              password:''
          }
      }
  },
  methods: {
      login:function(){

           this.$validator.validate().then(valid => {
                if (valid) {
          this.toggledisabled = true;
          var _this = this;
          this.$http.post(this.config.baseurl+'/admin/login',_this.formdata).then((result)=>{
               _this.toggledisabled = false;
              if(result.data.status==='success'){
                 localStorage.setItem('user',JSON.stringify(result.data.user));
                  localStorage.setItem('apikey',result.data.apikey);
                  this.$router.push('dashboard');
              }else{
                 _this.invalid = true;
                 setTimeout(function(){ _this.invalid = false},3000)
              }
          }).catch(()=>{
              _this.toggledisabled = false;
              this.$swal('Oops','No Internet Connection detected','error');
             // console.log(err)
          });
      }
           }).catch(()=>{
             //  console.log(err);
           });

  },
  created:function() {
   // console.log(this.$toastr);
  },
}
}
</script>
<style>

</style>

