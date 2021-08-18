import React from "react";
import CIcon from "@coreui/icons-react";
import { AppRoutes } from "../config";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: AppRoutes.HOME.name,
    to: AppRoutes.DASHBOARD.url,
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Sales & Report",
    route: "/report",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Order Of List",
        to: "/report/order-list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Report Of List",
        to: "/report/report-list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Daily Summary Report",
        to: "/report/summary-report",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Wallet Record",
        to: "/report/wallet-record",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Tables Booking",
    route: "tables",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Table Booking Order List",
        to: "/tables/table-booking",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Home Page Entry",
    route: "/home",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Offer Popup",
        to: "/home/popup-setting",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Of Sliders",
        to: "/home/sliders-setting",
      },
      {
        _tag: "CSidebarNavItem",
        name: "About Us",
        to: "/home/about-us-setting",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Event Entry",
        to: "/home/event-setting",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gallery image Entry",
        to: "/home/gallery-setting",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Review List",
        to: "/home/review-setting",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Menu Entry",
    route: "/menu",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      // {
      //   _tag: "CSidebarNavDropdown",
      //   name: "Categories Entry",
      //   to: "/menu",
      //   _children: [
      //     {
      //       _tag: "CSidebarNavItem",
      //       name: "List Of Categories",
      //       to: "/menu/list-categorie",
      //     },
      //     {
      //       _tag: "CSidebarNavItem",
      //       name: "List Of Sub Categories",
      //       to: "/menu/list-sub-categorie",
      //     },
      //   ],
      // },

      {
        _tag: "CSidebarNavItem",
        name: "List Of Items",
        to: "/menu/list-item",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Offer Page Entry & List",
    route: "/offer",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Loyalty Setup",
        to: "/Offer/loyalty-setup",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Of Loyalty Users",
        to: "/offer/loyalty-users",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Of Subscribers",
        to: "/offer/list-subscribers",
      },
      {
        _tag: "CSidebarNavItem",
        name: "List Of Gift Card",
        to: "/offer/list-gift-card",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gift Card Usage Status",
        to: "/offer/card-status",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Offer Page Image Entry",
        to: "/offer/image-entery",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Contact page Entry",
    route: "/contact",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Contact list",
        to: "/contact/contact-list",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Contact page Entry",
    route: "/contact",
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Contact list",
        to: "/contact/contact-list",
      },
    ],
  },
];

export default _nav;
