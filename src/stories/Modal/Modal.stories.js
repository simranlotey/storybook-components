import React from "react";
import { CustomHeader, CustomFooter, CustomModal } from "./Modal";

export default {
  title: "Components/Modal",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    HeaderBackgroundColor: { control: "color" },
    solidBtnBackgroundColor: { control: "color" },
    severity: {
      options: ["success", "warning", "error", "info"],
      control: { type: "select" },
    },
  },
};

export const Modal = (args) => <CustomModal {...args} />;
Modal.args = {
  severity: "warning",
  headerTitle: "Modal Title",
  borderRadius: 4,
  btnBorderRadius: 4,
  MainBackgroundColor: "#fff",
  FooterBackgroundColor: "#fff",
};

export const Header = (args) => <CustomHeader {...args} />;
Header.args = {
  severity: "warning",
  headerTitle: "Modal Title",
  borderRadius: 0,
};

export const Footer = (args) => <CustomFooter {...args} />;
Footer.args = {
  severity: "warning",
  btnBorderRadius: 4,
  FooterBackgroundColor: "#fff",
};
