import { useState } from "react";

export default ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment,
}) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: ""
  })

  const createItem = async () => {
    try {
      await createShipment(shipment)
    } catch (error) {
      console.log("something went wrong creating item")
    }
  }
  return createShipmentModel ? (
    div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40"
      onClick={() => setCreateShipmentModel(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div classname="relative w-full max-w-lg mx-auto bg-white rounded-md
        shadow-lg">
          <div className="flex justify-end">
            <buttom
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setcreateShipmentModel(false)}
            >
            <svg
            xmlns="https://www.w3.org/2000/svg"
            className="w-5 h-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentcolor"
            >

            </svg>
            </buttom>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-medium text-gray-600">
              Track Product, create Shipment
            </h4>
            <p className="text-[15px] text-gray-600">
              Shipment Description
            </p>
            <form onSubmit={(e) => e.preventDefaul()}>
              <div className></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
