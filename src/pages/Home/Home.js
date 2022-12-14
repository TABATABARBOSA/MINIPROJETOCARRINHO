import React from 'react';
import Cards from '../../components/Card/Card';
import data from '../../backend/Data';

const Home = () => {
    return (
        <div className='container-fluid bg-info'>
                        <h1 className='text-center mt-5 text-uppercase bg-info font-monospace'>Produtos</h1>
            <div className="container py-4">
                <div className="row">
                    {data.produtos.map((item, index) => {
                        return (
                            <Cards img={item.img} title={item.titulo} desc={item.desc} price={item.price} item={item} key={index} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Home 