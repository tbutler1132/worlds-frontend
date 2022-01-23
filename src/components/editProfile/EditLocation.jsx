import { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function EditLocation({ submitHandler }) {
    const apiKey = process.env.REACT_APP_PLACES_KEY;
    const [value, setValue] = useState(null)

    const changeHandler = (e) => {
        setValue(e)
        submitHandler({location: e.value.description})
    }


    return (
        <div style={{border: "dotted"}}>
            <GooglePlacesAutocomplete 
            apiKey={apiKey} 
            selectProps={{
                value,
                onChange: (e) => changeHandler(e),
            }} 
            autocompletionRequest={{types: ['(cities)']}}/>
        </div>
    );
}

export default EditLocation;