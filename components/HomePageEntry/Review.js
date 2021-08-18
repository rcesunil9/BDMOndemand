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
    name: "Testing",
    designation: "Test",
    Message:
      "Test",
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
  "name",
  "designation",
  "image",
  "message",
  "status",
  "action",
];

const Review = () => {
  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex  flex-row justify-content-between">
              {" "}
              <h6><i class="fas fa-list-alt mr-2"></i>List Of Reviews</h6>
              <CTooltip content="Add New Sliders">
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
                itemsPerPage={4}
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
                          <i class="fas fa-times" />
                        </CButton>
                      </CTooltip>

                      <CTooltip content="Active">
                        <CButton
                          size="sm"
                          className="bg-success btn-brand mr-1 mb-1"
                        >
                          <i class="fas fa-check" />
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

        </>
  );
};

export default Review;
