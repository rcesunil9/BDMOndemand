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
  CValidFeedback,
} from "@coreui/react";
import Validator from "js-object-validation";

const AddItemModal = (props) => {
  const [postData, setPostData] = useState({
    item_name: "",
    item_category: "",
    item_sub_category: "",
    item_allergy: [],
    item_calorie: "",
    item_spice: "",
    item_food_type: [],
    description: "",
    online_price: 0,
    delivery_price: 0,
    pos_price: 0,
    buy_one_get_one: false,
    half_price: false,
    has_tax: false,
    item_type: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setPostData({
      item_name: "",
      item_category: "",
      item_sub_category: "",
      item_allergy: [],
      item_calorie: "",
      item_spice: "",
      item_food_type: [],
      description: "",
      online_price: 0,
      delivery_price: 0,
      pos_price: 0,
      buy_one_get_one: false,
      half_price: false,
      has_tax: false,
      item_type: "",
    });
    setErrors({});
  }, [props.isShow]);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value, checked } = target;
    if (name === "is_deleted") {
      setPostData({ ...postData, [name]: checked });
    } else {
      setPostData({ ...postData, [name]: value });
    }
    setErrors({ ...errors, [name]: null });
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name,is_deleted ,item_category} = postData;
      const json = {
        item_name: name,
        item_category: item_category,
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
        props.onAddListItems(postData);
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
        size="xl"
      >
        <CModalHeader closeButton className = "bg1">
          <CModalTitle className = "text-white">Add New Item</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm className="form-horizontal">
            <CFormGroup row>
              <CCol md="6">
                <CFormGroup>
                  <CLabel htmlFor="inputSuccess2i">Non-required input</CLabel>
                  <CInput
                    className="form-control-success"
                    id="inputSuccess2i"
                  />
                  <CValidFeedback>Non-required</CValidFeedback>
                </CFormGroup>
              </CCol>

              <CCol md="6">
                <CFormGroup>
                  <CLabel htmlFor="inputSuccess2i">Non-required input</CLabel>
                  <CInput
                    className="form-control-success"
                    id="inputSuccess2i"
                  />
                  <CValidFeedback>Non-required</CValidFeedback>
                </CFormGroup>
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
                  value={postData.description}
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
                  checked={postData.is_deleted}
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

export default AddItemModal;
