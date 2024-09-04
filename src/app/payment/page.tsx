"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cards from 'react-credit-cards-2';
import { toast } from 'react-toastify';

const validationSchema = Yup.object({
    number: Yup.string()
        .matches(/^[0-9\s]{13,19}$/, 'Invalid card number')
        .required('Card number is required'),
    expiry: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid expiry date')
        .required('Expiry date is required'),
    cvc: Yup.string()
        .matches(/^[0-9]{3,4}$/, 'Invalid CVC')
        .required('CVC is required'),
    name: Yup.string()
        .required('Card name is required'),
    focus: Yup.string() 
});

const initialValues = {
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '' as 'number' | 'expiry' | 'cvc' | 'name',
};

const PaymentForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
         
            toast.success("Payment was successful!");
        },
    });

    const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
        formik.setFieldValue('focus', evt.target.name as 'number' | 'expiry' | 'cvc' | 'name');
    }

    return (
        <div className='mt-[120px] py-10 max-w-[1176px] mx-auto w-fit'>
            <div className='rounded-xl shadow-xl p-5 flex flex-col gap-5'>
                <Cards
                    number={formik.values.number}
                    expiry={formik.values.expiry}
                    cvc={formik.values.cvc}
                    name={formik.values.name}
                    focused={formik.values.focus}
                />
                <form className='flex flex-col items-center justify-center gap-10' onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            onFocus={handleInputFocus}
                            className='w-[400px] text-sm p-2 focus:border-b-main outline-none border-b-2 bg-transparent'
                        />
                        {formik.errors.number && formik.touched.number ? (
                            <div className='text-red-500 text-sm'>{formik.errors.number}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Card Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onFocus={handleInputFocus}
                            className='w-[400px] text-sm p-2 focus:border-b-main outline-none border-b-2 bg-transparent'
                        />
                        {formik.errors.name && formik.touched.name ? (
                            <div className='text-red-500 text-sm'>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="expiry"
                            placeholder="Expiry Date"
                            value={formik.values.expiry}
                            onChange={formik.handleChange}
                            onFocus={handleInputFocus}
                            className='w-[400px] text-sm p-2 focus:border-b-main outline-none border-b-2 bg-transparent'
                        />
                        {formik.errors.expiry && formik.touched.expiry ? (
                            <div className='text-red-500 text-sm'>{formik.errors.expiry}</div>
                        ) : null}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            value={formik.values.cvc}
                            onChange={formik.handleChange}
                            onFocus={handleInputFocus}
                            className='w-[400px] text-sm p-2 focus:border-b-main outline-none border-b-2 bg-transparent'
                        />
                        {formik.errors.cvc && formik.touched.cvc ? (
                            <div className='text-red-500 text-sm'>{formik.errors.cvc}</div>
                        ) : null}
                    </div>
                    <input type="submit" value="Submit" className='w-fit uppercase h-fit rounded-full text-white bottom-4 bg-black px-10 py-3 group-hover shadow-sm hover:bg-main hover:text-white transition' />
                </form>
            </div>
        </div>
    );
}

export default PaymentForm;
