import { styled, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./ContactMe.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api";
import axios from "../config/webClient";

const useStyles = makeStyles({
  input: {
    color: "white",
  },
  root: {
    "& .Mui-error": {
      color: "red",
    },
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ff531a",
  },
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ff531a",
  },
  "& .Mui-error": {
    color: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff531a",
    },
  },
});

function ContactMe() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailId, setEmailId] = useState();
  const [message, setMessage] = useState();
  const [links, setLinks] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  function checkForEmpty(data) {
    console.log(data);
    if (data === "" || data === undefined) {
      return true;
    }
    return false;
  }

  function submitData(e) {
    e.preventDefault();
    const id = toast.loading("test", { theme: "colored" });
    if (
      checkForEmpty(message) ||
      checkForEmpty(firstName) ||
      checkForEmpty(lastName)
    ) {
      toast.update(id, {
        render: "Check the fields",
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: true,
      });
      return false;
    }
    if (emailTest() || checkMobile()) {
      toast.update(id, {
        render: "Check the fields",
        type: toast.TYPE.ERROR,
        isLoading: false,
        autoClose: true,
      });
      return false;
    }

    let data = {
      service_id: api.serviceId,
      template_id: api.templateId,
      user_id: api.userId,
      template_params: {
        first_name: `${firstName}`,
        last_name: `${lastName}`,
        message: `${message}`,
        mobile_number: `${mobileNumber}`,
        email_id: `${emailId}`,
        link: `${links}`,
      },
    };

    axios
      .post("/api/v1.0/email/send", data)
      .then((response) => {
        console.log(response.data);
        toast.update(id, {
          render: "Email sent",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      })
      .catch((error) => {
        toast.update(id, {
          render: "Error sending email try later",
          type: toast.TYPE.ERROR,
          isLoading: false,
          autoClose: true,
        });
        console.error(error.message);
      });

    console.log("test submit");
  }

  function keyPressEvent(e) {
    if (e.key === "Enter") {
      submitData(e);
      return false;
    }
  }

  function emailTest() {
    console.log(emailId);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailId)) {
      return false;
    } else {
      return true;
    }
  }
  function checkMobile() {
    if (mobileNumber === undefined || mobileNumber === "") {
      return false;
    }
    let reg = /^[+][0-9]+$/;
    if (reg.test(mobileNumber)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container main-div-contact-me" id="contact">
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <form onSubmit={keyPressEvent}>
              <h1 className="contact-me-h">Contact me</h1>
              <div className="row">
                <div className="col-6">
                  <CssTextField
                    className="text-firstname"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    id="firstName"
                    autoComplete="false"
                    onKeyPress={(event) => keyPressEvent(event)}
                    error={
                      firstName === "" ||
                      firstName === undefined ||
                      firstName.trim() === ""
                    }
                    helperText="First Name is required"
                    type="name"
                    margin="normal"
                    variant="outlined"
                    label="First Name*"
                    inputProps={{ className: classes.input }}
                  />
                </div>
                <div className="col-6">
                  <CssTextField
                    className="text-firstname"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    id="lastName"
                    error={
                      lastName === "" ||
                      lastName === undefined ||
                      lastName.trim() === ""
                    }
                    autoComplete="false"
                    helperText="Last name required"
                    type="name"
                    margin="normal"
                    variant="outlined"
                    label="Last Name*"
                    inputProps={{ className: classes.input }}
                  />
                </div>
              </div>
              <CssTextField
                className="col-12 text-fields"
                value={emailId}
                onChange={(event) => setEmailId(event.target.value)}
                id="email"
                autoComplete="false"
                type="email"
                margin="normal"
                error={emailId === undefined || emailTest()}
                variant="outlined"
                helperText="Invalid email id"
                label="Email"
                inputProps={{ className: classes.input }}
              />
              <CssTextField
                className="col-12 text-fields"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                id="message"
                multiline
                rows={4}
                maxRows={4}
                error={
                  message === "" ||
                  message === undefined ||
                  message.trim() === ""
                }
                autoComplete="false"
                helperText="Message required"
                type="message"
                margin="normal"
                variant="outlined"
                label="Message*"
                inputProps={{ className: classes.input }}
              />
              <CssTextField
                className="col-12 text-fields"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
                id="mobileNumber"
                autoComplete="false"
                error={checkMobile()}
                type="mobileNumber"
                helperText="Invalid mobile number"
                margin="normal"
                variant="outlined"
                label="Phone(optional)"
                inputProps={{ className: classes.input }}
              />
              <CssTextField
                className="col-12 text-fields"
                value={links}
                onChange={(event) => setLinks(event.target.value)}
                id="links"
                autoComplete="false"
                type="links"
                margin="normal"
                variant="outlined"
                label="Document link(optional)"
                inputProps={{ className: classes.input }}
              />
              <button
                onClick={(e) => submitData(e)}
                className="btn-send col-12"
              >
                <i className="fa fa-paper-plane"></i> Send email
              </button>
            </form>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31730149625!2d78.267616320943!3d17.412299561745858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1647273423437!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactMe;
