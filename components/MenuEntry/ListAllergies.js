import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CInput,
  CTooltip,
  CInputGroup,
  CBadge,
} from "@coreui/react";
import {
  getAllergyRequest,
  addAllergyRequest,
  updateAllergyRequest,
  modalOpenRequest,
  modalCloseRequest,
} from "../../actions";
import { connect } from "react-redux";
import Loader from "../../containers/Loader/Loader";
import AddAllergyModal from "./Modal/AddFilterTypeModal";
import EditAllergyModal from "./Modal/EditAllergyModal";
import { ConfirmBox } from "../../Helpers/SweetAlert";
import moment from "moment";
const ListAllergies = (props) => {
  const [id, setId] = useState("");
  const [selectRowCid, setselectRowCid] = useState("");
  useEffect(() => {
    props.getAllergyDate();
  }, []);
  const DisablesAllergy = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Disable This Allergy ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: true,
        allergy_id: data._id,
      };
      props.onUpdateAllergy(json);
    }
  };
  const EnableAllergy = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Enable This Allergy  ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: false,
        allergy_id: data._id,
      };
      props.onUpdateAllergy(json);
    }
  };
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex flex-row justify-content-between">
          {" "}
          <h6>
            <i class="fas fa-list-alt mr-2"></i>List Of Allergy
          </h6>
          <div>
            <CTooltip content="remove">
              <CButton className="btn-youtube text-white ml-2" size="sm">
                <i class="fas fa-minus text-white" />
              </CButton>
            </CTooltip>
            <CTooltip content="Add New">
              <CButton
                className="bg1 text-white ml-2"
                size="sm"
                onClick={() =>
                  props.modalOpenRequest({ addAllergyModalOpen: true })
                }
              >
                <i class="fas fa-plus" />
              </CButton>
            </CTooltip>
            <CTooltip content="Add Bulk">
              <CButton
                color="info"
                size="sm"
                className="ml-2"
                onClick={() =>
                  props.modalOpenRequest({ bulkCalorieModalOpen: true })
                }
              >
                <i class="fas fa-file-download"></i>
              </CButton>
            </CTooltip>
          </div>
        </CCardHeader>
        <CCardBody>
          <div className="table-responsive table1div">
            <table className="table table-bordered table-sm">
              <thead className="table1header">
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {props.allergyReducerData &&
                !props.allergyReducerData.isLoading ? (
                  props.allergyReducerData.data &&
                  props.allergyReducerData.data.length ? (
                    props.allergyReducerData.data.map((item, index) => {
                      return (
                        <tr key={index} className="w-100">
                          <td className="w-25">{index + 1}</td>
                          <td className="w-25">
                            {item.name ? item.name : null}
                          </td>

                          <td className="w-50">
                            <div className="d-flex flex-row justify-content-center">
                              <CTooltip content="Change Status">
                                <CBadge
                                  className={`${
                                    !item.is_deleted ? "bg1" : "bg-secondary"
                                  } text-white px-1`}
                                  onClick={() =>
                                    this.props.onUpdateCategories({
                                      is_deleted: false,
                                      cId: selectRowCid,
                                    })
                                  }
                                >
                                  Enable
                                </CBadge>
                              </CTooltip>
                              <CTooltip content="Change Status">
                                <CBadge
                                  className={`${
                                    item.is_deleted
                                      ? "btn-youtube"
                                      : "bg-secondary"
                                  } text-white px-1 ml-1`}
                                  onClick={() =>
                                    this.props.onUpdateCategories({
                                      is_deleted: true,
                                      cId: selectRowCid,
                                    })
                                  }
                                >
                                  Disable
                                </CBadge>
                              </CTooltip>
                            </div>
                          </td>
                          {/* <td>
                            <CTooltip content="Edit Categories">
                              <CButton
                                size="sm"
                                className="bg1 btn-brand mr-1 mb-1"
                                onClick={() => {
                                  setId(item._id);
                                  props.modalOpenRequest({
                                    editAllergyModalOpen: true,
                                  });
                                }}
                              >
                                <i class="fas fa-edit text-white" />
                              </CButton>
                            </CTooltip>
                            <CTooltip content="Delete Categories">
                              <CButton
                                size="sm"
                                className="btn-youtube btn-brand mr-1 mb-1"
                              >
                                <i class="fas fa-trash-alt" />
                              </CButton>
                            </CTooltip>
                          </td> */}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colspan="5">
                        <h6>
                          {" "}
                          <i class="fas fa-exclamation-triangle text-danger mr-2" />
                          Not Found
                        </h6>
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td colspan="5">
                      <Loader />
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CCardBody>
      </CCard>
      <AddAllergyModal
        {...props}
        isShow={props.ModalReducer.addAllergyModalOpen}
        onClose={() => props.modalCloseRequest({ addAllergyModalOpen: false })}
        addAllergyDate={(data) => props.addAllergyDate(data)}
      />
      <EditAllergyModal
        {...props}
        isShow={props.ModalReducer.editAllergyModalOpen}
        onClose={() => props.modalCloseRequest({ editAllergyModalOpen: false })}
        allergy_id={id}
        onUpdateAllergy={(data) => props.onUpdateAllergy(data)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  allergyReducerData: state.AllergyReducer,
  ModalReducer: state.ModalReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addAllergyDate: (data) => {
      dispatch(addAllergyRequest(data));
    },
    getAllergyDate: (data) => {
      dispatch(getAllergyRequest(data));
    },
    onUpdateAllergy: (data) => {
      dispatch(updateAllergyRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListAllergies);
