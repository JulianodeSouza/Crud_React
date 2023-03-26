import React, { useState } from "react";
import "./App.css";

let initialState = [];

function App() {
  // Array de armazenamento dos recebimentos
  const [receipts, setReceipts] = useState(initialState);

  // Função para alteração dos campos de novo recebimento
  function onSubmitForm($event) {
    $event.preventDefault();

    let formatDate = document.getElementById("dataReceipt").value.split("-");

    if (formatDate != "") {
      // Formata a data para exibição na tabela
      let day = formatDate[2];
      let month = formatDate[1];
      let year = formatDate[0];
      let dateFormated = `${day}/${month}/${year}`;
      // Formata a data para exibição na tabela

      const receipt = {
        dataReceipt: dateFormated,
        clientName: document.getElementById("clientName").value,
        value: document.getElementById("value").value,
        formReceipt: document.getElementById("formReceipt").value,
      };

      receipts.push(receipt);
      setReceipts([...receipts]);
    } else {
      alert("Insira uma data válida");
    }
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid principal-card col-12">
        <div className="container">
          <h1 className="display-4 d-flex justify-content-center">
            Bem Vindo!
          </h1>
        </div>
      </div>

      <section className="section-form-add">
        <div className="col-12">
          <div className="info-section">
            <p>Novo Recebimento</p>
          </div>

          <div className="card">
            <div className="card-body">
              <form className="form-add-receipt" onSubmit={onSubmitForm}>
                <div className="row">
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="dataReceipt"
                      className="form-control"
                      placeholder="Data Recebimento"
                      name="dataReceipt"
                      type={"date"}
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="clientName"
                      className="form-control"
                      placeholder="Nome Cliente"
                      name="clientName"
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="value"
                      className="form-control"
                      placeholder="Valor a receber"
                      name="value"
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="formReceipt"
                      className="form-control"
                      placeholder="Forma de Pagamento"
                      name="formReceipt"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button className="btn-add mt-3 mb-0">Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-table col-12 mt-5 mb-5">
        <div className="info-section">
          <p>Últimos Recebimentos</p>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Data Pagamento</th>
              <th scope="col">Nome cliente</th>
              <th scope="col">Valor</th>
              <th scope="col">Forma pagamento</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {receipts.map((value) => (
              <tr>
                <td>{value.dataReceipt}</td>
                <td>{value.clientName}</td>
                <td>{value.value}</td>
                <td>{value.formReceipt}</td>
                <td>
                  <div className="d-flex">
                    <i class="fa-solid fa-pen-to-square fa-lg"></i>
                    <i class="fa-solid fa-trash fa-lg"></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="footer col-12 mt-5">
        <p>Criado por: Juliano de Souza</p>
      </section>
    </>
  );
}

export default App;
