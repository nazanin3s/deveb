// const { sendContactFormValidator } = require("./utils/joiValieator");
const tryCatchWrapper = require("./utils/utils");
const mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

// Working On
// Creting Order
const sendContactForm = tryCatchWrapper(async (req, res) => {
  console.log(req.files);

  let files;

  if (req.files) {
    files = req.files.map(({ filename }) => {
      return {
        url: `${req.protocol}://${req.get("host")}/${filename}`,
        name: filename,
      };
    });
  }

  const { email, name, message, needs, docs, budg } = req.headers;

  mailjet
	.post("send", { version: "v3.1" })
	.request({
    Messages: [
      {
        From: {
          Email: "amirmohseni.dev@gmail.com",
          Name: "Deveb",
        },
        To: [
          {
            Email: "info@deveb.co",
            Name: "Deveb",
          },
        ],
        Subject: `Deveb New Reach Out From ${name}!!!`,
        TextPart: ``,
        HTMLPart: `
					Name: ${name} <br/>
					Email:${email} <br/><br/>
					Message: ${message || "No message"} <br/>
					${needs ? `needs: ${needs}<br/> <br/>` : ""}
					${budg ? `budget: ${budg}<br/> <br/>` : ""}
					Uploaded Files: 
					${files && files.length && renderAForAttachments(files)}`,
        CustomID: "SendToCompany",
      },
    ],
  })
	.then( () => {
		res.status(201).json({
			success: true,
			message: "Contact form submitted successfuly.",
		});
	})
	.catch( () => {
		res.status(500).json({
			success: false,
			message: "Contact form could not be submitted.",
		});
	});
  
});

const renderAForAttachments = (attachs) => {
  return attachs.map(
    ({ url, name }, idx) =>
      `<a href="${url}" target="_blank">FILE-${idx} - ${name}</a> <br/>`
  );
};

module.exports = {
  sendContactForm,
};
