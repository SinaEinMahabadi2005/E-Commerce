import toast from "react-hot-toast";
const notify = (type,message ) => {
  toast[type](message, {
    duration: 3000,
    position: "bottom-center",
  });
};
export default notify;
