<template>
    <div class="login">
        <h1>This is a login page</h1>

        <form action="POST">
            <label for="username">Utilisateur</label>
            <input type="text" name="username" id="username">

            <label for="password">Mot de passe</label>
            <input type="password" name="password" id="password">

            <input type="submit" value="Se connecter">
        </form>

    </div>
</template>