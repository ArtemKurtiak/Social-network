import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {fieldCreator, Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {fieldCreator('Login', 'email', 'text', Input, [requiredField])}
            </div>
            <br/>
            <div>
                {fieldCreator('Password', 'password', 'password', Input, [requiredField])}
            </div>
            <br/>
            <div>
                Remember me {fieldCreator('', 'rememberMe', 'checkbox', Input, [])}
            </div>
            <br/>
            {error && <div className={s.formError}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/my_page'}/>
    }

    return (
        <div className={s.wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {
    login
})(Login);