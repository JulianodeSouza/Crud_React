import React from 'react';
import './List-receipts.css';

export default function ListReceipts(props) {

	return (
		<div>
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
							<th scope="col" className="d-flex align-items-center">Ações</th>
						</tr>
					</thead>
					<tbody>
						{props.receipts.map((receipt) => (
							<tr>
								<td>{receipt.dataReceipt}</td>
								<td>{receipt.clientName}</td>
								<td>{receipt.value}</td>
								<td>{receipt.formReceipt}</td>
								<td>
									<div className="d-flex">
										<a><i className="button-action fa-solid fa-pen-to-square fa-lg px-3"></i></a>
										<a><i className="button-action fa-solid fa-trash fa-lg" onClick={() => props.deleteReceipt(receipt.id)}></i></a>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	)
}
