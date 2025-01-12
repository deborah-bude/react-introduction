/**
 * 
 * @param {{category: string, name: string, stocked: boolean, price: string}} product 
 * @returns 
 */
export default function ProductRow({product}) {
    const style = product.stocked ? undefined : {color: "red"}
    return (
        <tr className="table-row">
            <td>{product.category}</td>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}