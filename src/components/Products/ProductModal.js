import React from 'react'
import Modal from 'react-modal'
 function ProductModal(props) {
  const   {product,closeModal} = props ;
    return (
            <Modal onRequestClose={closeModal} isOpen={product}>
            <span className="close-icon" onClick={closeModal}> &times; </span>
            <div className="product-info">
                    <h3>Product details</h3>
                    <img src={product.imageUrl} alt={product.title} />
                    <p>name : {product.title}</p>
                    <p>desc : {product.desc}</p>
                    <p>price : $ {product.price}</p>
                </div>
            </Modal>
        )
    
}
export default ProductModal;