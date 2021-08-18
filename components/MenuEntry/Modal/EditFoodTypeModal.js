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
  CInvalidFeedback,
} from "@coreui/react";
import { getFoodTypesRequestById } from "../../../actions";
import Dropzone from "react-dropzone";
const EditFoodTypeModal = (props) => {
  const [postData, setPostData] = useState({
    food_type_name: "",
    food_type_icon: "",
    food_type_id: "",
    imageUrl: "",
  });
  useEffect(() => {
    setPostData({
      food_type_name: "",
      food_type_icon: "",
      imageUrl: "",
      food_type_id: "",
    });
    if (props.isShow === true) {
      props.getFoodTypesRequestById({ food_type_id: props.food_type_id });
    }
  }, [props.isShow]);

  useEffect(() => {
    const { dataById } = props.ReducerData;
    console.log("dataById", dataById);
    setPostData({
      food_type_name: dataById && dataById.name ? dataById.name : "",
      food_type_icon:
        dataById && dataById.avatar_url ? dataById.avatar_url : "",
      food_type_id: dataById && dataById._id ? dataById._id : "",
      imageUrl: dataById && dataById.avatar_url ? dataById.avatar_url : "",
    });
  }, [props.ReducerData.dataById]);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setPostData({ ...postData, [name]: value });
  };

  const onSelectFile = async (file) => {
    file.map(async (data, i) => {
      let picReader = new FileReader();
      await picReader.addEventListener("load", async (event) => {
        var image = new Image();
        image.src = event.target.result;
        image.onload = async function () {
          let dataURL = picReader.result;
          setPostData({
            ...postData,
            food_type_icon: file[0],
            imageUrl: dataURL,
          });
        };
      });
      await picReader.readAsDataURL(data);
    });
  };

  const onDeleteImg = () => {
    setPostData({ ...postData, food_type_icon: "", imageUrl: "" });
  };

  const handelUpdated = async (event) => {
    let data = new FormData();
    data.append("food_type_name", postData.food_type_name);
    data.append("food_type_icon", postData.food_type_icon);
    data.append("food_type_id", postData.food_type_id);
    console.log("postData", postData);
    props.onUpdateFoodTypes(data);
  };
  return (
    <>
      <CModal show={props.isShow} onClose={() => props.onClose()}>
        <CModalHeader closeButton className="bg1 text-white">
          <CModalTitle>Edit FoodType</CModalTitle>
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
                  name="food_type_name"
                  value={postData.food_type_name}
                  placeholder="name..."
                  autoComplete="food_type_name"
                  onChange={(e) => handleChange(e)}
                />
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
         
                className="px-4 bg1 text-white"
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
  ReducerData: state.FoodTypeReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getFoodTypesRequestById: (data) => {
      dispatch(getFoodTypesRequestById(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditFoodTypeModal);
