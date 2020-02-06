import React, { Component } from "react";
// import styled from "styled-components";
import { ProjectConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProjectConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { title, img, hoverImg, youtube, description, StackUsed, Github, link   } = value.modalProject;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className='modal-container'>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto -md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to the cart</h5>
                      <img src={img} alt="phone" className="img-fluid " />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: ${Github}</h5>
                      <Link to="/">
                        <button
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Store
                        </button>
                      </Link>
                      <Link to="/">
                        <button cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProjectConsumer>
    );
  }
}