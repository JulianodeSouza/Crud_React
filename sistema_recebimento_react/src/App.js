import React, { useState } from "react";
import "./App.css";

// components
import AddReceiptForm from "./components/Add-receipt/Add_receipt_form";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListReceipts from "./components/List-receipts/List-receipts";

let initialState = [];

function App() {
  // Array de armazenamento dos recebimentos
  const [receipts, setReceipts] = useState(initialState);

  // Função para alteração dos campos de novo recebimento
  function onSubmitForm($event) {
    $event.preventDefault();

    // Variavel para formatação da data
    let formatDate = document.getElementById("dataReceipt").value.split("-");

    if (formatDate != "") {

      // Formata a data para exibição na tabela
      let day = formatDate[2];
      let month = formatDate[1];
      let year = formatDate[0];
      let dateFormated = `${day}/${month}/${year}`;
      // Formata a data para exibição na tabela

      const receipt = {
        id: Math.max.apply(Math, [receipts.map(item => item.id++)]),
        dataReceipt: dateFormated,
        clientName: document.getElementById("clientName").value,
        value: document.getElementById("value").value,
        formReceipt: document.getElementById("formReceipt").value,
      };

      if (receipt.clientName != "" && receipt.value != "" && receipt.formReceipt) {
        receipts.push(receipt);
        setReceipts([...receipts]);

      } else {
        alert("Preencha todos os campos corretamente!");
      }
    } else {
      alert("Insira uma data válida");
    }
  }

  // Funcao de Delete dos recebimentos
  function deleteReceipt(id) {
    const receiptsFilter = receipts.filter(receipt => receipt.id !== id);

    setReceipts([...receiptsFilter]);
  }

  return (
    <>
      <Header />

      <AddReceiptForm
        onSubmitForm={onSubmitForm}
        receipts={receipts}
      />

      <ListReceipts
        deleteReceipt={deleteReceipt}
        receipts={receipts}
      />

      <Footer />
    </>
  );
}

export default App;
