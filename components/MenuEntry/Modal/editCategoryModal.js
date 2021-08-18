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
import { getCategoriesRequestById } from "../../../actions";
const EditCategoryModal = (props) => {
  const [categories, setCategories] = useState({
    name: "",
    description: "",
    is_deleted: false,
    cId: "",
  });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setCategories({
      name: "",
      description: "",
      is_deleted: false,
      cId: "",
    });
    setErrors({});
    if (props.isShow === true) {
      props.getCategoriesRequestById({ cId: props.cId });
    }
  }, [props.isShow]);

  useEffect(() => {
    const { dataById } = props.CategorieReducerData;
    setCategories({
      name: dataById && dataById.name ? dataById.name : "",
      description: dataById && dataById.description ? dataById.description : "",
      is_deleted: dataById && dataById.is_deleted ? dataById.is_deleted : "",
      cId: dataById && dataById._id ? dataById._id : "",
    });
  }, [props.CategorieReducerData.dataById]);

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
  const handelUpdated = async (event) => {
    event.preventDefault();
    props.onUpdateCategories(categories);
  };
  return (
    <>
      <CModal show={props.isShow} onClose={() => props.onClose()}>
        <CModalHeader closeButton className="bg1">
          <CModalTitle className="text-white">Edit Categories</CModalTitle>
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
                />
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
  CategorieReducerData: state.CategorieReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getCategoriesRequestById: (data) => {
      dispatch(getCategoriesRequestById(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryModal);
