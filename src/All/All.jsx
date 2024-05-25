import React from 'react';
import {En,Ja} from "../Data"

function All() {
    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ background: '#e9faf9', padding: '8px', textAlign: 'left', borderBottom: 'solid 1px #778ca3', border: 'solid 1px #778ca3' }}>英語</th>
                        <th style={{ background: '#e9faf9', padding: '8px', textAlign: 'left', borderBottom: 'solid 1px #778ca3', border: 'solid 1px #778ca3' }}>日本語</th>
                    </tr>
                </thead>
                <tbody>
                    {En.map((en, index) => (
                        <tr key={index}>
                            <td style={{ padding: '8px', border: 'solid 1px #778ca3' }}>{index + 1}.{en}</td>
                            <td style={{ padding: '8px', border: 'solid 1px #778ca3' }}>{Ja[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default All;

