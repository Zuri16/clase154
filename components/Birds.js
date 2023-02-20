AFRAME.registerComponent("birds", {
    init: function(){
        for(var i=1; i <= 20; i++){
           var id=`pajaro${i}`
           var posX=Math.floor(Math.random()*3000 + -1000)
           var posY=Math.floor(Math.random()*2 + -1)
           var posZ=Math.floor(Math.random()*3000 + -1000)
           var posiciones={x:posX, y:posY, z:posZ}
           this.createBirds(id, posiciones)
        }
    },

    createBirds:(id, position)=>{
        var terreno=document.querySelector("#terrain")
        var bird=document.createElement("a-entity")
        bird.setAttribute("id", id)
        bird.setAttribute("position", position)
        bird.setAttribute("scale",{x:500, y:500, z:500})
        bird.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        bird.setAttribute("animation-mixer",{})
        terreno.appendChild(bird)
    }
})