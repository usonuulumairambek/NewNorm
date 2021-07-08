export default function validateInfo(values) {
  const errors = {}

  if (!values.first_name) {
    errors.first_name = "Обязательное поле"
  }

  if (!values.phone) {
    errors.phone = "Обязательное поле"
  }

  if (!values.company) {
    errors.company = "Обязательное поле"
  }

  if (!values.address) {
    errors.address = "Обязательное поле"
  }

  if (!values.email) {
    errors.email = "Обязательное поле"
  }

  return errors
}
