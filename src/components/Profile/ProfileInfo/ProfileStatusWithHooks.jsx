import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    //hook local state
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || '---------'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;