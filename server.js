const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

// Route 1: Send JSON response

// Route 2: Get image blob from file based on image name
app.get("/get-image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "images", imageName);
  console.log("imahepath", imagePath);

  // Check if the requested image exists in the directory
  fs.stat(imagePath, (err) => {
    if (err) {
      return res.status(404).send("Image not found");
    }

    // Send the image file as a blob
    res.sendFile(imagePath);
  });
});

// Route 3: Return 5 objects with names koc1, koc2, koc3, koc4, koc5
app.get("/get-koc-objects", (req, res) => {
  const kocObjects = [
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc1asdasdasdasdasdsadasdasda.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2 copy.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      ecmNo: "1122334455",
      verNo: "3.0",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3 copy.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc2",
      addOn: "17/09/2024 11:10 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      modOn: "17/09/2024 11:10 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",

      vsid: "{C24174C1-D765-C3F0-8619-5FF715000002}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc3",
      addOn: "17/09/2024 11:11 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "17/09/2024 11:11 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000003}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc4",
      addOn: "17/09/2024 11:12 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc4.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800004}",
      modOn: "17/09/2024 11:12 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000004}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc5",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc5.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000005}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "koc2",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2.jpg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF078000044}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000005}",
      props: [
        {
          name: "ECMNo",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "FALSE",
          hidden: "FALSE",
          req: "FALSE",
          ltype: 0,
        },
      ],
    },
    {
      name: "copy1",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy1.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF078000044}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000005}",
    },
    {
      name: "copy2",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy2.jpeg",
      format: "image/jpeg",
      id: "{2E0E8125-E0CC-CE8F-9C89-91FF078000045}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334456",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000006}",
    },
    {
      name: "copy3",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy3.jpg",
      format: "image/jpg",
      id: "{3E0E8125-E0CC-CE8F-9C89-91FF078000046}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334457",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000007}",
    },
    {
      name: "copy4",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy4.jpeg",
      format: "image/jpeg",
      id: "{4E0E8125-E0CC-CE8F-9C89-91FF078000047}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334458",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000008}",
    },
    {
      name: "copy5",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy5.jpeg",
      format: "image/jpeg",
      id: "{5E0E8125-E0CC-CE8F-9C89-91FF078000048}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334459",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000009}",
    },
    {
      name: "copy6",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy6.jpeg",
      format: "image/jpeg",
      id: "{6E0E8125-E0CC-CE8F-9C89-91FF078000049}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334460",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000010}",
    },
    {
      name: "copy7",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy7.jpeg",
      format: "image/jpeg",
      id: "{7E0E8125-E0CC-CE8F-9C89-91FF078000050}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334461",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000011}",
    },
    {
      name: "copy8",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "copy8.jpeg",
      format: "image/jpeg",
      id: "{8E0E8125-E0CC-CE8F-9C89-91FF078000051}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334462",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000012}",
    },
  ];

  res.json(kocObjects);
});
app.get("/get-video-docs", (req, res) => {
  const videoDocs = [
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc1.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "koc2",
      addOn: "17/09/2024 11:10 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      modOn: "17/09/2024 11:10 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000002}",
    },
    {
      name: "koc3",
      addOn: "17/09/2024 11:11 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "17/09/2024 11:11 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000003}",
    },
    {
      name: "video4.mp4",
      addOn: "17/09/2024 11:11 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "video4.mp4",
      format: "application/octet-stream",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "17/09/2024 11:11 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000003}",
    },
  ];

  res.json(videoDocs);
});

// Route 4: Get video blob from file based on video name
app.get("/get-video/:videoName", (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, "videos", videoName);

  // Check if the requested video exists in the directory
  fs.stat(videoPath, (err) => {
    if (err) {
      return res.status(404).send("Video not found");
    }

    // Send the video file as a blob
    res.sendFile(videoPath);
  });
});
const data = {
  searchList: [
    {
      name: "Correspondence",
      symName: "Correspondence",
      id: "{E140E493-17EB-C79B-8481-705730F00000}",
      type: "TEMPLATE",
      vsid: "{9C871B5E-919B-C1C1-8785-5E12E3200000}",
    },
    {
      name: "My New Entry Template",
      symName: "My New Entry Template",
      id: "{8ABE0E7A-67D3-C4B7-86DA-5DA29C200000}",
      type: "TEMPLATE",
      vsid: "{D7A4D5A3-2620-C81E-844B-5DA291A00000}",
    },
    {
      name: "TestFormEntryTemplate",
      symName: "TestFormEntryTemplate",
      id: "{95CC79E0-8A9A-401F-A8A6-A064FD59D921}",
      type: "TEMPLATE",
      vsid: "{BC9326E2-59E6-475E-8F7B-13FD15D9331F}",
    },
  ],
  addList: [
    {
      name: "Correspondence",
      symName: "Correspondence",
      id: "{E140E493-17EB-C79B-8481-705730F00000}",
      type: "TEMPLATE",
      vsid: "{9C871B5E-919B-C1C1-8785-5E12E3200000}",
    },
    {
      name: "My New Entry Template",
      symName: "My New Entry Template",
      id: "{8ABE0E7A-67D3-C4B7-86DA-5DA29C200000}",
      type: "TEMPLATE",
      vsid: "{D7A4D5A3-2620-C81E-844B-5DA291A00000}",
    },
    {
      name: "TestFormEntryTemplate",
      symName: "TestFormEntryTemplate",
      id: "{95CC79E0-8A9A-401F-A8A6-A064FD59D921}",
      type: "TEMPLATE",
      vsid: "{BC9326E2-59E6-475E-8F7B-13FD15D9331F}",
    },
  ],
};

// GET route to send the data
app.get("/api/data", (req, res) => {
  res.json(data);
});
app.get("/api/koc-fold", (req, res) => {
  const data = [
    {
      path: "/KOC Documents/KOC Level",
      name: "KOC Level",
      id: "{8682BC8C-0255-4D7C-8418-7C1D6CC3B859}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media Library",
      name: "KOC Media Library",
      id: "{F06CA2A4-5AA9-4611-8396-0152E19EC571}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/Saved Searches",
      name: "Saved Searches",
      id: "{2A176821-529F-46EB-88E5-FC877F437C8D}",
      type: "Folder",
    },
  ];

  res.json(data); // Send the JSON response with the objects
});

app.get("/api/getSub/:id", (req, res) => {
  const data = [
    {
      path: "/KOC Documents/KOC Media and Library System/All Images",
      name: "All Images",
      id: "{1016766C-3EDC-4DBB-88F6-C76C3FBBC933}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Editorial",
      name: "Editorial",
      id: "{9CF87D6F-0D2A-4CBD-8C1B-673B44337C8A}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Magazines",
      name: "Magazines",
      id: "{7D55F675-0883-457A-8221-D68FDB9B8DC2}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Music",
      name: "Music",
      id: "{A49D29AE-7079-492E-80F2-262888BD3670}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Template",
      name: "Template",
      id: "{34992F76-75AF-4D1C-81AE-48216E3F3694}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Text",
      name: "Text",
      id: "{4B56A4DE-1531-4A9C-824F-19582B562198}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media and Library System/Videos",
      name: "Videos",
      id: "{19585DEE-7F35-48B9-8A40-E0F890EFD7EB}",
      type: "Folder",
    },
  ];
  res.json(data); // Send the JSON response with the objects
});

// Set up storage engine for multer to save uploaded files in the "images" folder

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "images");
    // Ensure the folder exists
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Save the file with the original name
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// API to handle the document and file upload
app.post("/api/upload", upload.single("document"), (req, res) => {
  try {
    const { body, file } = req;

    if (!file) {
      return res.status(400).json({ message: "File not uploaded" });
    }

    let docInfo;
    try {
      docInfo = JSON.parse(body.DocInfo);
    } catch (error) {
      console.error("Error parsing DocInfo:", error);
      return res.status(400).json({ message: "Invalid DocInfo format" });
    }

    // Log the parsed data
    console.log("File details:", file);
    console.log("DocInfo:", docInfo);

    return res.status(200).json({
      message: "File uploaded successfully",
      fileDetails: file,
      docInfo: docInfo,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return res
      .status(500)
      .json({ message: "Server error while uploading file" });
  }
});

app.get("/get-magazine/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "magazines", fileName);
  console.log("File Path:", filePath);

  // Check if the requested file exists in the "magazines" folder
  fs.stat(filePath, (err) => {
    if (err) {
      return res.status(404).send("File not found");
    }

    // Serve the file
    res.sendFile(filePath);
  });
});

// Sample route to return a list of magazines
app.get("/get-magazines", (req, res) => {
  const magazineObjects = [
    {
      name: "Magazine 1",
      fileName: "pdf1.pdf",
      format: "application/pdf",
      addOn: "18/09/2024 10:00 AM",
      creator: "AdminUser",
      docclass: "Magazine",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      modOn: "18/09/2024 10:00 AM",
      modifier: "AdminUser",
      size: "2053448.0",
      verNo: "1.0",
      ecmNo: "1234567890",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "Magazine 2",
      fileName: "pdf2.pdf",
      format: "application/pdf",
      addOn: "18/09/2024 10:05 AM",
      creator: "AdminUser",
      docclass: "Magazine",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      modOn: "18/09/2024 10:05 AM",
      modifier: "AdminUser",
      size: "3053448.0",
      verNo: "1.0",
      ecmNo: "1234567891",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000002}",
    },
    // {
    //   name: "Magazine 3",
    //   fileName: "pdf200.pdf",
    //   format: "application/pdf",
    //   addOn: "18/09/2024 10:05 AM",
    //   creator: "AdminUser",
    //   docclass: "Magazine",
    //   id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
    //   modOn: "18/09/2024 10:05 AM",
    //   modifier: "AdminUser",
    //   size: "3053448.0",
    //   verNo: "1.0",
    //   ecmNo: "1234567891",
    //   vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000002}",
    // },
    {
      name: "Document 1",
      fileName: "docs1.doc",
      format: "application/msword",
      addOn: "18/09/2024 10:10 AM",
      creator: "AdminUser",
      docclass: "Document",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "18/09/2024 10:10 AM",
      modifier: "AdminUser",
      size: "4053448.0",
      verNo: "1.0",
      ecmNo: "1234567892",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000003}",
    },
    {
      name: "Document 2",
      fileName: "docs2.doc",
      format: "application/msword",
      addOn: "18/09/2024 10:15 AM",
      creator: "AdminUser",
      docclass: "Document",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800004}",
      modOn: "18/09/2024 10:15 AM",
      modifier: "AdminUser",
      size: "5053448.0",
      verNo: "1.0",
      ecmNo: "1234567893",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000004}",
    },
    {
      name: "Document 3",
      fileName: "doc3.docx",
      format:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      addOn: "18/09/2024 10:20 AM",
      creator: "AdminUser",
      docclass: "Document",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      modOn: "18/09/2024 10:20 AM",
      modifier: "AdminUser",
      size: "6053448.0",
      verNo: "1.0",
      ecmNo: "1234567894",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000005}",
    },
  ];

  res.json(magazineObjects);
});

app.get("/get-music/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "music", fileName);
  console.log("File Path:", filePath);

  // Check if the requested file exists in the "music" folder
  fs.stat(filePath, (err) => {
    if (err) {
      return res.status(404).send("Music file not found");
    }

    // Serve the music file
    res.sendFile(filePath);
  });
});

app.get("/get-musics", (req, res) => {
  const musicObjects = [
    {
      name: "Music 1",
      fileName: "music1.ogg",
      format: "audio/ogg",
      addOn: "18/09/2024 10:00 AM",
      creator: "AdminUser",
      docclass: "Music",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800006}",
      modOn: "18/09/2024 10:00 AM",
      modifier: "AdminUser",
      size: "2053448.0",
      verNo: "1.0",
      ecmNo: "1234567895",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000006}",
    },
    {
      name: "Music 2",
      fileName: "music2.wav",
      format: "audio/wav",
      addOn: "18/09/2024 10:05 AM",
      creator: "AdminUser",
      docclass: "Music",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800007}",
      modOn: "18/09/2024 10:05 AM",
      modifier: "AdminUser",
      size: "3053448.0",
      verNo: "1.0",
      ecmNo: "1234567896",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000007}",
    },
    {
      name: "Music 3",
      fileName: "music3dsfauhdfhkauhsdflksadjfhdfsakljhsaduhf.mp3",
      format: "audio/mpeg",
      addOn: "18/09/2024 10:10 AM",
      creator: "AdminUser",
      docclass: "Music",
      id: "{AA1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      modOn: "18/09/2024 10:10 AM",
      modifier: "AdminUser",
      size: "4053448.0",
      verNo: "1.0",
      ecmNo: "1234567897",
      vsid: "{AA1C24174C1-D765-C3F0-8619-5FF715000008}",
    },
  ];

  res.json(musicObjects);
});
app.get("/get-hist/:id", (req, res) => {
  const idParam = req.params.id;
  console.log("idPara", idParam);

  // Array of new IDs and their corresponding data
  const modalDataMap = {
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}": [
      { desc: "Checkin", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      // Add more data entries as needed
    ],
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}": [
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Update", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:43 AM" },
      // Add more data entries as needed
    ],
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}": [
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:44 AM",
      },
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:44 AM" },
      // Add more data entries as needed
    ],
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}": [
      { desc: "Read", user: "P8Admin", timestamp: "08/10/2024 08:45 AM" },
      {
        desc: "Get Content",
        user: "P8Admin",
        timestamp: "08/10/2024 08:45 AM",
      },
      // Add more data entries as needed
    ],
    // Add more IDs and their data as needed
  };

  // Find the data associated with the given idParam
  const data = modalDataMap[idParam];

  if (data) {
    res.json(data); // Send the matched data as JSON
  } else {
    res.status(404).json({ error: "ID not found" }); // Return an error if ID is not found
  }
});

app.get("/get-modal/:id", (req, res) => {
  const idParam = req.params.id;

  // Array of new IDs
  const ids = [
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
    "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
  ];

  // Create 5 objects by using the template
  const modalDataArray = ids.map((id) => ({
    document: {
      id: id,
      creator: "P8Admin",
      modifier: "P8Admin",
      addOn: "08/10/2024 08:43 AM",
      modOn: "08/10/2024 08:43 AM",
      size: "3739597.0",
      format: "image/jpeg",
      verNo: "1.0",
      docclass: "KOCDocument",
      entryTemplate: "{A90FAABD-8833-C616-85E3-64308DA00000}",
      etName: "Correspondence",
      vsid: "{EB585D36-C6C6-CA9E-8512-926AA7900000}",
      props: [
        {
          name: "Document Title",
          symName: "DocumentTitle",
          desc: "Title",
          dtype: "STRING",
          mvalues: ["{EDC4A0A4-DDF0-C98A-9EFF-91FF09000000}"],
          mtype: "N",
          len: 255,
          rOnly: "false",
          hidden: "false",
          req: "false",
          ltype: 0,
        },
        {
          name: "Email Subject",
          symName: "EmailSubject",
          desc: "Subject",
          dtype: "STRING",
          mvalues: [null],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "true",
          ltype: 0,
        },
        {
          name: "Document Date",
          symName: "DocumentDate",
          desc: "Document Date",
          dtype: "DATE",
          mvalues: ["08/10/2024"],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "false",
          ltype: 0,
        },
        {
          name: "Doc Type",
          symName: "DocType",
          desc: "Type",
          dtype: "STRING",
          mvalues: ["All Images"],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "true",
          ltype: 0,
        },
        {
          name: "Reference No",
          symName: "ReferenceNo",
          desc: "Ref #",
          dtype: "STRING",
          mvalues: ["1234-2345"],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "true",
          ltype: 0,
        },
        {
          name: "ECM No",
          symName: "ECMNo",
          desc: "ECM #",
          dtype: "STRING",
          mvalues: ["345261-24"],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "false",
          ltype: 0,
        },
        {
          name: "Document Status",
          symName: "DocumentStatus",
          desc: "Document Status",
          dtype: "STRING",
          mvalues: ["completed"],
          mtype: "N",
          len: 64,
          rOnly: "false",
          hidden: "false",
          req: "false",
          ltype: 0,
        },
      ],
    },
    permissions: [
      {
        accessType: "ALLOW",
        accessMask: 998903,
        granteeName: "P8Admin@ecm.ibm.local",
        displayName: "P8Admin",
        granteeType: "USER",
        permissionSource: "DIRECT",
        inheritDepth: 0,
        accessLevel: "Full Control",
        action: "READ",
        depthName: "This object only",
      },
      {
        accessType: "ALLOW",
        accessMask: 131201,
        granteeName: "#AUTHENTICATED-USERS",
        displayName: "#AUTHENTICATED-USERS",
        granteeType: "GROUP",
        permissionSource: "DEFAULT",
        inheritDepth: 0,
        accessLevel: "Viewer",
        action: "READ",
        depthName: "This object only",
      },
      {
        accessType: "ALLOW",
        accessMask: 998903,
        granteeName: "P8Admins@ecm.ibm.local",
        displayName: "P8Admins",
        granteeType: "GROUP",
        permissionSource: "DEFAULT",
        inheritDepth: 0,
        accessLevel: "Full Control",
        action: "READ",
        depthName: "This object only",
      },
      {
        accessType: "ALLOW",
        accessMask: 998871,
        granteeName: "Business Analysts@ecm.ibm.local",
        displayName: "Business Analysts",
        granteeType: "GROUP",
        permissionSource: "DEFAULT",
        inheritDepth: 0,
        accessLevel: "Full Control",
        action: "READ",
        depthName: "This object only",
      },
      {
        accessType: "ALLOW",
        accessMask: 998871,
        granteeName: "Case Administrators@ecm.ibm.local",
        displayName: "Case Administrators",
        granteeType: "GROUP",
        permissionSource: "DEFAULT",
        inheritDepth: 0,
        accessLevel: "Full Control",
        action: "READ",
        depthName: "This object only",
      },
      {
        accessType: "ALLOW",
        accessMask: 998871,
        granteeName: "Case Workers@ecm.ibm.local",
        displayName: "Case Workers",
        granteeType: "GROUP",
        permissionSource: "DEFAULT",
        inheritDepth: 0,
        accessLevel: "Full Control",
        action: "READ",
        depthName: "This object only",
      },
      // You can add more permission data here if needed.
    ],
    fileInFolders: [
      {
        path: "/KOC Documents/KOC Media and Library System/All Images",
        name: "All Images",
        id: "{CA89AB97-AC08-4276-8A88-F598D8D68DBC}",
        type: "Folder",
      },
    ],
  }));

  // Find the object that matches the idParam
  const result = modalDataArray.find((modal) => modal.document.id === idParam);

  // If object is found, send it. Otherwise, return a 404 error.
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Document not found" });
  }
});

app.get("/get-version/:id", (req, res) => {
  const id = req.params.id; // Get the id from the request parameters

  const dataObjects = [
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      creator: "P8Admin",
      modifier: "P8Admin",
      addOn: "13/10/2024 10:26 AM",
      modOn: "13/10/2024 10:26 AM",
      size: "4021219.0",
      format: "image/jpeg",
      verNo: "2.0",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800001}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      creator: "P8Admin",
      modifier: "P8Admin",
      addOn: "14/10/2024 11:30 AM",
      modOn: "14/10/2024 12:30 PM",
      size: "5021219.0",
      format: "image/jpeg",
      verNo: "2.1",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800006}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      creator: "Admin2",
      modifier: "Admin2",
      addOn: "15/10/2024 11:00 AM",
      modOn: "15/10/2024 12:00 PM",
      size: "5123419.0",
      format: "image/png",
      verNo: "1.1",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800002}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      creator: "Admin2",
      modifier: "Admin2",
      addOn: "16/10/2024 01:30 PM",
      modOn: "16/10/2024 02:30 PM",
      size: "6123419.0",
      format: "image/png",
      verNo: "1.2",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800007}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      creator: "P8Admin",
      modifier: "Admin3",
      addOn: "10/10/2024 09:00 AM",
      modOn: "11/10/2024 02:15 PM",
      size: "1041219.0",
      format: "image/gif",
      verNo: "3.0",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800003}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      creator: "Admin3",
      modifier: "P8Admin",
      addOn: "12/10/2024 10:00 AM",
      modOn: "12/10/2024 11:30 AM",
      size: "1241219.0",
      format: "image/gif",
      verNo: "3.1",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800008}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      creator: "Admin1",
      modifier: "P8Admin",
      addOn: "12/10/2024 08:45 AM",
      modOn: "12/10/2024 09:15 AM",
      size: "621215.0",
      format: "image/tiff",
      verNo: "1.0",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800004}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      creator: "Admin1",
      modifier: "P8Admin",
      addOn: "14/10/2024 09:45 AM",
      modOn: "14/10/2024 10:15 AM",
      size: "721215.0",
      format: "image/tiff",
      verNo: "1.1",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800009}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      creator: "P8Admin",
      modifier: "P8Admin",
      addOn: "13/10/2024 10:00 AM",
      modOn: "14/10/2024 03:10 PM",
      size: "3241219.0",
      format: "image/jpeg",
      verNo: "2.1",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800005}",
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      creator: "P8Admin",
      modifier: "P8Admin",
      addOn: "14/10/2024 04:00 PM",
      modOn: "14/10/2024 05:30 PM",
      size: "3541219.0",
      format: "image/jpeg",
      verNo: "2.2",
      vsid: "{85449F6D-D7D5-CDFD-843B-6DAF5B800010}",
    },
  ];

  // Find the object by ID
  const filteredData = dataObjects.filter((item) => item.id === id);

  if (filteredData.length > 0) {
    res.json(filteredData);
  } else {
    res.status(404).json({ message: "No data found for the provided ID" });
  }
});

// GET route to match document by ID
app.get("/get-docTrack/:id", (req, res) => {
  const { id } = req.params;
  const docData = [
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      subject: "Sent_Workflow_Report_07-11-2019 11_39_21",
      creator: "Fatima Moneer Mohammad",
      createdDate: 1573625719762,
      deadlineDate: 1573885800000,
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      subject: "Sent_Workflow_Report_08-11-2019 12_39_21",
      creator: "John Doe",
      createdDate: 1573712119762,
      deadlineDate: 1573891200000,
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      subject: "Sent_Workflow_Report_09-11-2019 10_20_11",
      creator: "Alice Johnson",
      createdDate: 1573801200000,
      deadlineDate: 1573958400000,
    },
    {
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      subject: "Sent_Workflow_Report_10-11-2019 09_15_45",
      creator: "Robert Smith",
      createdDate: 1573892400000,
      deadlineDate: 1574007600000,
    },
  ];

  // Find the document by matching the id
  const document = docData.find((doc) => doc.id === id);
  if (document) {
    // Make a shallow copy of the document object
    const { id, ...documentWithoutId } = document;

    // Return the document without the id
    res.json([documentWithoutId]);
  } else {
    // Return an error if no document is found
    res.status(404).json({ error: "Document not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
