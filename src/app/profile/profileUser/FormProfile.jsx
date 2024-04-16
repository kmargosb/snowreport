'use client'
import Image from 'next/image';
import profile from '@/../public/profileImagen.png';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ActionsCreate from './action';
import Loading from '@/components/loading/Loading';

const FormProfile = () => {
  const auth = getAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDataFirebase, setUserDataFirebase] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserDataFirebase(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setLoading(false);
      } else {
        console.log("No hay usuario logueado");
      }
    });

    return () => unsubscribe();
  }, [auth]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData)
    await ActionsCreate(formData);
  };

  if (loading && !userDataFirebase) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col bg-white p-10 m-10 gap-5 rounded-lg w-screen items-start'>
      <div className='flex-col flex gap-3 w-full'>
        <p className='text-primary'>Foto Perfil</p>
        <div className='flex w-full items-center gap-3 justify-between'>
          <div className='flex items-center gap-5'>
            <Image src={userData?.photoURL || profile} alt='profile' width={100} height={100} className='rounded-full' />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:w-full gap-5'>
        <p className='text-primary'>Informacion Personal</p>
        <div className='w-full flex flex-wrap'>
          <div className='flex justify-between w-full gap-5'>
            <div className='flex flex-col w-1/2 gap-2'>
              <label className='text-xs text-text-secondary3' htmlFor="name">Nombre</label>
              <input type="text" name='name' id='name' className='border border-primary2 rounded-lg px-2 py-2' placeholder={userDataFirebase && userDataFirebase[0]?.name || userData.displayName} />
              <label className='text-xs text-text-secondary3' htmlFor="lastname">Apellidos</label>
              <input type="text" name='lastname' id='lastname' className='border border-primary2 rounded-lg px-2 py-2' placeholder={userDataFirebase && userDataFirebase[0]?.lastname || '' } />
            </div>
            <div className='flex flex-col w-1/2 gap-2'>
              <label className='text-xs text-text-secondary3' htmlFor="date">Fecha de Nacimiento</label>
              <input type="text" name='date' id='date' className='border border-primary2 rounded-lg px-2 py-2' placeholder={userDataFirebase && userDataFirebase[0]?.date || '' } />
              <label className='text-xs text-text-secondary3' htmlFor="activities">Actividades</label>
              <input type="text" name='activities' id='activities' className='border border-primary2 rounded-lg px-2 py-2' placeholder={userDataFirebase && userDataFirebase[0]?.activities || '' } />
            </div>
          </div>
        </div>
        <p className='text-primary'>Informacion de contacto</p>
        <div className='w-full flex justify-between gap-3'>
          <div className='flex flex-col w-1/2 gap-3'>
            <label className='text-xs text-text-secondary3' htmlFor="phone">Telefono</label>
            <input type="text" name='phone' id='phone' className='border border-primary2 rounded-lg px-2 py-2' placeholder={userDataFirebase && userDataFirebase[0]?.phone || '' } />
          </div>
          <div className='flex flex-col w-1/2 gap-3'>
            <p className='text-xl pl-4 pt-8 opacity-50'>{userData.email}</p>
            <input type="text" name='email' id='email' className='border border-primary2 rounded-lg px-4 py-2 opacity-35' defaultValue={userData.email} hidden />
            <input type="text" name='id' id='id' hidden defaultValue={userData.uid} />
          </div>
        </div>
      </div>
      <button className='border py-2 px-4'>Actualizar</button>
    </form>
  )
}

export default FormProfile