import React, { useState, useEffect } from "react";
import {
  CButton,
  CCol,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CInput,
  CFormGroup,
  CLabel,
  CInvalidFeedback,
} from "@coreui/react";
import Validator from "js-object-validation";
import Dropzone from "react-dropzone";
const AddFoodTypeModal = (props) => {
  const [postData, setPostData] = useState({
    name: "",
    avatar_url: "",
    is_deleted: false,
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setPostData({
      name: "",
      avatar_url: "",
      imageUrl: "",
    });
    setErrors({});
  }, [props.isShow]);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setPostData({ ...postData, [name]: value });
    setErrors({ ...errors, [name]: null });
  };

  const onSelectFile = async (file) => {
    file.map(async (data, i) => {
      let picReader = new FileReader();
      await picReader.addEventListener("load", async (event) => {
        var image = new Image();
        image.src = event.target.result;
        image.onload = async function () {
          let dataURL = picReader.result;
          setPostData({ ...postData, avatar_url: file[0], imageUrl: dataURL });
        };
      });
      await picReader.readAsDataURL(data);
    });
  };
  const onDeleteImg = () => {
    setPostData({ avatar_url: "", imageUrl: "" });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, avatar_url } = postData;
      const json = {
        food_type_name: name,
        food_type_icon: avatar_url,
      };
      const validations = {
        food_type_name: {
          required: true,
          maxlength: 100,
        },
        food_type_icon: {
          required: true,
        },
      };
      const messages = {
        food_type_name: {
          required: "Please enter name",
        },
        food_type_icon: {
          required: "Please enter avatar_url.",
        },
      };
      const { isValid, errors } = Validator(json, validations, messages);
      if (!isValid) {
        setErrors(errors);
      } else {
        let data = new FormData();
        data.append("food_type_name", json.food_type_name);
        data.append("food_type_icon", json.food_type_icon);
        props.onAddFoodTypes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CModal
        show={props.isShow}
        onClose={() => props.onClose()}
      >
        <CModalHeader closeButton className = "bg1">
          <CModalTitle className ="text-white">Add New Food Type</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  name="name"
                  value={postData.name}
                  placeholder="name..."
                  autoComplete="name"
                  onChange={(e) => handleChange(e)}
                  invalid={errors && errors.name ? true : false}
                />

                <CInvalidFeedback>
                  {errors.name ? errors.name : null}
                </CInvalidFeedback>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                Choose Image
              </CLabel>
              <CCol xs="12" md="9">
                {postData.imageUrl ? (
                  <div className="home-img-span mr-3">
                    <i
                      className="far fa-times-circle home-img text-danger"
                      onClick={() => onDeleteImg()}
                    />
                    <img
                      src={postData.imageUrl ? postData.imageUrl : null}
                      alt=""
                      width="150px"
                      height="130px"
                    />
                  </div>
                ) : (
                  <Dropzone multiple={false} onDrop={(e) => onSelectFile(e)}>
                    {({ getRootProps, getInputProps }) => {
                      return (
                        <div className="welcome-image-select-background">
                          <div className="text-center" {...getRootProps()}>
                            <input
                              {...getInputProps()}
                              accept="image/png, image/jpeg"
                            />
                            {
                              <>
                                <i className="far fa-file-image welcome-image-icon" />
                                <div className="text-center welcome-image-text">
                                  Drag image here or click to add
                                </div>
                              </>
                            }
                          </div>
                        </div>
                      );
                    }}
                  </Dropzone>
                )}
              </CCol>
            </CFormGroup>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CRow>
            <CCol xs="6">
              <CButton
                className="bg1 text-white"
                onClick={(e) => {
                  handelSubmit(e);
                }}
              >
                Submit
              </CButton>
            </CCol>
            <CCol xs="6">
              <CButton color="secondary" onClick={() => props.onClose()}>
                Cancel
              </CButton>
            </CCol>
          </CRow>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default AddFoodTypeModal;
