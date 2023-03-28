import React, { useEffect, useState } from 'react';
import "./Add_edit_form.css";

const clearInputs = {
  dataReceipt: '',
  clientName: '',
  value: '',
  formReceipt: '',
}

export default function AddEditReceiptForm(props) {
  const [receiptToEdit, setReceiptToEdit] = useState(getReceipt());
  const [edit, setEdit] = useState(props.edit);

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setReceiptToEdit({ ...receiptToEdit, [name]: value });
  }

  useEffect(() => {
    if (props.receiptToEdit.id !== 0) {
      setReceiptToEdit(props.receiptToEdit);
    }

    setEdit(props.edit);
  }, [props.receiptToEdit, props.edit]);

  function getReceipt() {
    if (props.receiptToEdit.id !== 0) {
      return props.receiptToEdit;
    }
  }

  // método de cancelar a edição
  const clearForm = () => {
    setReceiptToEdit(clearInputs);
    setEdit(false);
  }

  return (
    <div>
      <section className="section-form-add">
        <div className="col-12">
          <div className="info-section">
            <p>Novo Recebimento</p>
          </div>

          <div className="card">
            <div className="card-body">
              <form className="form-add-receipt" onSubmit={props.onSubmitForm}>
                <div className="row">
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="dataReceipt"
                      type={"date"}
                      className="form-control"
                      placeholder="Data Recebimento"
                      name="dataReceipt"
                      onChange={inputHandler}
                      value={receiptToEdit.dataReceipt}
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="clientName"
                      type={'text'}
                      className="form-control"
                      placeholder="Nome Cliente"
                      name="clientName"
                      onChange={inputHandler}
                      value={receiptToEdit.clientName}
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <input
                      id="value"
                      type={'text'}
                      className="form-control"
                      placeholder="Valor a receber"
                      name="value"
                      onChange={inputHandler}
                      value={receiptToEdit.value}
                    />
                  </div>
                  <div className="col-12 col-md-6 pb-2">
                    <select
                      id="formReceipt"
                      className="custom-select"
                      name='formReceipt'
                      onChange={inputHandler}
                      value={receiptToEdit.formReceipt}>
                      <option defaultValue='0'>Selecionar</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cartão">Cartão</option>
                      <option value="Pix">Pix</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-end col-sm-12">
                    {
                      edit == false ?
                        <button type='submit' className="btn-add mt-3 mb-0">Salvar Recebimento</button> :
                        (
                          <>
                            <div className="d-flex justify-content-end col-sm-12">
                              <button type='button' className="btn-cancel mt-3 mb-0 mx-2" onClick={clearForm}>Cancelar</button>
                              <button type='button' className="btn-add mt-3 mb-0">Editar Recebimento</button>
                            </div>
                          </>
                        )
                    }
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
