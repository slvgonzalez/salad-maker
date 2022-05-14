import React, {useEffect, useState} from "react";
import DataService from "simple-localstorage-data-service-stub";

console.log("im here")

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
  }, [])

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
    <label htmlFor="input">Form</label>
    <input type="file" id="input" onInput={handleFileInput}/>
  </>
}

export default SaladDesigner;
