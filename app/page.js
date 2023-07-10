'use client'  
import Image from 'next/image'

import myImg from "../public/form.png"
import { useFormik } from 'formik'

import * as Yup from 'yup'

import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: 'Pakistan',
      terms: false, // Assuming "terms" is a boolean field (checkbox)
    },
    onSubmit: (values) => {
      const queryParams = new URLSearchParams(values).toString();

      router.push(`/success?${queryParams}`);
    //   navigation.navigate('/success', { query: values });


    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, "Name must not be greater than 20 characters").required("It's empty"),
      email: Yup.string().email("Invalid email address").required("The email address is required"),
      terms: Yup.boolean().oneOf([true], "Terms must be checked").required("Terms must be checked"),
    }),
  });
  console.log(formik.values)
    // console.log(formik.values.terms)
    // console.log(formik.errors)

  return (
    <main className='h-screen flex items-center justify-center'>
      <form onSubmit={formik.handleSubmit} className='bg-white flex rounded-lg w-1/2'>
        <div className='p-20 flex-1'>
          <h1 className='text-2xl mb-3 text-black'>Let's get started!👋</h1>
          <p className='text-sm text-gray-500'>Join the Xbox platform to get access to tons of games in reasonable prices!</p>

          <div className='mt-6'>
             <div className='pb-4'>
              <label className={`block text-sm pb-2 text-gray-500 text-black ${formik.touched.name && formik.errors.name ? "text-red-400" : ""}`} htmlFor='name'>
                {formik.touched.name && formik.errors.name ? formik.errors.name : "Name" }
              </label>
              <input onBlur={formik.handleBlur} className='text-black border-2 text-sm border-gray-500 p-2 rounded-md w-1/2' value={formik.values.name} onChange={formik.handleChange} placeholder='Enter your name' name='name' type='text'/>
             </div>
             <div className='pb-4'>
              <label className='block text-sm pb-2 text-gray-500 text-black' htmlFor='email'>Email</label>
              <input className='border-2 text-sm text-black  border-gray-500 p-2 rounded-md w-1/2' placeholder='Enter your email' name='email'  value={formik.values.email} onChange={formik.handleChange} type='text'/>
             </div>
             <div className='pb-4'>
              <label className='block text-sm pb-2 text-gray-500 text-black' htmlFor='country'>Country</label>
              <select   value={formik.values.country} onChange={formik.handleChange} class='border-2 text-gray-400 text-sm border-gray-500 p-2 rounded-md w-1/2'  name='country' >
                <option>United Kingdom</option>
                <option>France</option>
                <option>Pakistan</option>
                <option>Canada</option>
                <option>USA</option>
                <option>Russia</option>
              </select>
             </div>
             <div className='pb-4'>
              <label className={`block text-sm pb-2 text-gray-500 text-black ${formik.touched.terms && formik.errors.terms ? "text-red-400" : ""}`}  htmlFor='terms'>
              {formik.touched.terms && formik.errors.terms ? formik.errors.terms: "Terms of Service" }
              </label>


              <div className="flex items-center gap-2">
                <input  onBlur={formik.handleBlur} type='checkbox' name="terms" value="checked" onChange={formik.handleChange} className='h-4 w-4 text-red-400 border-3' />
                <p className='text-gray-600 text-sm'>I agree to the terms and conditions</p>

              </div>

             </div>

             <button type='submit' className="w-full bg-red-500 text-sm py-3 mt-3 rounded-lg">Subscribe</button>
          </div>

          
        </div>
        

        <div className='flex-1 relative'>
          <Image src={myImg} fill className='object-cover rounded-lg' />
        </div>
      </form>
    </main>
  )
}
