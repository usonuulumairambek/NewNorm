import axios from "axios"

export const sendCallbackNumber = (phone_number) => {
  axios
    .post("http://185.29.184.52:3000/api/orders/phone/", { phone_number })
    .catch((error) => {
      console.log(error)
    })
}

export const sendEquipmentForm = (data) => {
  axios
    .post("http://185.29.184.52:3000/api/orders/kkm/", {
      ...data,
    })
    .catch((error) => {
      console.log(error)
    })
}

export const sendNewNews = (data) => {
  axios.post("https://a57026bb14c3.ngrok.io/api/news/", data).catch((error) => {
    console.log(error)
  })
}

export const getNewNews = (setNewsContents) => {
  axios
    .get("https://a57026bb14c3.ngrok.io/api/news/")
    .then((response) => {
      setNewsContents(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
