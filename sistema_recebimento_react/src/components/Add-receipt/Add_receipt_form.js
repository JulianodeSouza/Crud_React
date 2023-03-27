import React from 'react';
import "./Add_receipt_form.css";

export default function AddReceiptForm(props) {
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
										<select id="formReceipt" className="custom-select">
											<option defaultValue='0'>Selecionar</option>
											<option value="Dinheiro">Dinheiro</option>
											<option value="Cartão">Cartão</option>
											<option value="Pix">Pix</option>
										</select>
									</div>
									<div className="d-flex justify-content-end col-sm-12">
										<button className="btn-add mt-3 mb-0">Salvar</button>
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
