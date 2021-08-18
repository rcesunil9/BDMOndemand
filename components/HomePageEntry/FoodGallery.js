import React, { useState } from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
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
  CFormText,
  CInputCheckbox,
  CTooltip,
  CInputFile,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
const usersData = [
  {
    no: "1",
    image: "",
    status: "pending",
    action: "",
  },
];

const handelSubmit = () => {
  // props.onLogin();
};

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = [
  "no",
  "image",
  "status",
  "action",
];

const FoodGallery = () => {
  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex  flex-row justify-content-between">
              {" "}
              <h6><i class="fas fa-list-alt mr-2"></i>List Of Food Gallery</h6>
              <CTooltip content="Add New">
                <CButton
                  color="success"
                  className="d-flex justify-content-end"
                  size="sm"
                  onClick={() => setSuccess1(!success1)}
                >
                  <i class="fas fa-plus mr-1" /> Add New
                </CButton>
              </CTooltip>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
                scopedSlots={{
                  action: (item) => (
                    <td>
                      <CTooltip content="Delete ">
                        <CButton
                          size="sm"
                          className="btn-youtube btn-brand mr-1 mb-1"
                        >
                          <i class="fas fa-trash-alt" />
                        </CButton>
                      </CTooltip>

                      <CTooltip content="Edit Food Gallery">
                        <CButton
                          size="sm"
                          className="bg-success btn-brand mr-1 mb-1"
                          onClick={() => setSuccess(!success)}
                        >
                          <i class="fas fa-edit" />
                        </CButton>
                      </CTooltip>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Edit Food Gallery</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                image upload
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
            
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Video Link</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-password"
                  name="hf-password"
                  placeholder="Details..."
                  autoComplete="current-password"
                />
                <CFormText className="help-block">
                  Please enter link
                </CFormText>
              </CCol>
            </CFormGroup>

           
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Select Status</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    disable
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Enable
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CRow>
              <CCol xs="6">
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => {
                    handelSubmit();
                  }}
                >
                  Update Gallery
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setSuccess(!success)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <CModal
        show={success1}
        onClose={() => setSuccess1(!success1)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Add New</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm action="" method="post" className="form-horizontal">
         

            <CFormGroup row>
              <CLabel col md="3" htmlFor="file-input">
                image upload
              </CLabel>
              <CCol xs="12" md="9">
                <CInputFile id="file-input" name="file-input" />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Video Link</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput
                  type="text"
                  id="hf-password"
                  name="hf-password"
                  placeholder="Details..."
                  autoComplete="current-password"
                />
                <CFormText className="help-block">
                  Please enter video link
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-password">Select Status</CLabel>
              </CCol>
              <CCol md="9">
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox1"
                    name="checkbox1"
                    value="option1"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox1"
                  >
                    disable
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="checkbox" className="checkbox">
                  <CInputCheckbox
                    id="checkbox2"
                    name="checkbox2"
                    value="option2"
                  />
                  <CLabel
                    variant="checkbox"
                    className="form-check-label"
                    htmlFor="checkbox2"
                  >
                    Enable
                  </CLabel>
                </CFormGroup>
              </CCol>
            </CFormGroup>
            <CRow>
              <CCol xs="6">
                <CButton
                  color="success"
                  className="px-4"
                  onClick={() => {
                    handelSubmit();
                  }}
                >
                  Submit
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setSuccess1(!success1)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default FoodGallery;

