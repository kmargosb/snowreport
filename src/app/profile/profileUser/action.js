'use server'

import { redirect } from 'next/navigation';

const ActionsCreate = async (formData) => {

    await fetch(`http://localhost:3000/api/users`, {
        method: "post",
        body: JSON.stringify({
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            activities: formData.get('activities'),
            phone: formData.get('phone'),
            date: formData.get('date'),
            id: formData.get('id')
        })
    })
    return redirect('/profile')
}
export default ActionsCreate