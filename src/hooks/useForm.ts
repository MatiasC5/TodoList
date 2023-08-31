import { useState } from 'react';

interface Form {
    description:string
}

export const useForm =(initialForm:Form) => {
const [form, setForm] = useState<Form>(initialForm)

    const handleInputChange =(event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm({
            ...form,
            [name]: value
        })
    }


    return {
        form,
        ...form,
        handleInputChange
    }
}