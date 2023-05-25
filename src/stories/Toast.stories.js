import ToastDiv from "./Toast";
export default {
  title: "Example/Toast",
  component: ToastDiv,
  argTypes: {
    bookmark: {
      options: ["add", "remove"],
      control: { type: "radio" },
    },
  },
};
export const Primary = {
  args: {
    primary: true,
    label: "상품이 북마크에 추가되었습니다.",
  },
};
