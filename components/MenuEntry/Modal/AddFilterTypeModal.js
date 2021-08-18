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

const AddFilterTypeModal = (props) => {
  const [allergy, setAllergy] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setAllergy({
      name: "",
    });
    setErrors({});
  }, [props.isShow]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setAllergy({ ...allergy, [name]: value });

    setErrors({ ...errors, [name]: null });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name } = allergy;
      const json = {
        name: name,
        is_deleted: false,
      };
      const validations = {
        name: {
          required: true,
          maxlength: 100,
        },
      };
      const messages = {
        name: {
          required: "Please enter name.",
        },
      };
      const { isValid, errors } = Validator(json, validations, messages);
      if (!isValid) {
        setErrors(errors);
      } else {
        props.addFilterData(allergy);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CModal show={props.isShow} onClose={() => props.onClose()}>
        <CModalHeader closeButton className="bg1">
          <CModalTitle className="text-white">Add New Filter</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Enter Filter Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  name="name"
                  value={allergy.name}
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

export default AddFilterTypeModal;
