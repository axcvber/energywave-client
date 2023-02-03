import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.SHIPPING_SERVICE_API,
  headers: {
    'apiKey': process.env.SHIPPING_SERVICE_API_KEY,
    'Content-Type': 'application/json',
  },
  // data: {
  //   // apiKey: process.env.SHIPPING_SERVICE_API_KEY,
  // },
})

interface IGetCitiesParams {
  inputValue?: string
}

interface IWarehousesParams extends IGetCitiesParams {
  cityRef: string
}

interface ICity {
  Description: string
  Ref: string
}

interface IWarehouse {
  Description: string
  Ref: string
}

export const ShippingApi = {
  async getCities(inputValue?: string) {
    const { data } = await instance<{ data: ICity[] }>({
      method: 'POST',
      data: {
        // apiKey: process.env.SHIPPING_SERVICE_API_KEY,
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          FindByString: inputValue,
          Limit: 100,
        },
      },
    })

    return data
  },
  async getWarehouses(params: IWarehousesParams) {
    const { data } = await instance<{ data: IWarehouse[] }>({
      method: 'POST',
      data: {
        // apiKey: process.env.SHIPPING_SERVICE_API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          FindByString: params.inputValue,
          CityRef: params.cityRef,
          Limit: 100,
        },
      },
    })
    return data
  },

  async getStreets(params: IWarehousesParams) {
    const { data } = await instance<{ data: IWarehouse[] }>({
      method: 'POST',
      data: {
        // apiKey: process.env.SHIPPING_SERVICE_API_KEY,
        modelName: 'Address',
        calledMethod: 'getStreet',
        methodProperties: {
          FindByString: params.inputValue,
          CityRef: params.cityRef,
          Limit: 100,
        },
      },
    })
    return data
  },
}
