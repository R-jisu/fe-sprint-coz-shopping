import ToastDiv from "./Toast";
export default {
  title: "Toast",
  component: ToastDiv,
};

export const Primary = {
  argTypes: {
    action: {
      options: ["add", "remove"],
      control: { type: "radio" },
    },
  },
  args: {
    primary: true,
    label: "상품이 북마크에 추가되었습니다.",
  },
};

export const AddBookmark = {
  args: {
    action: "add",
    label: "상품이 북마크에 추가되었습니다.",
  },
};

export const RemoveBookmark = {
  args: {
    action: "remove",
    label: "상품이 북마크에서 삭제되었습니다.",
  },
};
