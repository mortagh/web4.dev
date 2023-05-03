<template>
    <div class="creation">
        <h1>This is a creation page</h1>

        <form action="POST">
            <label for="name">Nom</label>
            <input type="text" name="name" id="name">

            <label for="image">Image</label>
            <input type="text" name="image" id="image">

            <label for="top-text">Texte du haut</label>
            <input type="text" name="top-text" id="top-text">

            <label for="bottom-text">Texte du bas</label>
            <input type="text" name="bottom-text" id="bottom-text">

            <input type="submit" value="Créer">
        </form>

    </div>
</template>

<script>
export default {

    beforeMount() {
      if (window.location.href !== "http://localhost:5173/login"){
        if(localStorage.getItem('connection') === 'false') {
          window.location.href = "/login";
        }
      }
      console.log("beforeMount")
    },
  
    mounted() {
  
    }
  
  }
  </script>