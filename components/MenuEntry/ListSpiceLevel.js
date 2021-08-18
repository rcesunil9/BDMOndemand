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
  CBadge
} from "@coreui/react";
import {
  getSpiceLevelRequest,
  addSpiceLevelRequest,
  updateSpiceLevelRequest,
  modalOpenRequest,
  modalCloseRequest,
} from "../../actions";
import { connect } from "react-redux";
import Loader from "../../containers/Loader/Loader";
import AddSpiceLevelModal from "./Modal/AddSpiceLevelModal";
import EditSpiceLevelModal from "./Modal/EditSpiceLevelModal";
import moment from "moment";
import { ConfirmBox } from "../../Helpers/SweetAlert";
const ListSpiceLevel = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    props.getSpiceLevelDate();
  }, []);

  const DisablesCalories = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Disable This Calories ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: true,
        calorie_id: data._id,
      };
      props.onUpdateCalorie(json);
    }
  };
  const EnableCalories = async (data) => {
    const { value } = await ConfirmBox({
      text: `Do You Want To Enable This Calories  ${data.name} ?`,
    });
    if (value) {
      let json = {
        name: data.name,
        is_deleted: false,
        calorie_id: data._id,
      };
      props.onUpdateCalorie(json);
    }
  };
  return (
    <>
      <CCard>
        <CCardHeader className="d-flex flex-row justify-content-between">
          {" "}
          <h6>
            <i class="fas fa-list-alt mr-2"></i>List Of Spice Level
          </h6>
          <div>
            <CTooltip content="Add New Spice Level">
              <CButton
                className="bg1 text-white"
                size="sm"
                onClick={() =>
                  props.modalOpenRequest({ addSpiceLevelModalOpen: true })
                }
              >
                <i class="fas fa-plus mr-1" /> Add New
              </CButton>
            </CTooltip>
            <CTooltip content="Add Bulk Category">
              <CButton
                color="info"
                size="sm"
                className="ml-2"
                onClick={() =>
                  props.modalOpenRequest({ bulkCalorieModalOpen: true })
                }
              >
                <i class="fas fa-plus mr-1" />
                Add Bulk
              </CButton>
            </CTooltip>
          </div>
        </CCardHeader>
        <CCardBody>
          {/* <div className="d-flex flex-row justify-content-between">
                <span></span>
                <CInputGroup className="w-25 mb-1">
                  <CInput
                    type="text"
                    name="email"
                    // value={auth.email}
                    placeholder="Search..."
                    autoComplete="email"
                    // onChange={(e) => handleChange(e)}
                  />
                  <CButton size="sm" className="bg-primary btn-brand ml-2">
                    <i class="fas fa-search" />
                  </CButton>
                </CInputGroup>
              </div> */}
          <div className="table-responsive table1div">
            <table className="table table-bordered table-sm">
              <thead className="table1header">
                <tr>
                  <th scope="col">no</th>
                  <th scope="col">Name</th>

                  <th scope="col">Created At</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {props.SpiceLevelReducerData &&
                !props.SpiceLevelReducerData.isLoading ? (
                  props.SpiceLevelReducerData.data &&
                  props.SpiceLevelReducerData.data.length ? (
                    props.SpiceLevelReducerData.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name ? item.name : null}</td>

                          <td>
                            {item.created_at
                              ? moment(item.created_at).format("MMM Do YY")
                              : null}
                          </td>
                          <td>
                            {!item.is_deleted ? (
                              <CTooltip content="Change Status">
                                <CBadge
                                  className="bg1 text-white px-1 pt-1 pb-1"
                                  onClick={() => DisablesCalories(item)}
                                >
                                  Enable
                                </CBadge>
                              </CTooltip>
                            ) : (
                              <CTooltip content="Change Status">
                                <CBadge
                                  className="btn-youtube text-white px-1 pt-1 pb-1"
                                  onClick={() => EnableCalories(item)}
                                >
                                  Disable
                                </CBadge>
                              </CTooltip>
                            )}
                          </td>

                          <td>
                            <CTooltip content="Edit Categories">
                              <CButton
                                size="sm"
                                className="bg1 text-white btn-brand mr-1 mb-1"
                                onClick={() => {
                                  setId(item._id);
                                  props.modalOpenRequest({
                                    editSpiceLevelModalOpen: true,
                                  });
                                }}
                              >
                                <i class="fas fa-edit" />
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
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colspan="5">
                        <h1>Not Found</h1>
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
      <AddSpiceLevelModal
        {...props}
        isShow={props.ModalReducer.addSpiceLevelModalOpen}
        onClose={() =>
          props.modalCloseRequest({ addSpiceLevelModalOpen: false })
        }
        addSpiceLevelDate={(data) => props.addSpiceLevelDate(data)}
      />
      <EditSpiceLevelModal
        {...props}
        isShow={props.ModalReducer.editSpiceLevelModalOpen}
        onClose={() =>
          props.modalCloseRequest({ editSpiceLevelModalOpen: false })
        }
        spice_id={id}
        onUpdateSpiceLevel={(data) => props.onUpdateSpiceLevel(data)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  SpiceLevelReducerData: state.SpiceLevelReducer,
  ModalReducer: state.ModalReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addSpiceLevelDate: (data) => {
      dispatch(addSpiceLevelRequest(data));
    },
    getSpiceLevelDate: (data) => {
      dispatch(getSpiceLevelRequest(data));
    },
    onUpdateSpiceLevel: (data) => {
      dispatch(updateSpiceLevelRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListSpiceLevel);
