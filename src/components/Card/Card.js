import { useCart } from "react-use-cart";

const Cards = (props) => {
    const { addItem } = useCart();
    return (
        <>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4 col-xxl-4 mb-4'>
                <div className="card h-100 shadow rounded">
                    <img src={props.img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title fw-bold">{props.title}</h5>
                            <span className="fw-bolder">R$ {props.price}</span>
                        </div>
                        <div className="">
                            <p className="card-text">{props.desc}</p>
                        </div>
                        <div className="d-grid mt-4">
                            <button className='btn btn-sm btn-outline-success' onClick={() => addItem(props.item)}>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Cards