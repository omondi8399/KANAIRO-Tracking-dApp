import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT

import {
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
} from "../Components/index"

import { TrackingContext } from "../Context/TrackingContext"

const index = () => {
  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(TrackingContext)

  //STATE VARIABLE
  const [createShipmentModel, setCreateShipmentModel] = useState(false)
  const [openProfile,setOpenProfile] = useState(false)
  const [startModal,setStartModal] = useState(false)
  const [completeModal, setCompleteModal] = useState(false)
  const [getModel, setGetModel] = useState(false)

  //DATA STATE VARIABLE
  const [allShipmentsData, setAllShipmentsData] = useState()

  useEffect(() => {
    const getCampaignsData = getAllShipment()

    return async () => {
      const allData = await getCampaignsData
      setAllShipmentsData(allData)
    }
  }, [])

  return (
    <>
      <Services
      setOpenProfile={setOpenProfile}
      setCompleteModal={setCompleteModal}
      setGetModel={setGetModel}
      setStartModal={setStartModal}
      />
      <Table
      setCreateShipmentModel={setCreateShipmentModel}
      allShipmentsData={allShipmentsData}
      />
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      <Profile
      openProfile={openProfile}
      setOpenProfile={setOpenProfile}
      currentUser={currentUser}
      getShipmentsCount={getShipmentsCount}
      />
      <CompleteShipment
      completeModal={completeModal}
      setCompleteModal={setCompleteModal}
      completeShipment={completeShipment}
      />
      <GetShipment
      getModel={getModel}
      setGetModel={setGetModel}
      getShipment={getShipment}
      />
      <startShipment
      startModal={startModal}
      setStartModal={setStartModal}
      startShipment={startShipment}
      />
    </>
  )

};

export default index;
