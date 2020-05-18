import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);
const Textarea = Element("textarea");

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Enter your message'
                       validate={[requiredField, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm);

