import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Button02 from '../button/Button02';

Collection01.propTypes = {
    data : PropTypes.array,
};

function Collection01(props) { 
    const {data} = props;
    return (
        <section className=" tf-collection wow fadeInUp">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-2 mb60 " >
                                <h2 className="heading">NFT MINT</h2>
                            </div>
                        </div>

                        {
                            data.slice(1,5).map(idx => (
                                <div key={idx.id} className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="tf-product">
                                        <div className="image">
                                            <img src={idx.img} alt="Binabox" />
                                        </div>
                                        <h6 className="name"><Button title={`${idx.title}`} path={`/item-details${idx.id}`}/></h6>
                                    </div>
                                </div> 
                            ))
                        }
                        
                    
                    </div>
                </div>
            </section>
    );
}

export default Collection01;