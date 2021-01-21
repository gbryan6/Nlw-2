document.querySelector("#add-time").addEventListener('click', cloneField);


function cloneField(){
   const FieldContainer = document.querySelector(".schedule-item").cloneNode(true);
   
   const Field = FieldContainer.querySelectorAll("input")

   Field.forEach(function(f){
      f.value = "";
   })

   document.querySelector("#schedule-items").appendChild(FieldContainer);
}  