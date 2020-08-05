import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="container" id="contact-me">
          <div class="row">
            <div class="col-md-12">
              <h1>
                <strong>Contact Me</strong>
              </h1>
              <hr />

              <div>
                <div class="row">
                  <div class="col-sm">
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput2">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </form>
                    <button
                      id="submitBtn"
                      type="button"
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
