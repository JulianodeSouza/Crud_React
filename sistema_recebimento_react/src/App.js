import React, { useState } from "react";
import "./App.css";

// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListReceipts from "./components/Receipts/List-receipts/List-receipts";
import AddEditReceiptForm from "./components/Receipts/Add_Edit-receipt/Add_edit_form";

let initialState = [];

const clearInputs = {
  dataReceipt: '',
  clientName: '',
  value: '',
  formReceipt: '',
}

function App() {

  // Array de alteração de estado da lista de exibição
  const [receipts, setReceipts] = useState(initialState);

  // Variavel de alteração de estado dos campos
  const [receiptToEdit, setReceiptToEdit] = useState({});
  const [edit, setEdit] = useState(false);

  // Função para alteração dos campos de novo recebimento
  function onSubmitForm($event) {
    $event.preventDefault();
    let incrementId = 0;

    // Formata a data para exibição na tabela
    let formatDateInput = document.getElementById("dataReceipt").value.split("-");
    let dateFormated = `${formatDateInput[2]}/${formatDateInput[1]}/${formatDateInput[0]}`;

    // Formata o valor para exibição na tabela
    let formatValueInput = document.getElementById("value").value;
    let valueInput = formatValueInput.replace(',', '.');
    let valueFormated = Number(valueInput).toFixed(2).replace('.', ',');

    for (let i = 0; i <= receipts.length; i++) {
      incrementId++
    }

    const receipt = {
      id: incrementId,
      dataReceipt: dateFormated,
      clientName: document.getElementById("clientName").value,
      value: valueFormated,
      formReceipt: document.getElementById("formReceipt").value,
    };

    if (formatDateInput != "" && receipt.clientName != "" && receipt.value != "" && receipt.formReceipt) {
      setReceipts([...receipts, { ...receipt }]);

      alert("Recebimento salvo com sucesso!");

      setReceiptToEdit(clearInputs);
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  }

  // Funcao de Delete dos recebimentos
  function deleteReceipt(id) {
    const receiptsFilter = receipts.filter(receipt => receipt.id !== id);

    setReceipts([...receiptsFilter]);
  }

  // Função para editar recebimentos
  function EditReceipt(id) {
    const receiptsFilter = receipts.filter(receipt => receipt.id === id);

    // Converte a data para o padrão USA para inserir no campo ao editar
    let formatDate = receiptsFilter[0].dataReceipt;
    let date = formatDate.split('/');
    let dateFormated = `${date[2]}-${date[1]}-${date[0]}`

    const data = {
      id: receiptsFilter[0].id,
      dataReceipt: dateFormated,
      clientName: receiptsFilter[0].clientName,
      value: receiptsFilter[0].value,
      formReceipt: receiptsFilter[0].formReceipt,
    }

    setEdit(true);
    setReceiptToEdit(data);
  }

  return (
    <>
      <Header />

      <AddEditReceiptForm
        onSubmitForm={onSubmitForm}
        receiptToEdit={receiptToEdit}
        edit={edit}
      />

      <ListReceipts
        deleteReceipt={deleteReceipt}
        receipts={receipts}
        EditReceipt={EditReceipt}
      />

      <Footer />
    </>
  );
}

export default App;
