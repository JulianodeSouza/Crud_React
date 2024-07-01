import React, { useState } from "react";
import "./App.css";

// components
import Header from "./components/Header/Header";
import ListReceipts from "./components/Receipts/List-receipts/List-receipts";
import AddEditReceiptForm from "./components/Receipts/Add_Edit-receipt/Add_edit_form";

let initialState = [];

const clearInputs = {
  dataReceipt: "",
  clientName: "",
  value: 0,
  formReceipt: "",
};

function App() {
  // Array de alteração de estado da lista de exibição
  const [receipts, setReceipts] = useState(initialState);

  // Variavel de alteração de estado dos campos
  const [receiptToEdit, setReceiptToEdit] = useState({});
  const [edit, setEdit] = useState(false);

  // Função para salvar um novo recebimento
  function onSubmitForm($event) {
    $event.preventDefault();
    let incrementId = 0;

    // Formata a data para exibição na tabela
    const formatDateInput = document
      .getElementById("dataReceipt")
      .value.split("-");
    const dateFormated = `${formatDateInput[2]}/${formatDateInput[1]}/${formatDateInput[0]}`;

    // Formata o valor para exibição na tabela
    const formatValueInput = document.getElementById("value").value;
    const valueInput = formatValueInput.replace(",", ".");
    const valueFormated = Number(valueInput).toFixed(2).replace(".", ",");

    for (let i = 0; i <= receipts.length; i++) {
      incrementId++;
    }

    const receipt = {
      id: incrementId,
      dataReceipt: dateFormated,
      clientName: document.getElementById("clientName").value,
      value: valueFormated,
      formReceipt: document.getElementById("formReceipt").value,
    };

    if (
      formatDateInput !== "" &&
      receipt.clientName !== "" &&
      receipt.value !== "" &&
      receipt.formReceipt
    ) {
      setReceipts([...receipts, { ...receipt }]);
      alert("Recebimento salvo com sucesso!");
      setReceiptToEdit(clearInputs);
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  }

  // Funcao de Delete dos recebimentos
  function deleteReceipt(id) {
    const receiptsFilter = receipts.filter((receipt) => receipt.id !== id);

    setReceipts([...receiptsFilter]);
  }

  // Função setar o recebimento nos campos do formulario
  function getReceipt(id) {
    const receiptsFilter = receipts.filter((receipt) => receipt.id === id);

    // Converte a data para o padrão USA para inserir no campo ao editar
    const formatDate = receiptsFilter[0].dataReceipt;
    const date = formatDate.split("/");
    const dateFormated = `${date[2]}-${date[1]}-${date[0]}`;

    const data = {
      id: receiptsFilter[0].id,
      dataReceipt: dateFormated,
      clientName: receiptsFilter[0].clientName,
      value: receiptsFilter[0].value,
      formReceipt: receiptsFilter[0].formReceipt,
    };

    setEdit(true);
    setReceiptToEdit(data);
  }

  // função para salvar a edição
  function saveEdit(receipt) {
    setReceipts(
      receipts.map((value) => {
        if (value.id === receipt.id) {
          // Formata a data para exibição na tabela
          const formatDateInput = receipt.dataReceipt.split("-");
          const dateFormated = `${formatDateInput[2]}/${formatDateInput[1]}/${formatDateInput[0]}`;

          // Formata o valor para exibição na tabela
          const formatValueInput = document.getElementById("value").value;
          const valueInput = formatValueInput.replace(",", ".");
          const valueFormated = Number(valueInput).toFixed(2).replace(".", ",");

          const data = {
            id: receipt.id,
            dataReceipt: dateFormated,
            clientName: receipt.clientName,
            value: valueFormated,
            formReceipt: receipt.formReceipt,
          };

          return data;
        } else {
          return value;
        }
      })
    );
    setReceiptToEdit(clearInputs);
    setEdit(false);
    alert("Edição salvo com sucesso!");
  }

  return (
    <>
      <Header />

      <AddEditReceiptForm
        onSubmitForm={onSubmitForm}
        receiptToEdit={receiptToEdit}
        edit={edit}
        saveEdit={saveEdit}
      />

      <ListReceipts
        deleteReceipt={deleteReceipt}
        receipts={receipts}
        getReceipt={getReceipt}
      />
    </>
  );
}

export default App;
