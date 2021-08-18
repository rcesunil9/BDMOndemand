import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
  CSwitch,
} from "@coreui/react";
import { getAllergyRequestById } from "../../../actions";
const EditAllergyModal = (props) => {
  const [allergy, setAllergy] = useState({
    name: "",
    is_deleted: false,
    allergy_id: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setAllergy({
      name: "",
      description: "",
      is_deleted: false,
      allergy_id: "",
    });
    if (props.isShow === true) {
      props.getAllergyRequestById({ allergy_id: props.allergy_id });
    }
  }, [props.isShow]);

  useEffect(() => {
    const { dataById } = props.AllergyReducerData;
    setAllergy({
      name: dataById && dataById.name ? dataById.name : "",
      is_deleted: dataById && dataById.is_deleted ? dataById.is_deleted : "",
      allergy_id: dataById && dataById._id ? dataById._id : "",
    });
  }, [props.AllergyReducerData.dataById]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value, checked } = target;
    if (name === "is_deleted") {
      setAllergy({ ...allergy, [name]: checked });
    } else {
      setAllergy({ ...allergy, [name]: value });
    }
    setErrors({ ...errors, [name]: null });
  };

  const handelUpdated = async (event) => {
    event.preventDefault();
    props.onUpdateAllergy({ ...allergy, allergy_id: props.allergy_id });
  };

  return (
    <>
      <CModal show={props.isShow} onClose={() => props.onClose()}>
        <CModalHeader closeButton className="bg1 text-white">
          <CModalTitle>Edit Allergy</CModalTitle>
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
                  value={allergy.name}
                  placeholder="name..."
                  autoComplete="name"
                  onChange={(e) => handleChange(e)}
                />
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
                  handelUpdated(e);
                }}
              >
                Update
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

const mapStateToProps = (state) => ({
  AllergyReducerData: state.AllergyReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getAllergyRequestById: (data) => {
      dispatch(getAllergyRequestById(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditAllergyModal);
