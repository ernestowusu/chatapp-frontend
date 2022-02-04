<template>
      <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
            <!-- <img src="assets/images/icon.png" style="max-height:15px"> -->
          <a href="#" class="navbar-brand" style="font-weight:bold">CHATAPP</a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
                
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="hidden-xs" style="color:white">Hi {{username}}</span>
              </a>
              <ul class="dropdown-menu">
                <li class="user-footer">
                  <div class="pull-right">
                    <a @click.prevent="logout" class="btn btn-default btn-flat">Sign Out</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- <li class="dropdown user user-menu">
                    <a @click.prevent="logout" class="dropdown-toggle" data-toggle="dropdown">
                <span class="hidden-xs" style="color:white">Sign Out</span>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Top',
  props:{
      username:{
          type:String,
          default:''
      }
  },
  methods: {
      logout:function(){
          localStorage.removeItem('user');
          localStorage.removeItem('apikey');
          this.$router.push('login');
      }
  }, 
}
</script>
<style>
    .skin-blue .main-header .navbar {
    background-color: #03000e;
}
</style>
