import emailjs from "@emailjs/browser";

export const notifyAdmin = async (data) => {
  console.log(data);
  try {
    const sendEmail = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      data,
      process.env.REACT_APP_EMAILJS_USER_ID
    );
    console.log(sendEmail);
  } catch (error) {
    console.log(error);
  }
};
