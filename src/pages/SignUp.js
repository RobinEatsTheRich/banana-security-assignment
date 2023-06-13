import React, {useContext} from 'react';
import axios from "axios";
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthProvider";

function SignUp() {
    const {login} = useContext(AuthContext)
    const {register, handleSubmit, watch} = useForm();
    const watchEmail = watch('email');
    const watchUsername = watch('username');
    const watchPassword = watch('password');

    async function registerAccount(data) {
        try {
            const result = await axios.post('http://localhost:3000/register', {
                username: data.username,
                email: data.email,
                password: data.password,
            });
            console.log(result)
            //login(data.email, data.username, data.password)
        }catch (e) {
            console.log(e)

        }
    }


    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>


            <form onSubmit={handleSubmit(registerAccount)}>
                <label htmlFor="emailInput">Email-adres</label>
                <input
                    type="text"
                    id="emailInput"
                    {...register("email")}
                />
                <label htmlFor="usernameInput">Gebruikersnaam</label>
                <input
                    type="text"
                    id="usernameInput"
                    {...register("username")}
                />
                <label htmlFor="passwordInput">Wachtwoord</label>
                <input
                    type="password"
                    id="passwordInput"
                    {...register("password")}
                />
                <button
                    type="submit"
                    disabled={!watchPassword || !watchEmail || !watchUsername}
                >Inloggen</button>
            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;