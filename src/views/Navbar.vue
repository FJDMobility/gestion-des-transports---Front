<template>
    <div>
     <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <!-- <li class="nav-item" v-if="user"> -->
             <li>
          <router-link class="nav-link" to="/listecovoiturage">Liste covoiturages</router-link>
        </li>
        <!-- <li class="nav-item" v-if="user"> -->
            <li>
          <router-link class="nav-link" to="/covoiturageresa">Reserver un covoiturage</router-link>
        </li>
        <!-- <li class="nav-item" v-if="user==null"> -->
            <li>
          <router-link class="nav-link" to="/organisercovoiturage">Organiser un covoiturage</router-link>
        </li>
         
         
         
        <!-- <li class="nav-item" v-if="user==null"> -->
           <li>
          <router-link class="nav-link" to="/signin">Signin</router-link>
        </li>
         <!-- <li class="nav-item" v-if="user==null"> -->
            <li>
          <router-link class="nav-link" to="/signup">Signup</router-link>
        </li>
         <!-- <li class="nav-item" v-if="user"> -->
            <li>
          <a class="nav-link" v-on:click="logout" style="cursor:pointer;">Logout</a>
        </li>
       
       
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
</template>
<script>


export default{
name:'Navbar',
data(){
return{
  user:null
}
},
methods:{
  logout(){
    console.log('je me deconnecte');
  }
}

  }

    
</script>

<style>
nav{
    background: #8d969f5e;
}
</style>