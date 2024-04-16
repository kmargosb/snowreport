'use server'

const ActionsCreate = async (formData) => {
    try {
        const data = {
            name: formData.get('name'),
            lastname: formData.get('lastname'),
            date: formData.get('date'),
            activities: formData.get('activities'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            id: formData.get('id')
        };
        await fetch(`http://localhost:3000/api/users`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log("Datos enviados correctamente");
        
    } catch (error) {
        console.error("Error al enviar datos:", error);
    }
};

export default ActionsCreate;
