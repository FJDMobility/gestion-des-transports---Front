<template>
    
<div class="container">
  
    <br>
    <br>
           <button type="button" class="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Organiser un covoiturage
</button>
<br>
<br>
<br>
    <div class="row">

                            <div class="card" style="width: 18rem;" v-for="item in mescovoiturages" :key="item.key">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{item.dateDepart}}</h5>
                       <h5 class="card-title">{{item.villeDepart}}</h5>
                       <h5 class="card-title">{{item.villeArrivee}}</h5>
                       <p class="card-text">{{item.description}}</p>
                       <div>
                        <button class="btn btn-success ms-2"  data-bs-toggle="modal" data-bs-target="#update" v-on:click="getData(item.dateDepart,item.villeDepart,item.villeArrivee,item.description,item.key)">Modifier</button>
                        <button class="btn btn-danger ms-2"  v-on:click="deletecovoiturage(item.key)">Supprimer</button>
                    </div>
                    </div>
                    </div>
                    


    </div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un nouveau trajet</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- form start -->
    <form @submit.prevent="ajouterCovoiturage">
<input class="form-control" type="date" placeholder="dateDepart" aria-label="default input example" v-model="covoiturage.dateDepart">
<input class="form-control" type="text" placeholder="villeDepart" aria-label="default input example" v-model="covoiturage.villeDepart">
<input class="form-control" type="text" placeholder="villeArrivee" aria-label="default input example" v-model="covoiturage.villeArrivee">
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="description" v-model="covoiturage.description"></textarea>

<div class="alert alert-success" v-if="messageSuccess">{{messageSuccess}}</div>
<button type="submit" class="btn btn-success">Ajouter</button>


    </form>
    <!-- form end -->
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

      </div>
      </div>
      
    </div>
  </div>
  
</div>



      
</div>



</template>



<script>


export default {
    name:'Organisercovoiturage',
    data(){
      return{
        covoiturage:{
        dateDepart:new Date,
        villeDepart:'',
        villeArrivee:'',
        description:'',
        uid:localStorage.getItem('uidUser')
        },
        
        
        messageSuccess:'',
        
        
      }
    },
    methods:{
      ajouterCovoiturage(){
        
           this.ref.add(this.covoiturage).then(()=>{
         this.messageSuccess='Added'
        }).then(()=>{
          this.covoiturage.dateDepart=new Date
          this.covoiturage.villeDepart=''
          this.covoiturage.villeArrivee=''
          this.covoiturage.description=''
        
      }
      );

       

       
      },
      
     
      
     
     
    },

    created(){
      this.ref.onSnapshot(query=>{
        this.mescovoiturages=[]
        query.forEach(doc=>{
          if(localStorage.getItem('uidUser')==doc.data().uid){

          
          console.log(doc.data())
          this.mescovoiturages.push({
            key:doc.id,
            dateDepart:doc.data().dateDepart,
            villeDepart:doc.data().villeDepart,
            villeArrivee:doc.data().villeArrivee,
            description:doc.data().description
          })
        }
        })
      })
    }
}
</script>


