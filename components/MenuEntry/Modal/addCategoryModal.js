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
  CSwitch,
} from "@coreui/react";
import Validator from "js-object-validation";

const AddCategoryModal = (props) => {
  const [categories, setCategories] = useState({
    name: "",
    description: "",
    is_deleted: false,
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setCategories({
      name: "",
      description: "",
      is_deleted: false,
    });
    setErrors({});
  }, [props.isShow]);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value, checked } = target;
    if (name === "is_deleted") {
      setCategories({ ...categories, [name]: checked });
    } else {
      setCategories({ ...categories, [name]: value });
    }
    setErrors({ ...errors, [name]: null });
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name, description, is_deleted } = categories;
      const json = {
        name: name,
        description: description,
        is_deleted: is_deleted,
      };
      const validations = {
        name: {
          required: true,
          maxlength: 100,
        },
        description: {
          required: true,
        },
      };
      const messages = {
        name: {
          required: "Please enter name",
        },
        description: {
          required: "Please enter description.",
        },
      };
      const { isValid, errors } = Validator(json, validations, messages);
      if (!isValid) {
        setErrors(errors);
      } else {
        props.onAddCategories(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CModal show={props.isShow} onClose={() => props.onClose()}>
        <CModalHeader closeButton className="bg1">
          <CModalTitle className="text-white">Add New Categories</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel>name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  name="name"
                  value={categories.name}
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
              <CCol md="3">
                <CLabel>Description</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  name="description"
                  value={categories.description}
                  placeholder="description..."
                  autoComplete="description"
                  onChange={(e) => handleChange(e)}
                  invalid={errors && errors.description ? true : false}
                />

                <CInvalidFeedback>
                  {errors.description ? errors.description : null}
                </CInvalidFeedback>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Select Status</CLabel>
              </CCol>
              <CCol md="9">
                <CSwitch
                  className={"mx-1"}
                  variant={"3d"}
                  color={"primary"}
                  checked={categories.is_deleted}
                  name="is_deleted"
                  onChange={(e) => handleChange(e)}
                />
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

export default AddCategoryModal;
