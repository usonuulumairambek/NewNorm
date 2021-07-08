import { useState, useEffect } from "react"
import { sendEquipmentForm } from "../api/callbackAPI"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

toast.configure()

const useForm = (title, validate, closeModal) => {
  const [values, setValue] = useState({
      first_name: "",
      phone: "",
      company: "",
      address: "",
      product: title,
      email: "",
      files: [],
    }),
    [errors, setErrors] = useState({}),
    [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
      const { name, value } = e.target
      setValue({
        ...values,
        [name]: value,
      })
    },
    handleFormSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(values))
      setIsSubmitting(true)
    },
    notify = () => {
      toast.success("Ваша форма успешно отправлена", {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      sendEquipmentForm(values)
      setValue({
        first_name: "",
        phone: "",
        company: "",
        address: "",
        product: title,
        email: "",
        files: [],
      })
      closeModal()
      notify()
    }
  }, [errors])

  useEffect(() => {
    setValue({
      ...values,
      product: title,
    })
  }, [title])

  return { handleChange, values, handleFormSubmit, errors }
}

export default useForm
