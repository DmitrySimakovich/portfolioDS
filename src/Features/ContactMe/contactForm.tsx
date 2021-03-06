import React, {FC, useCallback, useEffect, useState} from "react";
import {useFormik} from 'formik';
import * as emailJs from 'emailjs-com'

import Button from "../../Components/Button/button";

import {faCheckCircle as successfullySent} from '@fortawesome/free-regular-svg-icons'
import {faExclamationCircle as errorSent} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import loader from '../../assets/loader.gif';
import style from './contactMe.module.scss';

type FormikErrorType = {
    name?: string,
    email?: string,
    subject?: string,
    message?: string,
}
type SentType = 'Email sent!' | 'Error!'
type PopupFormType = {
    visible: boolean
    value: SentType
    resetValueHandler: (value: boolean) => void
}
type loadingType = 'inProgress' | 'ended'

const PopupForm = React.memo(function PopupForm({value, visible, resetValueHandler}: PopupFormType) {


    useEffect(() => {
        const timeOutId = setTimeout(() => resetValueHandler(false), 3500)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [visible, resetValueHandler])

    const styleOptions = value === 'Email sent!' ? style.popup__content__success : style.popup__content__error

    return (
        <>
            {
                <div
                    className={`${style.popup__content} ${styleOptions}`}>
                    {value}
                    {
                        value === 'Email sent!' ?
                            <FontAwesomeIcon icon={successfullySent} size={"1x"}/> :
                            <FontAwesomeIcon icon={errorSent} size={"1x"} onClick={() => resetValueHandler(false)}/>
                    }
                </div>
            }
        </>
    )
})

const ContactForm: FC = () => {
    const SERVICE_ID = 'service_vg6n1ni'
    const TEMPLATE_ID = 'template_iq91rc7'
    const USER_ID = 'user_uqSYJko8sJjERydu3Baf7'

    const [value, setValue] = useState<SentType>('Email sent!')
    const [visible, setVisible] = useState<boolean>(false) //
    const [loadingForm, setLoading] = useState<loadingType>('ended') //

    const resetValueHandler = useCallback((value: boolean) => {
        setVisible(value)
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.subject) {
                errors.subject = 'Required';
            }

            if (!values.message) {
                errors.message = 'Required';
            }

            return errors
        },
        onSubmit: values => {
            setLoading('inProgress')
            emailJs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: values.name,
                    from_email: values.email,
                    subject: values.subject,
                    message: values.message,
                },
                USER_ID
            )
                .then(res => {
                    setValue('Email sent!')
                    setVisible(true)
                })
                .catch(err => {
                    setValue('Error!')
                    console.log(err)
                    setVisible(true)
                })
                .finally(() => {
                    setLoading('ended')
                    formik.resetForm()
                })
        }
    })

    const isEmpty = (obj: FormikErrorType) => {
        for (let key in obj) {
            return false;
        }
        return true;
    }

    return (
        <div className={style.form_wrap}>

            <h6>Contact form</h6>

            <form onSubmit={formik.handleSubmit} className={style.form}>
                <div className={style.row_form}>
                    <div className={style.col_form}>

                        <div
                            className={`${style.input} ${formik.touched.name && formik.errors.name ? style.input__err : null}`}>
                            <input placeholder='Your Name'
                                   {...formik.getFieldProps('name')}
                                   onBlur={formik.handleBlur}
                                   disabled={loadingForm==='inProgress'}/>

                            {formik.touched.name && formik.errors.name ?
                                <div className={style.error_text}>{formik.errors.name}</div> : null}
                        </div>

                    </div>
                    <div className={style.col_form}>
                        <div
                            className={`${style.input} ${formik.touched.email && formik.errors.email ? style.input__err : null}`}>
                            <input placeholder='Your Email'
                                   {...formik.getFieldProps('email')}
                                   onBlur={formik.handleBlur}
                                   disabled={loadingForm==='inProgress'}/>

                            {formik.touched.email && formik.errors.email ?
                                <div className={style.error_text}>{formik.errors.email}</div> : null}
                        </div>
                    </div>
                </div>
                <div className={style.row_form}>
                    <div className={`${style.col_form} ${style.col_form__wide}`}>
                        <div
                            className={`${style.input} ${formik.touched.subject && formik.errors.subject ? style.input__err : null}`}>
                            <input placeholder='Your Subject'
                                   {...formik.getFieldProps('subject')}
                                   onBlur={formik.handleBlur}
                                   disabled={loadingForm==='inProgress'}/>

                            {formik.touched.subject && formik.errors.subject ?
                                <div className={style.error_text}>{formik.errors.subject}</div> : null}
                        </div>
                    </div>
                </div>
                <div className={style.row_form}>
                    <div className={`${style.col_form} ${style.col_form__wide}`}>
                        <div
                            className={`${style.input} ${formik.touched.message && formik.errors.message ? style.input__err : null}`}>
                                <textarea placeholder='Your Message'
                                          className={style.input} {...formik.getFieldProps('message')}
                                          onBlur={formik.handleBlur}
                                          disabled={loadingForm==='inProgress'}/>
                            {formik.touched.message && formik.errors.message ?
                                <div className={style.error_text}>{formik.errors.message}</div> : null}
                        </div>
                    </div>
                </div>

                <div className={style.submit}>
                    <img src={loader} alt="" className={`${style.loader} ${loadingForm === 'inProgress' ? style.loader__open : style.loader__close}`}/>
                    <div className={`${style.btn} ${loadingForm === 'ended' ? style.btn__open : style.btn__close}`}>
                        <Button buttonType={isEmpty(formik.errors) ? 'primary' : 'disable'} title={'send'}/>
                    </div>
                </div>
            </form>

            <div className={`${style.form_popup} ${visible ? style.form_popup__open : style.form_popup__close}`}>
                <PopupForm visible={visible} value={value} resetValueHandler={resetValueHandler}/>
            </div>
        </div>

    )
}

export default ContactForm