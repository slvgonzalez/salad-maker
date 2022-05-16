import React, {useEffect, useState} from "react";
import DataService from "simple-localstorage-data-service-stub";
import Salad from './index.js';
import IndexHeader from "./IndexHeader.js";

const dataService = DataService();

const SaladDesigner = (props) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [businessLogic, setBusinessLogic] = useState(null);
  const [salads, setSalads] = useState([]);

  useEffect(() => {
    dataService.get('products').then(response => setProducts(response));
    dataService.get('suppliers').then(response => setSuppliers(response));
    dataService.get('businessLogic').then(response => setBusinessLogic(response));
    dataService.get('salads').then(response => setSalads(response));
  }, [])

  console.log("aqui los products")
  console.log(products)
  console.log("aqui los suppliers")
  console.log(suppliers)
  console.log("aqui businessLogic")
  console.log(businessLogic)
  console.log("aqui SALADS")
  console.log(salads)


  // Example of data file save.
  const onSaveClick = () => {
    dataService.saveData().then(() => console.log('saved!'));
  }

  // Example of data file upload.
  const handleFileInput = (event) => {
    dataService.uploadFileInput(event).then(r => {
      event.target.value = null;
      console.log("done!", {r})
    })
  }

  return <>
    <IndexHeader />
    <Salad list={salads} products={products} types={businessLogic}/>
  </>
}

export default SaladDesigner;
