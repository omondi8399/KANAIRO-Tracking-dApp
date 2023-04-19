import { useState } from "react"

export default ({ getModal, setGetModel, getShipment }) => {
  const [index, setIndex] = useState(0)
  const [singleShipmentData, setSingleShipmentData] = useState()

  const getShipmentData = async () => {
    const getData = await getShipment(index)
    setSingleShipmentData(getData)
    console.log(getData)
  }
  console.log(singleShipmentData)

  const convertTime = (time) => {
      const newTime = new Date(time)
      const dataTime = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-dog"
      })
  }
}
