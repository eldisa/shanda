/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/
import React, { useState, useTransition } from 'react';

const SearchBox = () => {
    const [value, setValue] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        startTransition(() => setValue(e.target.value));
    };

    return <>
        <input type="search" name="p" onChange={handleChange} />
        {isPending && <div>updating...</div>}
    </>;
};