import React from 'react';

const LoginForm = props => {
    return (
        <div>
            <form>
                <label for="username">Username   <input type='text'id ='username'/></label><br/>
                <label for="password">Password   <input type='text'id ='password'/></label>
                
            </form>
        </div>
    );
}

export default LoginForm;