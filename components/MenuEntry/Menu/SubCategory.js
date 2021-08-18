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
  updateSubCategoriesRequest,
  addSubCategoriesRequest,
  getSubCategoriesRequest,
} from "../../../actions";
import Loader from "../../../containers/Loader/Loader";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSubCategory: false,
      name: "",
      description: "",
      is_deleted: false,
      selectRowCid: "",

      updateCategoryData: {},
    };
  }
  componentDidMount() {
    this.props.getSubCategoriesDate();
  }
  componentDidUpdate({ subCategorieReducerData }) {
    if (
      subCategorieReducerData &&
      subCategorieReducerData.data &&
      this.props.subCategorieReducerData &&
      this.props.subCategorieReducerData.data &&
      this.props.subCategorieReducerData.data !== subCategorieReducerData.data
    ) {
      let data = this.props.subCategorieReducerData.data.filter(
        (item) => item.name === this.state.name
      )[0];
      let updateCategoryData = {
        name: data && data.name ? data.name : "",
        is_deleted: data && data.is_deleted ? data.is_deleted : false,
        description: data && data.description ? data.description : "",
      };

      this.setState({
        addSubCategory: false,
        name: "",
        is_deleted: false,
        description: "",
        selectRowCid: data && data._id,
        updateCategoryData,
      });
    }
  }
  render() {
    const {
      addSubCategory,
      name,
      description,
      is_deleted,
      selectRowCid,
      updateCategoryData,
    } = this.state;
    const { subCategorieReducerData } = this.props;
    return (
      <>
        <CCard>
          <CCardHeader className="d-flex  flex-row justify-content-between">
            {" "}
            <h6>
              <i class="fas fa-list-alt mr-2"></i>List Of Sub Category
            </h6>
            <div>
              <CButton className="bg1 text-white" size="sm"
               onClick={() =>
                this.setState({
                  addSubCategory: true,
                  selectRowCid: "",
                  name: "",
                  description: "",
                  is_deleted: false,
                })
              }>
                <i class="fas fa-plus" />
              </CButton>

              <CButton className="bg-danger text-white ml-2" size="sm">
                <i class="fas fa-minus" />
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <div className="table-responsive table1div">
              <table class="table table-bordered table-sm">
                <thead className="table1header">
                  <tr>
                    <th scope="col"> Sub Category name</th>
                    <th scope="col"> Category name</th>
                    <th scope="col">Sorting</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {addSubCategory ? (
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) =>
                              this.setState({
                                [e.target.name]: e.target.value,
                              })
                            }
                            onBlur={() => {
                              this.props.onAddCategories({
                                name,
                                description,
                                is_deleted,
                                category_id:"60b27daed6359a3048153146"
                              });
                            }}
                          />
                        </td>
                        <td></td>
                        <td>
                          <input
                            type="text"
                            name="description"
                            onChange={(e) =>
                              this.setState({
                                [e.target.name]: e.target.value,
                              })
                            }
                            onBlur={() => {
                              this.props.onAddCategories({
                                name,
                                description,
                                is_deleted,
                                category_id:"60b27daed6359a3048153146"
                              });
                            }}
                          />
                        </td>
                        <td>
                          <div className="d-flex flex-row">
                            <CBadge className="bg1 text-white px-1 pt-1 pb-1">
                              Active
                            </CBadge>

                            <CBadge className="btn-youtube text-white px-1 pt-1 pb-1 ml-1">
                              Inactive
                            </CBadge>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                    {subCategorieReducerData &&
                    !subCategorieReducerData.isLoading ? (
                      subCategorieReducerData.data &&
                      subCategorieReducerData.data.length ? (
                        subCategorieReducerData.data.map((item, index) => {
                          return (
                            <tr
                              key={index}
                              onClick={() =>
                                this.setState({
                                  selectRowCid: item._id,
                                  addSubCategory: false,
                                  updateCategoryData: {
                                    name: item.name ? item.name : "",
                                    description: item.description
                                      ? item.description
                                      : "",
                                    is_deleted: item.is_deleted
                                      ? item.is_deleted
                                      : false,
                                  },
                                })
                              }
                            >
                              <td>
                                {selectRowCid === item._id ? (
                                  <input
                                    type="text"
                                    name="name"
                                    value={updateCategoryData.name}
                                    onChange={(e) =>
                                      this.setState({
                                        updateCategoryData: {
                                          ...updateCategoryData,
                                          [e.target.name]: e.target.value,
                                        },
                                      })
                                    }
                                    onBlur={() => {
                                      this.props.onUpdateCategories({
                                        ...updateCategoryData,
                                        cId: selectRowCid,
                                      });
                                    }}
                                  />
                                ) : item.name ? (
                                  item.name
                                ) : null}
                              </td>
                              <td>
                                {" "}
                                {item.category_name ? item.category_name : null}
                              </td>
                              <td>
                                {/* {" "}
                                {selectRowCid === item._id ? (
                                  <input
                                    type="text"
                                    name="description"
                                    value={updateCategoryData.description}
                                    onChange={(e) =>
                                      this.setState({
                                        updateCategoryData: {
                                          ...updateCategoryData,
                                          [e.target.name]: e.target.value,
                                        },
                                      })
                                    }
                                    onBlur={() => {
                                      this.props.onUpdateCategories({
                                        ...updateCategoryData,
                                        cId: selectRowCid,
                                      });
                                    }}
                                  />
                                ) : (
                                  item.description
                                )} */}

                                {index + 1}
                              </td>
                              <td>
                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="bg1 text-white px-1"
                                    // onClick={() => activateUsers(item)}
                                  >
                                    Enable
                                  </CBadge>
                                </CTooltip>

                                <CTooltip content="Change Status">
                                  <CBadge
                                    className="btn-youtube text-white px-1 ml-1"
                                    // onClick={() => inActivateUsers(item)}
                                  >
                                    Disable
                                  </CBadge>
                                </CTooltip>
                              </td>
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
                  </>
                </tbody>
              </table>
            </div>
          </CCardBody>
        </CCard>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  CategorieReducerData: state.CategorieReducer,
  subCategorieReducerData: state.SubCategorieReducer,
  ReducerData: state.ItemsReducer,
  ModalReducer: state.ModalReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategories: (data) => {
      dispatch(addSubCategoriesRequest(data));
    },
    getSubCategoriesDate: (data) => {
      dispatch(getSubCategoriesRequest(data));
    },
    onUpdateCategories: (data) => {
      dispatch(updateSubCategoriesRequest(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItems);
