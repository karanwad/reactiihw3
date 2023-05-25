import React from 'react'

export const List = ({data}) => {
return (
    <div className="Table">
    <table>
<tead></tead>
<tbody>
{
data.map(p => (

<tr key={p.id}>
<td>{p.animalName}</td>
</tr>))
} 
</tbody>
</table>
</div>
)
}