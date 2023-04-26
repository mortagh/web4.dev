<template>
      <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/creation">Créer un meme</RouterLink>
      </nav>
  </header>


</template>

  <style>

    header{
        width: 100%;
    }

    header nav{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        background-color:#ffffff;
        height: 50px;
        gap: 2rem;
    }
    
  </style>