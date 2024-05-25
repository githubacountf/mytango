import React from 'react';
import "./Invoice.css"

function Invoice() {
    const invoice = {
        issueDate: '2024年2月1日',
        invoiceNumber: '001',
        customerName: 'ABC株式会社',
        customerAddress: '東京都渋谷区渋谷1-1-1',
        customerContact: '電話番号: 012-3456-7890',
        items: [
            { description: '商品A', quantity: 2, unitPrice: 1000 },
            { description: '商品B', quantity: 1, unitPrice: 1500 }
        ]
    };

    const total = calculateTotal(invoice.items);

    return (
        <div className="invoice">
            <h2>請求書</h2>
            <div className="invoice-details">
                <p>発行日: {invoice.issueDate}</p>
                <p>請求書番号: {invoice.invoiceNumber}</p>
                <p>請求先:</p>
                <p>{invoice.customerName}</p>
                <p>{invoice.customerAddress}</p>
                <p>{invoice.customerContact}</p>
            </div>
            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>商品/サービス</th>
                        <th>数量</th>
                        <th>単価</th>
                        <th>金額</th>
                    </tr>
                </thead>
                <tbody>
                    {invoice.items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>¥{item.unitPrice}</td>
                            <td>¥{item.quantity * item.unitPrice}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">合計</td>
                        <td>¥{total}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

function calculateTotal(items) {
    return items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
}

export default Invoice;
