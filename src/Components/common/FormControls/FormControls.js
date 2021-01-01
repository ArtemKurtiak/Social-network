import s from './FormControls.module.css'
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>
}
export const fieldCreator = (placeholder, name, type, component, validators) => <Field placeholder={placeholder} name={name} type={type} component={component}
                                                 validate={validators}/>