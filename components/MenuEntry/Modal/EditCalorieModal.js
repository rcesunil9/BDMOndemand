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
import { getCalorieRequestById } from "../../../actions";
const EditCalorieModal = (props) => {
  const [calorie, setCalorie] = useState({
    name: "",
    is_deleted: false,
    calorie_id: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setCalorie({
      name: "",
      is_deleted: false,
      calorie_id: "",
    });
    if (props.isShow === true) {
      props.getCalorieRequestById({ calorie_id: props.calorie_id });
    }
  }, [props.isShow]);

  useEffect(() => {
    const { dataById } = props.CalorieReducerData;
    setCalorie({
      name: dataById && dataById.name ? dataById.name : "",
      is_deleted: dataById && dataById.is_deleted ? dataById.is_deleted : "",
      calorie_id: dataById && dataById._id ? dataById._id : "",
    });
  }, [props.CalorieReducerData.dataById]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value, checked } = target;
    if (name === "is_deleted") {
      setCalorie({ ...calorie, [name]: checked });
    } else {
      setCalorie({ ...calorie, [name]: value });
    }
    setErrors({ ...errors, [name]: null });
  };

  const handelUpdated = async (event) => {
    event.preventDefault();
    props.onUpdateCalorie({ ...calorie, calorie_id: props.calorie_id });
  };
  return (
    <>
      <CModal
        show={props.isShow}
        onClose={() => props.onClose()}
      >
        <CModalHeader closeButton className = "bg1 text-white">
          <CModalTitle>Edit Calorie</CModalTitle>
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
                  value={calorie.name}
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
  CalorieReducerData: state.CaloriesReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getCalorieRequestById: (data) => {
      dispatch(getCalorieRequestById(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditCalorieModal);
