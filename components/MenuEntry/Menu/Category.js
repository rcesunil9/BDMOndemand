import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CBadge,
} from "@coreui/react";
import { connect } from "react-redux";
import {
  modalOpenRequest,
  modalCloseRequest,
  addCategoriesRequest,
  getCategoriesRequest,
  getCategoriesSuccess,
  updateCategoriesRequest,
} from "../../../actions";
import Loader from "../../../containers/Loader/Loader";
import BulkCategoryModal from "../Modal/BulkCategoryModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCategory: false,
      name: "",
      description: "",
      is_deleted: false,
      selectRowCid: "",
      selectRowClick: 0,
      updateCategoryData: {
        name: "",
        description: "",
        is_deleted: false,
      },
    };
  }
  componentDidMount() {
    this.props.getCategoriesDate();
  }
  componentDidUpdate({ CategorieReducerData }) {
    console.log("CategorieReducerData", CategorieReducerData);
    if (
      CategorieReducerData &&
      CategorieReducerData.updateReq &&
      CategorieReducerData.updateReq !==
        this.props.CategorieReducerData.updateReq
    ) {
      let data = this.props.CategorieReducerData.data.filter(
        (item) => item._id === this.state.selectRowCid
      )[0];
      let updateCategoryData = {
        name: data && data.name ? data.name : "",
        is_deleted: data && data.is_deleted ? data.is_deleted : false,
        description: data && data.description ? data.description : "",
      };
      console.log("!Hello");
      this.setState({
        addCategory: false,
        name: "",
        is_deleted: false,
        description: "",
        selectRowCid: data && data._id,
        selectRowClick: this.state.addCategory ? 2 : 1,
        updateCategoryData: updateCategoryData,
      });
    }
  }
  onDragStart = (start) => {
    const id = start.draggableId;
    console.log("@@@@@@@", id);
    // const selected = this.state.selectedRowIds.find(
    //   (selectedId) => selectedId === id
    // );

    // If dragging an item that is not selected, unselect all items
    // if (!selected) {
    //   this.unselectAll();
    // }

    // this.setState({
    //   draggingRowId: start.draggableId,
    // });
  };

  onDragEnd = (result) => {
    const { destination, source, reason } = result;
    console.log("@@@@@destination", destination, source, reason);
    // Not a thing to do...
    if (!destination || reason === "CANCEL") {
      this.setState({
        draggingRowId: null,
      });
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const entities = Object.assign([], this.props.CategorieReducerData.data);
    const quote = this.props.CategorieReducerData.data[source.index];
    entities.splice(source.index, 1);
    entities.splice(destination.index, 0, quote);
    this.props.getCategoriesSuccess({ data: entities });
  };

  render() {
    const {
      addCategory,
      name,
      description,
      is_deleted,
      selectRowCid,
      updateCategoryData,
      selectRowClick,
    } = this.state;
    const { CategorieReducerData } = this.props;
    console.log("!!!!!!1", updateCategoryData, selectRowClick);
    return (
      <>
        <CCard>
          <CCardHeader className="d-flex  flex-row justify-content-between">
            {" "}
            <h6>
              <i class="fas fa-list-alt mr-2"></i>Category Name
            </h6>
            <div>
              <CTooltip content="remove">
                <CButton className="btn-youtube text-white mr-2" size="sm">
                  <i class="fas fa-minus text-white" />
                </CButton>
              </CTooltip>
              <CButton
                className="bg1 text-white"
                size="sm"
                onClick={() =>
                  this.setState({
                    addCategory: true,
                    selectRowCid: "",
                    name: "",
                    description: "",
                    is_deleted: false,
                  })
                }
              >
                <i class="fas fa-plus" />
              </CButton>

              <CTooltip content="Add Bulk">
                <CButton
                  color="info"
                  size="sm"
                  className="ml-2"
                  onClick={() =>
                    this.props.modalOpenRequest({ bulkCategoryModalOpen: true })
                  }
                >
                  <i class="fas fa-file-download"></i>
                </CButton>
              </CTooltip>
            </div>
          </CCardHeader>
          <CCardBody>
            <DragDropContext
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
            >
              <div className="table-responsive table1div">
                <table class="table table-bordered table-sm">
                  <thead className="table1header">
                    <tr>
                      <th scope="col"> Category name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Sorting</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <Droppable droppableId="table">
                    {(provided, snapshot) => (
                      <tbody
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <>
                          {addCategory ? (
                            <tr>
                              <td>
                                <input
                                  className="w-100"
                                  type="text"
                                  name="name"
                                  value={name}
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  onBlur={() =>
                                    this.props.onAddCategories({
                                      name,
                                      description,
                                      is_deleted,
                                    })
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="w-100"
                                  type="text"
                                  name="description"
                                  onChange={(e) =>
                                    this.setState({
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  onBlur={() =>
                                    this.props.onAddCategories({
                                      name,
                                      description,
                                      is_deleted,
                                    })
                                  }
                                />
                              </td>
                              <td>
                                <input
                                  className="w-100"
                                  type="number"
                                  name="sorting"
                                  disabled={true}
                                />
                              </td>
                              <td>
                                <div className="d-flex flex-row text-center">
                                  <CBadge
                                    className={`${
                                      !is_deleted ? "bg1" : "bg-secondary"
                                    } text-white px-1 pt-1 pb-1`}
                                  >
                                    Enable
                                  </CBadge>

                                  <CBadge
                                    className={`${
                                      is_deleted
                                        ? "btn-youtube"
                                        : "bg-secondary"
                                    } text-white px-1 pt-1 pb-1 ml-1`}
                                  >
                                    Disable
                                  </CBadge>
                                </div>
                              </td>
                            </tr>
                          ) : null}

                          {CategorieReducerData &&
                          !CategorieReducerData.isLoading ? (
                            CategorieReducerData.data &&
                            CategorieReducerData.data.length ? (
                              CategorieReducerData.data.map((item, index) => {
                                return (
                                  <Draggable
                                    draggableId={item._id}
                                    index={index}
                                    key={item._id}
                                  >
                                    {(provided, snapshot) => (
                                      <tr
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        key={index}
                                        className={
                                          selectRowCid === item._id ? "bg2" : ""
                                        }
                                        onClick={() =>
                                          this.setState({
                                            selectRowCid: item._id,
                                            addCategory: false,
                                            selectRowClick:
                                              selectRowCid === item._id
                                                ? selectRowClick + 1
                                                : 1,
                                            updateCategoryData:
                                              selectRowCid === item._id
                                                ? updateCategoryData
                                                : {
                                                    name: item.name
                                                      ? item.name
                                                      : "",
                                                    description:
                                                      item.description
                                                        ? item.description
                                                        : "",
                                                    is_deleted: item.is_deleted
                                                      ? item.is_deleted
                                                      : false,
                                                  },
                                          })
                                        }
                                      >
                                        <td className="w-25">
                                          {selectRowCid === item._id &&
                                          selectRowClick > 1 ? (
                                            <input
                                              className="w-100"
                                              type="text"
                                              name="name"
                                              value={updateCategoryData.name}
                                              onChange={(e) =>
                                                this.setState({
                                                  updateCategoryData: {
                                                    ...updateCategoryData,
                                                    [e.target.name]:
                                                      e.target.value,
                                                  },
                                                })
                                              }
                                              onBlur={() =>
                                                this.props.onUpdateCategories({
                                                  name: updateCategoryData.name,
                                                  cId: selectRowCid,
                                                })
                                              }
                                            />
                                          ) : item.name ? (
                                            item.name
                                          ) : null}
                                        </td>

                                        <td className="w-25">
                                          {selectRowCid === item._id &&
                                          selectRowClick > 1 ? (
                                            <input
                                              className="w-100"
                                              type="text"
                                              name="description"
                                              value={
                                                updateCategoryData.description
                                              }
                                              onChange={(e) =>
                                                this.setState({
                                                  updateCategoryData: {
                                                    ...updateCategoryData,
                                                    [e.target.name]:
                                                      e.target.value,
                                                  },
                                                })
                                              }
                                              onBlur={() =>
                                                this.props.onUpdateCategories({
                                                  description:
                                                    updateCategoryData.description,
                                                  cId: selectRowCid,
                                                })
                                              }
                                            />
                                          ) : (
                                            item.description
                                          )}
                                        </td>
                                        <td className="w-25">{item.order}</td>
                                        <td className="w-25">
                                          <div className="d-flex flex-row">
                                            <CTooltip content="Change Status">
                                              <CBadge
                                                className={`${
                                                  !item.is_deleted
                                                    ? "bg1"
                                                    : "bg-secondary"
                                                } text-white px-1`}
                                                onClick={() =>
                                                  this.props.onUpdateCategories(
                                                    {
                                                      is_deleted: false,
                                                      cId: selectRowCid,
                                                    }
                                                  )
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
                                                  this.props.onUpdateCategories(
                                                    {
                                                      is_deleted: true,
                                                      cId: selectRowCid,
                                                    }
                                                  )
                                                }
                                              >
                                                Disable
                                              </CBadge>
                                            </CTooltip>
                                          </div>
                                        </td>
                                      </tr>
                                    )}
                                  </Draggable>
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
                        </>
                      </tbody>
                    )}
                  </Droppable>
                </table>
              </div>
            </DragDropContext>{" "}
          </CCardBody>
        </CCard>
        
      <BulkCategoryModal
        isShow={this.props.ModalReducer.bulkCategoryModalOpen}
        onClose={() =>
          this.props.modalCloseRequest({ bulkCategoryModalOpen: false })
        }
        onSaveBulkData={(data) => this.props.onSaveBulkData(data)}
      />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  CategorieReducerData: state.CategorieReducer,
  ReducerData: state.ItemsReducer,
  ModalReducer: state.ModalReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategories: (data) => {
      dispatch(addCategoriesRequest(data));
    },
    getCategoriesSuccess: (data) => {
      dispatch(getCategoriesSuccess(data));
    },
    getCategoriesDate: (data) => {
      dispatch(getCategoriesRequest(data));
    },
    onUpdateCategories: (data) => {
      dispatch(updateCategoriesRequest(data));
    },
    modalOpenRequest: (data) => {
      dispatch(modalOpenRequest(data));
    },
    modalCloseRequest: (data) => {
      dispatch(modalCloseRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
