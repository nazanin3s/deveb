const multer = require('multer')
const path = require('path')

const storageForUserPhoto = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./static");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.basename(file.originalname) +
      Date.now() +
      path.extname(file.originalname)
    );
  },
});

const uploadAttachment = multer({
  storage: storageForUserPhoto,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

// Check File Type
function checkFileType(file, cb) {
  try {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif|psd|svg|tiff|dwg|pdf|avi|mp3|eps|txt|doc|ppt|pptx|zip|rar|wav|mp4|skp|3ds|fbx|obj|rvt|gltb|glb|dae|dxf/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      throw new Error("Only image Files with size less than 10MB.");
    }
  } catch (err) {
    console.log(err.message);
    return cb(null, true);
  }
}

module.exports = uploadAttachment